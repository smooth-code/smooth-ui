import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
import { mixin } from './utils'

const FormCheckComponent = ({
  component: Component = 'div',
  className,
  inline,
  theme,
  ...props
}) => (
  <Component
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

const FormCheckRefComponent = handleRef(FormCheckComponent)

const FormCheck = styled(FormCheckRefComponent)`
  ${mixin('base')};
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

FormCheck.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(FormCheck, FormCheckRefComponent)

/** @component */
export default FormCheck
