import React from 'react'
import styled from 'styled-components'

const Table = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
`

const Row = styled.div`
  padding 5px 0;
`

class PropList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Table>
        {this.props.list.map((prop, index) =>
          <Row key={index}>
            <span>
              {prop.name}
            </span>
            <span>
              {prop.options.map((option, index) =>
                <span key={index} onClick={this.props.onPropsChange}>
                  {option.name}
                </span>
              )}
            </span>
          </Row>
        )}
      </Table>
    )
  }
}

export default PropList
