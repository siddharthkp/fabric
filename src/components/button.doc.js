export default {
  name: 'Button',
  description:
    'Buttons make common actions immediately visible and easy to perform with one click or tap.',
  propList: [
    {
      name: 'type',
      options: [
        { name: 'basic', value: '', default: true },
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
        { name: 'none', value: '', default: true },
        {
          name: 'onClick',
          value: `onClick={() => alert('You clicked the button!')}`
        }
      ]
    }
  ],
  template: `
// import Button from 'fabric/button'

<Button {props}>BUTTON</Button>

`,
  examples: [
    `<Button primary>BUTTON</Button>`,
    `<Button transparent>TRANSPARENT</Button>`,
    `<Button large primary>LARGE PRIMARY BUTTON</Button>`,
    `<Button onClick={() => alert('You clicked the button!')}>Click me!</Button>`
  ]
}
