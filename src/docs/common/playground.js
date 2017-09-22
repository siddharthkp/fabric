import React from 'react'
import styled from 'styled-components'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const Left = styled.div`
  float: left;
  width: 50%;
  @media screen and (max-width: 699px) {
    & {
      width: 100%;
    }
  }
`
const Right = styled.div`
  float: right;
  width: 50%;
  @media screen and (max-width: 699px) {
    & {
      width: 100%;
    }
  }
`
const Clear = styled.div`clear: both;`

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
  & .prism-code {
    background: #1b1c23;
    overflow-x: auto;
  }
  & .token.comment {
    color: #4e6075;
  }
`

const Playground = props =>
  <Container>
    <LiveProvider code={props.code} scope={props.components}>
      <Left>
        <LiveEditor id="editor" style={{ minHeight: '100px' }} />
      </Left>
      <Right>
        <Center style={{ minHeight: '100px' }}>
          <LiveError />
          <LivePreview />
        </Center>
      </Right>
      <Clear />
    </LiveProvider>
  </Container>

export default Playground
