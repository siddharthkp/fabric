const fs = require('fs')
const glob = require('glob')
const { resolve, basename } = require('path')
require('./common/babel-register')

const files = glob.sync('src/components/*.doc.js').map(file => resolve(file))
const components = []

const template = (name, file, doc) => `
import React from 'react'
import Page from '../common/page'

import ${name} from '../../components/${file}'
import docs from '../../components/${doc}'
const components = { ${name} }

export default () => <Page docs={docs} components={components} />

`

files.map(file => {
  const { name } = require(file).default // component name
  const docFile = basename(file) // file name
  const componentFile = docFile.replace('.doc.js', '.js')
  const page = template(name, componentFile, docFile)
  fs.writeFileSync(`src/docs/pages/${name.toLowerCase()}.js`, page)

  // push into a list of components
  components.push(
    `{ name: '${name}', module: require('./${name.toLowerCase()}').default }`
  )
  return file
})

// generate _components list
fs.writeFileSync(
  'src/docs/pages/_components.js',
  `export default [${components.join(',')}]`
)
