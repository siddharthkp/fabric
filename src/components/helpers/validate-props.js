/*
  this file is only for dev environment
  it gets compiled out in production build
*/

import button from '../button.doc'
import input from '../input.doc'

const docs = { button, input }

const validate = (component, props) => {
  // pick docs based on component
  const propList = docs[component].propList

  const requiredProps = propList.filter(prop => prop.required)
  const propNames = Object.keys(props)

  // 1. check if there are mandatory props that are missing
  requiredProps.map(prop => {
    if (!propNames.includes(prop.name)) {
      console.warn(`${prop.name} is a required prop!`)
    } else if (!props[prop.name]) {
      console.warn(`${prop.name} can not have an empty value!`)
    }
    return prop
  })

  // 2. check if there are any conflicting props
  propList.map(prop => {
    const allowedValues = prop.options
      .map(prop => prop.value)
      .filter(value => value)

    let exists = false
    propNames.map(value => {
      if (allowedValues.includes(value)) {
        if (exists)
          console.warn(
            `Conflict! Can't use both ${value} and ${exists} together`
          )
        else exists = value
      }
      return value
    })

    return prop
  })

  /*
    TODO: 3. check if the values are valid
    might need a tiny change in the docs for type checking
  */

  return true
}

export default validate
