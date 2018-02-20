import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FormCheckComponent = ({ className, inline, theme, ...props }) => (
  <div
    className={classNames(
      'sui-form-check',
      {
        'sui-form-check-inline': inline,
      },
      className,
    )}
    {...props}
  />
)

const FormCheck = styled(FormCheckComponent)`
  display: flex;
  align-items: center;

  &.sui-form-check-inline {
    display: inline-flex;
    margin-right: 0.75rem;
  }
`

FormCheck.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
}

/** @component */
export default FormCheck
