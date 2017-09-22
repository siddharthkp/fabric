import styled from 'styled-components'
import theme from './theme'

const colors = {
  basic: {
    background: theme.white,
    border: theme.disabled,
    hoverBorder: theme.subtleHightlight,
    focusBorder: theme.highlight
  },
  readOnly: {
    background: theme.disabled,
    border: theme.disabled,
    hoverBorder: theme.disabled,
    focusBorder: theme.subtleHightlight
  },
  error: {
    background: theme.white,
    border: theme.error,
    hoverBorder: theme.error,
    focusBorder: theme.highlight
  },
  readOnlyError: {
    /*
      this is a weird combination,
      not sure if we should handle it or just ignore it
      i've handled it here, but looks silly.
    */
    background: theme.disabled,
    border: theme.error,
    hoverBorder: theme.error,
    focusBorder: theme.error
  }
}

const getColor = props => {
  if (props.readOnly && props.error) return colors.readOnlyError
  else if (props.readOnly) return colors.readOnly
  else if (props.error) return colors.error
  else return colors.basic
}

const Input = styled.input`
  border: 1px solid;
  border-radius: 3px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.71;
  border-color: ${props => getColor(props).border};
  background: ${props => getColor(props).background};
  font-family: ${props =>
    props.code ? 'Droid Sans Mono, monospace' : 'Nunito, sans-serif'};

  &:hover {
    border-color: ${props => getColor(props).hoverBorder};
  }
  &:focus {
    border-color: ${props => getColor(props).focusBorder};
    outline: none;
  }
`

export default Input
