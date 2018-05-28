import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { css } from 'styled-components'
import handleRef from './internal/handleRef'
import setWithComponent from './internal/setWithComponent'
import * as defaultTheme from './theme/defaultTheme'
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

const AlertRefComponent = handleRef(AlertComponent)

const Alert = styled(AlertRefComponent)`
  ${mixin('base')};
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
  children: PropTypes.node,
  variant: PropTypes.oneOf(variants).isRequired,
}

Alert.defaultProps = {
  theme: defaultTheme,
}

setWithComponent(Alert, AlertRefComponent)

/** @component */
export default Alert
