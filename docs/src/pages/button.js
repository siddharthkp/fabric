import React from 'react'
import Playground from '../common/playground'
import Header from '../common/header'

import Button, { propList } from '../components/button'
const scope = { Button }

let example = `
// import Button from 'fabric/button'

<Button>Button</Button>
`

const ButtonDocs = () =>
  <div>
    <Header />
    <Playground code={example} scope={scope} />
  </div>

export default ButtonDocs
