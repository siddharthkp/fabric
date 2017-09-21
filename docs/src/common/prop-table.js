import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
`

const Row = styled.div`padding: 20px;`

const Name = styled.div`
  display: inline-block;
  width: 100px;
`

const Option = styled.div`
  display: inline-block;
  min-width: 100px;
  transition: color 0.5s;
  cursor: pointer;
  color: ${props => (props.selected ? '#C78A8B' : '#333')};
`

class PropTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    props.list.map(prop => (this.state[prop.name] = 'default'))
  }
  onSelect(event) {
    const key = event.target.getAttribute('data-key')
    let value = event.target.getAttribute('data-value')
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
        <div>Customizations/Props:</div>
        <br />
        {this.props.list.map((prop, index) =>
          <Row key={index}>
            <Name>
              {prop.name}:
            </Name>

            {prop.options &&
              prop.options.map((option, index) =>
                <Option
                  key={index}
                  data-key={prop.name}
                  data-value={option.value || option}
                  selected={this.state[prop.name] === (option.value || option)}
                  onClick={this.onSelect.bind(this)}
                >
                  {option.name || option}
                </Option>
              )}
          </Row>
        )}
      </Table>
    )
  }
}

export default PropTable
