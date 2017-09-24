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
  justify-content: ${props => (props.main ? 'center' : 'auto')};
`

const Container = styled.div`
  width: ${props => (props.main ? '80%' : '100%')};
  max-width: 800px;
  margin: ${props => (props.main ? '50px' : 'auto')} auto;
  & .prism-code {
    background: #354355;
    overflow-x: auto;
    border-radius: 4px;
  }
  & .token.comment {
    color: #889aaf;
  }
  & .react-live-error {
    font-size: 13px;
    background: #d9675d;
    color: #fff;
    padding: 5px;
  }
`

const Playground = props =>
  <Container main={props.main}>
    <LiveProvider code={props.code} scope={props.components}>
      <Left>
        <Center main={props.main} style={{ minHeight: '50px' }}>
          <LivePreview />
        </Center>
      </Left>
      <Right>
        <LiveEditor id="editor" style={{ minHeight: '50px' }} />
      </Right>
      <Clear />
      <LiveError />
    </LiveProvider>
  </Container>

export default Playground
