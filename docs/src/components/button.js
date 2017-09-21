import styled from 'styled-components'

const colors = {
  basic: {
    background: '#f1f1f1',
    font: '#333333',
    border: '#eeeeee',
    hoverBackground: '#dbdada',
    focusBackground: '#d7d7d7'
  },
  primary: {
    background: '#333333',
    font: '#ffffff',
    border: '#eeeeee',
    hoverBackground: '#484848',
    focusBackground: '#313131'
  },
  transparent: {
    background: 'transparent',
    font: '#333333',
    border: '#333333',
    hoverBackground: '#f1f1f1',
    focusBackground: '#f1f1f1'
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
  border-radius: 3px;
  border: 1px solid;
  text-align: center;
  padding: ${props => setSize(props).padding};
  font-size: 13px;
  height: ${props => setSize(props).height};
  line-height: 1;
  letter-spacing: 1px;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
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

const propList = [
  {
    name: 'type',
    options: ['default', 'primary', 'transparent']
  },
  {
    name: 'size',
    options: ['default', 'small', 'large']
  },
  {
    name: 'onClick',
    options: [
      'default',
      { name: 'onClick', value: `onClick={() => alert('You clicked the button!')}` }
    ]
  }
]

export default Button
export { propList }
