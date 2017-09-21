import React from 'react'
import Playground from '../common/playground'
import Header from '../common/header'
import Description from '../common/description'
import PropTable from '../common/prop-table'

import Button, { propList } from '../components/button'
const scope = { Button }

class ButtonDocs extends React.Component {
  constructor() {
    super()
    this.state = {
      example: `
// import Button from 'fabric/button'

<Button>Button</Button>

`
    }
  }

  onPropsChanged(properties) {
    const props = Object.values(properties)
      .map(prop => (prop !== 'default' ? prop : null))
      .join(' ')
      .trim()

    let example = `
// import Button from 'fabric/button'

<Button ${props}>Button</Button>

`

    this.setState({ example })
  }
  render() {
    return (
      <div>
        <Header condensed title="Buttons" />
        <Description>
          Buttons make common actions immediately visible and easy to perform with one click or tap.
        </Description>
        <Playground code={this.state.example} scope={scope} />
        <PropTable list={propList} onPropsChanged={this.onPropsChanged.bind(this)} />
      </div>
    )
  }
}

export default ButtonDocs
