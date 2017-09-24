export default {
  name: 'Button',
  description:
    'Buttons make common actions immediately visible and easy to perform with one click or tap.',
  propList: [
    {
      name: 'type',
      format: 'bool',
      description: 'type of button',
      options: [
        { name: 'basic', value: '', default: true },
        { name: 'primary', value: 'primary' },
        { name: 'transparent', value: 'transparent' }
      ]
    },
    {
      name: 'size',
      format: 'bool',
      description: 'use large/small for changing emphasis',
      options: [
        { name: 'default', value: '', default: true },
        { name: 'slim', value: 'slim' },
        { name: 'large', value: 'large' }
      ]
    },
    {
      name: 'onClick',
      format: 'function',
      description: 'pass on your own click handler',
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
