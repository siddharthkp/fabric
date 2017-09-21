import React from 'react'
import Playground from '../common/playground'
import Header from '../common/header'
import Description from '../common/description'
import PropTable from '../common/prop-table'

const format = (code, props) => {
  code = code.replace('{props}', props || '')
  code = window.prettyFormat(code, { printWidth: 50 })
  code += '\n'
  return code
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: format(this.props.docs.example)
    }
  }

  onPropsChanged(properties) {
    properties = Object.values(properties)
    properties = properties.filter(prop => prop !== 'default').join(' ').trim()

    let code = format(this.props.docs.example, properties)

    this.setState({ code })
  }
  render() {
    return (
      <div>
        <Header condensed title={this.props.docs.title} />
        <Description>
          {this.props.docs.description}
        </Description>
        <Playground code={this.state.code} components={this.props.components} />
        <PropTable
          list={this.props.docs.propList}
          onPropsChanged={this.onPropsChanged.bind(this)}
        />
      </div>
    )
  }
}

export default Page
