import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import * as defaultTheme from './style/defaultTheme'
import handleRef from './internal/handleRef'

const GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto']

function generateBreakPoint(breakpoint) {
  return css`
    &.sui-col-${breakpoint} {
      position: relative;
      width: 100%;
      min-height: 1px;

      @media (min-width: ${props => props.theme.breakpoints[breakpoint]}px) {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%;
      }
    }

    ${GRID_SIZES.map(size => {
      if (typeof size === 'boolean') return null

      // Only keep 6 significant numbers.
      const width =
        size !== 'auto'
          ? `${Math.round(size / 12 * 10 ** 6) / 10 ** 4}%`
          : 'auto'

      return css`
        &.sui-col-${breakpoint}-${size} {
          position: relative;
          width: 100%;
          min-height: 1px;

          @media (min-width: ${props =>
            props.theme.breakpoints[breakpoint]}px) {
              flex: 0 0 ${width};
              max-width: ${width === 'auto' ? 'none' : width};
              ${width === 'auto' ? 'width: auto;' : ''}
            }
        }
      `
    })};
  `
}

const ColComponent = ({ className, xs, sm, md, lg, xl, theme, ...props }) => (
  <div
    className={classNames(
      'sui-col',
      {
        'sui-col-xs': xs === true,
        [`sui-col-xs-${String(xs)}`]: xs && xs !== true,
        'sui-col-sm': sm === true,
        [`sui-col-sm-${String(sm)}`]: sm && sm !== true,
        'sui-col-md': md === true,
        [`sui-col-md-${String(md)}`]: md && md !== true,
        'sui-col-lg': lg === true,
        [`sui-col-lg-${String(lg)}`]: lg && lg !== true,
        'sui-col-xl': xl === true,
        [`sui-col-xl-${String(xl)}`]: xl && xl !== true,
      },
      className,
    )}
    {...props}
  />
)

/** @component */
const Col = styled(handleRef(ColComponent))`
  padding-left: 15px;
  padding-right: 15px;
  ${props => Object.keys(props.theme.breakpoints).map(generateBreakPoint)};
`

Col.propTypes = {
  sm: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
}

Col.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Col
