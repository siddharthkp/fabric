export default {
  title: 'Title',
  description:
    'Buttons make common actions immediately visible and easy to perform with one click or tap.',
  propList: [
    {
      name: 'type',
      options: ['default', 'primary', 'transparent']
    },
    {
      name: 'size',
      options: ['default', 'slim', 'large']
    },
    {
      name: 'onClick',
      options: [
        'default',
        { name: 'onClick', value: `onClick={() => alert('You clicked the button!')}` }
      ]
    }
  ],
  example: `
// import Button from 'fabric/button'

<Button {props}>BUTTON</Button>

`
}
