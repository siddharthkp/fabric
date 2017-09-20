import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
`

const Option = styled.div`
  display: inline-block;
  padding: 20px;
  transition: color 0.5s;
  cursor: pointer;
  color: ${props => (props.selected ? '#C78A8B' : '#333')};
`

class PropTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onSelect(event) {
    const key = event.target.getAttribute('data-key')
    let value = event.target.getAttribute('data-value')
    if (value === 'default') value = null
    this.setState(prevState => {
      const newState = { ...prevState }
      newState[key] = value
      this.props.onPropsChanged(newState)
      return newState
    })
  }
  render() {
    return (
      <Table>
        {this.props.list.map((prop, index) =>
          <div key={index}>
            <span>
              {prop.name}:
            </span>
            {prop.options.map((option, index) =>
              <Option
                key={index}
                data-key={prop.name}
                data-value={option}
                selected={this.state[prop.name] === option}
                onClick={this.onSelect.bind(this)}
              >
                {option}
              </Option>
            )}
          </div>
        )}
      </Table>
    )
  }
}

export default PropTable
