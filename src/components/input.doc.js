export default {
  name: 'Input',
  description:
    'An input field is typically used in forms. It has a range of options and supports several text formats including numbers.',
  propList: [
    {
      name: 'type',
      options: [
        { name: 'text', value: `type="text"`, default: true },
        { name: 'password', value: `type="password"` }
      ],
      required: true
    },
    {
      name: 'code',
      options: [
        { name: 'default', value: '', default: true },
        { name: 'code', value: 'code' }
      ]
    },
    {
      name: 'readOnly',
      options: [
        { name: 'editable', value: '', default: true },
        { name: 'readOnly', value: 'readOnly' }
      ]
    },
    {
      name: 'placeholder',
      options: [
        { name: 'none', value: '' },
        {
          name: 'string',
          value: `placeholder="Enter your username"`,
          default: true
        }
      ]
    },
    {
      name: 'error',
      options: [
        { name: 'none', value: '', default: true },
        {
          name: 'string',
          value: `error="Please enter a valid username"`
        }
      ]
    }
  ],
  template: `
// import Input from 'fabric/button'

<Input {props} />

`,
  examples: [
    `<Input type="password" defaultValue="password" />`,
    `<Input type="text" code defaultValue="const age = 18"/>`,
    `<Input type="text" readOnly defaultValue="can't touch this"/>`,
    `<Input type="text" error="Email address is invalid" defaultValue="sid@auth0..com" />`
  ]
}
