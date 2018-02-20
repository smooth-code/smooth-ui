import React from 'react'
import classNames from 'classnames'
import Input from './Input'

const TextareaComponent = ({
  className,
  control,
  size,
  theme,
  valid,
  ...props
}) => (
  <textarea
    {...props}
    className={classNames(
      'sui-input',
      {
        'sui-control': control,
        'sui-is-valid': valid === true,
        'sui-is-invalid': valid === false,
        [`sui-input-${size}`]: size,
      },
      className,
    )}
  />
)

const Textarea = Input.withComponent(TextareaComponent)

/** @component */
export default Textarea
