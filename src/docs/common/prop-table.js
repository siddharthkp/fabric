import React from 'react'
import styled from 'styled-components'
import getDefaultProps from './default-props'

const Table = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
`

const Header = styled.div`
  font-size: 21px;
  margin: 0 18px;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
`

const Row = styled.div`padding: 20px;`

const Name = styled.div`
  display: inline-block;
  width: 150px;
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
    const state = {}
    getDefaultProps(props.list).map(prop => (state[prop.name] = prop.value))
    this.state = state
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
        <Header>Props</Header>
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
                  data-value={option.value}
                  selected={this.state[prop.name] === option.value}
                  onClick={this.onSelect.bind(this)}
                >
                  {option.name}
                </Option>
              )}
          </Row>
        )}
      </Table>
    )
  }
}

export default PropTable
