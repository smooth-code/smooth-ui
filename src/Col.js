import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { mediaMinWidth } from './utils/breakpoints'
import { is } from './utils/misc'
import { prop, px } from './utils/system'
import createComponent from './utils/createComponent'

function getBreakPointStyle(breakpoint, width, gridSizes) {
  const common = {
    position: 'relative',
    width: '100%',
    minHeight: '1px',
  }

  const mediaQuery = mediaMinWidth(width)
  const media = style => (width === 0 ? style : { [mediaQuery]: style })

  const grow = {
    [`&.sui-col-${breakpoint}`]: {
      ...common,
      ...media({
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
      }),
    },
  }

  const sizes = gridSizes.reduce((obj, size) => {
    const auto = size === 'auto'
    const width = auto
      ? 'auto'
      : `${Math.round((size / 12) * 10 ** 6) / 10 ** 4}%`

    if (size) {
      Object.assign(obj, {
        [`&.sui-col-${breakpoint}-${size}`]: {
          ...common,
          ...media({
            flex: `0 0 ${width}`,
            maxWidth: auto ? 'none' : width,
            ...(auto ? { width: 'auto' } : null),
          }),
        },
      })
    }

    if (size !== 'auto') {
      Object.assign(obj, {
        [`&.sui-col-o${breakpoint}-${size}`]: {
          ...common,
          ...media({
            marginLeft: width,
          }),
        },
      })
    }

    return obj
  }, {})

  return {
    ...grow,
    ...sizes,
  }
}

const getStyleFromTheme = theme => {
  const gridSizes = [
    true,
    0,
    'auto',
    ...Array.from({ length: theme.gridColumns }, (_, index) => index + 1),
  ]
  return {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
    ...Object.keys(theme.breakpoints).reduce(
      (obj, breakpoint) =>
        Object.assign(
          obj,
          getBreakPointStyle(
            breakpoint,
            theme.breakpoints[breakpoint],
            gridSizes,
          ),
        ),
      {},
    ),
  }
}

const Col = createComponent(() => ({
  name: 'col',
  render: ({
    Component,
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    oxs,
    osm,
    omd,
    olg,
    oxl,
    ...props
  }) => (
    <Component
      className={classNames(className, {
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
        [`sui-col-oxs-${String(oxs)}`]: is(oxs),
        [`sui-col-osm-${String(osm)}`]: is(osm),
        [`sui-col-omd-${String(omd)}`]: is(omd),
        [`sui-col-olg-${String(olg)}`]: is(olg),
        [`sui-col-oxl-${String(oxl)}`]: is(oxl),
      })}
      {...props}
    />
  ),
  style: p => {
    const gutter = px(prop('gutter', 'gridGutter')(p))
    return {
      paddingLeft: gutter,
      paddingRight: gutter,
      ...getStyleFromTheme(p.theme),
    }
  },
  propTypes: {
    children: PropTypes.node,
    gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    xs: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
    sm: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
    md: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
    lg: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
    xl: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.number,
    ]),
    oxs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    osm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    omd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    olg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    oxl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  },
}))

Col.Split = createComponent(() => ({
  name: 'col-split',
  style: () => ({ width: '100% !important' }),
}))

export default Col
