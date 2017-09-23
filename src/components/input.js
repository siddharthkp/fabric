import styled from 'styled-components'
import { background, border, font } from './theme.json'
import validate from './helpers/validate-props'

const colors = {
  basic: {
    background: background.white,
    border: border.light,
    hoverBorder: border.subtle,
    focusBorder: border.highlight
  },
  readOnly: {
    background: background.disabled,
    border: border.subtle,
    hoverBorder: border.subtle,
    focusBorder: border.subtle
  },
  error: {
    background: background.white,
    border: border.error,
    hoverBorder: border.error,
    focusBorder: border.highlight
  }
}

const getColor = props => {
  if (props.readOnly) return colors.readOnly
  else if (props.error) return colors.error
  else return colors.basic
}

const Input = styled.input`
  ${props => validate('input', props)};
  border: 1px solid;
  border-radius: 3px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.71;
  border-color: ${props => getColor(props).border};
  background: ${props => getColor(props).background};
  font-family: ${props => (props.code ? font.code : font.text)};

  &:hover {
    border-color: ${props => getColor(props).hoverBorder};
  }
  &:focus {
    border-color: ${props => getColor(props).focusBorder};
    outline: none;
  }
`

export default Input
