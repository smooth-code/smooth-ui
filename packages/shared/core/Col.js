import PropTypes from 'prop-types'
import { mediaMinWidth } from './utils/breakpoints'
import { prop, px, th } from './utils/system'
import createComponent from './utils/createComponent'

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

function getBreakPointStyle(breakpoint, width, props) {
  const size = props[breakpoint]
  if (!isValidSize(size)) return null

  const nbColumns = th('gridColumns')(props)
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
      ...getOffsetStyle(props[`o${breakpoint}`], nbColumns),
    }),
  }
}

const getStyleFromProps = props => {
  const gutter = px(prop('gutter', 'gridGutter')(props))
  const breakpoints = th('breakpoints')(props)
  const breakpointsKeys = Object.keys(breakpoints)
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
    Object.assign(
      style,
      getBreakPointStyle(breakpoint, breakpoints[breakpoint], props),
    )
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

Col.Split = createComponent(() => ({
  name: 'col-split',
  style: () => ({ width: '100% !important' }),
}))

export default Col
