import React from 'react'
import styled from 'styled-components'
import Playground from '../common/playground'

const Table = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
`

const Header = styled.div`
  font-size: 21px;
  padding: 0 18px;
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

const Examples = props =>
  <Table>
    <Header>Examples</Header>
    <br />
    {props.examples &&
      props.examples.map(example =>
        <Row>
          <Playground code={example} components={props.components} />
        </Row>
      )}
    )}
  </Table>

export default Examples
