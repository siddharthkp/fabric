import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'
import components from '../pages/_components'

const Navigation = styled.div`
  height: 100vh;
  position: fixed;
  background: #c1ffe8;
  width: 10%;

  & a {
    display: block;
    text-decoration: none;
    color: #215c44;
    padding: 10px;
  }

  & a:hover {
    color: #00a182;
  }

  & a.active {
    color: #00a182;
  }
`

export default props =>
  <Navigation>
    <Header condensed />
    {components.map(component =>
      <NavLink key={component.name} to={`/${component.name}`}>
        {component.name}
      </NavLink>
    )}
  </Navigation>
