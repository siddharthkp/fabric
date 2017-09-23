import styled from 'styled-components'
import { background, border, text, font } from './theme.json'
import validate from './helpers/validate-props'

const colors = {
  basic: {
    background: background.light,
    hoverBackground: background.lightHover,
    focusBackground: background.lightFocus,
    font: text.dark,
    border: border.light
  },
  primary: {
    background: background.primary,
    font: text.light,
    border: border.light,
    hoverBackground: background.primaryHover,
    focusBackground: background.primaryFocus
  },
  transparent: {
    background: 'transparent',
    font: text.dark,
    border: border.primary,
    hoverBackground: background.light,
    focusBackground: background.light
  }
}

const getColor = props => {
  if (props.primary) return colors.primary
  else if (props.transparent) return colors.transparent
  else return colors.basic
}

const setSize = props => {
  if (props.slim) return { padding: '6px 12px', height: '25px' }
  else if (props.large) return { padding: '12px 24px', height: '50px' }
  return { padding: '12px 16px', height: '35px' }
}

const Button = styled.button`
  ${props => validate('button', props)};
  border-radius: 3px;
  border: 1px solid;
  text-align: center;
  padding: ${props => setSize(props).padding};
  font-size: 13px;
  height: ${props => setSize(props).height};
  line-height: 1;
  letter-spacing: 1px;
  cursor: pointer;
  font-family: ${font.text};
  transition: background-color 0.5s, height 0.5s, padding 0.5s;

  color: ${props => getColor(props).font};
  background-color: ${props => getColor(props).background};
  border-color: ${props => getColor(props).border};
  &:hover {
    background-color: ${props => getColor(props).hoverBackground};
  }
  &:focus {
    background-color: ${props => getColor(props).focusBackground};
    outline: none;
  }
`

export default Button
