import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background: #c1ffe8;
  text-align: center;
  padding: ${props => (props.condensed ? '0' : '50px')};
  > img {
    height: ${props => (props.condensed ? '50px' : '150px')};
  }
`

const Title = styled.div`
  font-size: 24px;
  padding: 10px;
  color: #215c44;
`

export default () =>
  <Header condensed>
    <img src="logo.png" alt="logo" />
    <Title>Button</Title>
  </Header>
