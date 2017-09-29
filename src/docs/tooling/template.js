const template = (name, file, doc) => `
/* This file is autogenerated, please do not overwrite this */

import React from 'react'
import Page from '../common/page'

import ${name} from '../../components/${file}'
import docs from '../../components/${doc}'
const components = { ${name} }

export default () => <Page docs={docs} components={components} />

`

export default template