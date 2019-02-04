import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { gridGutter, gridColumns, breakpoints } from './theming/index'
import { px, mediaMinWidth } from './utils/index'
import createComponent from './createComponent'

const common = {
  position: 'relative',
  width: '100%',
  minHeight: '1px',
}

function isValidSize(size) {
  return size || size === 0
}

function getSizeWidth(size, nbColumns) {
  return `${Math.round((size / nbColumns) * 10 ** 6) / 10 ** 4}%`
}

function getOffsetStyle(offsetSize, nbColumns) {
  if (isValidSize(offsetSize)) {
    const marginLeft = getSizeWidth(offsetSize, nbColumns)
    return { marginLeft }
  }
  return null
}

function getBreakPointStyle(breakpoint, width, p) {
  const size = p[breakpoint]
  if (!isValidSize(size)) return null

  const nbColumns = gridColumns(p)
  const mediaQuery = mediaMinWidth(width)
  const media = style => (width === 0 ? style : { [mediaQuery]: style })

  if (size === true) {
    return {
      ...common,
      ...media({
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%',
      }),
    }
  }

  if (size === 'auto') {
    return {
      ...common,
      ...media({
        flex: `0 0 auto`,
        maxWidth: 'none',
        width: 'auto',
      }),
    }
  }

  const sizeWidth = getSizeWidth(size, nbColumns)

  return {
    ...common,
    ...media({
      flex: `0 0 ${sizeWidth}`,
      maxWidth: sizeWidth,
      ...getOffsetStyle(p[`o${breakpoint}`], nbColumns),
    }),
  }
}

function getStyleFromProps(p) {
  const { gutter: rawGutter = gridGutter(p) } = p
  const gutter = px(rawGutter)
  const bk = breakpoints(p)
  const breakpointsKeys = Object.keys(bk)
  const style = {
    boxSizing: 'border-box',
    paddingLeft: gutter,
    paddingRight: gutter,
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%',
  }

  let index = -1
  // eslint-disable-next-line no-plusplus
  while (++index < breakpointsKeys.length) {
    const breakpoint = breakpointsKeys[index]
    Object.assign(style, getBreakPointStyle(breakpoint, bk[breakpoint], p))
  }

  return style
}

const Col = createComponent(() => ({
  name: 'col',
  omitProps: ['xs', 'sm', 'md', 'lg', 'xl', 'oxs', 'osm', 'omd', 'olg', 'oxl'],
  style: getStyleFromProps,
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

const Split = createComponent(() => ({
  name: 'col-split',
  style: () =>
    css`
      width: 100% !important;
    `,
}))

/* #__PURE__ */
Object.defineProperty(Col, 'Split', { value: Split })

export default Col
