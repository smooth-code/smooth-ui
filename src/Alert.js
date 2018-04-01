import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { css } from 'styled-components'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './style/defaultTheme'
import { th, mixin } from './utils'

const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

const AlertComponent = ({
  className,
  component: Component = 'div',
  theme,
  variant,
  ...props
}) => (
  <Component
    {...props}
    className={classNames(
      'sui-alert',
      {
        [`sui-alert-${variant}`]: variant,
      },
      className,
    )}
  />
)

const Alert = styled(handleRef(AlertComponent))`
  position: relative;
  padding: ${th('alertPaddingY')} ${th('alertPaddingX')};
  margin-bottom: ${th('alertMarginBottom')};
  border: 1px solid transparent;
  border-radius: ${th('borderRadius')};

  ${variants.map(
    variant => css`
      &.sui-alert-${variant} {
        ${mixin('alertVariant', variant)};
      }
    `,
  )};
`

Alert.propTypes = {
  variant: PropTypes.oneOf(variants),
  theme: PropTypes.object,
}

Alert.defaultProps = {
  variant: 'primary',
  theme: defaultTheme,
}

setWithComponent(Alert, AlertComponent)

/** @component */
export default Alert
