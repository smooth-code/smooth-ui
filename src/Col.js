import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import omit from 'object.omit'
import defaultTheme from './style/defaultTheme'
import handleRef from './internal/handleRef'

const GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto']

function generateBreakPoint(breakpoint) {
  return css`
    &.sui-col-${breakpoint} {
      position: relative;
      width: 100%;
      min-height: 1px;

      @media (min-width: ${props => props.theme.breakPoints[breakpoint]}px) {
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
            props.theme.breakPoints[breakpoint]}px) {
              flex: 0 0 ${width};
              max-width: ${width === 'auto' ? 'none' : width};
              ${width === 'auto' ? 'width: auto;' : ''}
            }
        }
      `
    })};
  `
}

const addProp = (propName, attribute, transform = x => x) => props =>
  typeof props[propName] !== 'undefined'
    ? css`
        ${attribute || propName}: ${transform(props[propName])};
      `
    : null

const ColComponent = ({ className, xs, sm, md, lg, xl, ...props }) => (
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
    {...omit(props, [
      'theme',
      'alignItems',
      'alignContent',
      'alignSelf',
      'justifyContent',
    ])}
  />
)

/** @component */
const Col = styled(handleRef(ColComponent))`
  &.sui-col {
    display: flex;

    ${addProp('alignItems', 'align-items')};
    ${addProp('alignContent', 'align-content')};
    ${addProp('alignSelf', 'align-self')};
    ${addProp('justifyContent', 'justify-content')};
    ${props => Object.keys(props.theme.breakPoints).map(generateBreakPoint)};
  }
`

Col.propTypes = {
  sm: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  xs: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  md: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  lg: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  xl: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.number]),
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  alignSelf: PropTypes.string,
  justifyContent: PropTypes.string,
}

Col.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Col
