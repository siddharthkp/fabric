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

const Example = styled.div`padding: 0 20px;`

const Examples = props =>
  <Table>
    <Header>Examples</Header>
    <br />
    {props.examples &&
      props.examples.map((example, index) =>
        <Example key={index}>
          <Playground code={example} components={props.components} />
        </Example>
      )}
  </Table>

export default Examples
