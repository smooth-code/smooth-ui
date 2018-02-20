import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as defaultTheme from './style/defaultTheme'
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

Input.propTypes = {
  control: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  theme: PropTypes.object,
  valid: PropTypes.bool,
}

Input.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Textarea
