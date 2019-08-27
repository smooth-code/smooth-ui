/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { Input } from './Input'
import { useFormControlProps } from './Form'
import { createInnerComponent } from './util'

const InnerTextarea = createInnerComponent({
  name: 'Textarea',
  render: ({ as: As = 'textarea', ...props }) => {
    const controlProps = useFormControlProps(props)
    return <As {...props} {...controlProps} />
  },
})

export const Textarea = Input.withComponent(InnerTextarea)
Textarea.propTypes = Input.propTypes
