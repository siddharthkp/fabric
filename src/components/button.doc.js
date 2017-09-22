export default {
  title: 'Button',
  description:
    'Buttons make common actions immediately visible and easy to perform with one click or tap.',
  propList: [
    {
      name: 'type',
      options: [
        { name: 'default', value: '', default: true },
        { name: 'primary', value: 'primary' },
        { name: 'transparent', value: 'transparent' }
      ]
    },
    {
      name: 'size',
      options: [
        { name: 'default', value: '', default: true },
        { name: 'slim', value: 'slim' },
        { name: 'large', value: 'large' }
      ]
    },
    {
      name: 'onClick',
      options: [
        { name: 'default', value: '', default: true },
        {
          name: 'onClick',
          value: `onClick={() => alert('You clicked the button!')}`
        }
      ]
    }
  ],
  example: `
// import Button from 'fabric/button'

<Button {props}>BUTTON</Button>

`
}
