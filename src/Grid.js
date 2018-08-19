import PropTypes from 'prop-types'
import { mediaMinWidth } from './utils/breakpoints'
import { prop, px, th } from './utils/system'
import createComponent from './utils/createComponent'

const styleBreakpoints = p => {
  const breakpoints = th('breakpoints')(p)
  const gridMaxWidths = th('gridMaxWidths')(p)
  const style = breakpoint => {
    const width = breakpoints[breakpoint]
    const media = s => (width === 0 ? s : { [mediaMinWidth(width)]: s })
    return media({ maxWidth: gridMaxWidths[breakpoint] })
  }
  return Object.keys(breakpoints).reduce(
    (obj, breakpoint) => Object.assign(obj, style(breakpoint)),
    {},
  )
}

const Grid = createComponent(() => ({
  name: 'grid',
  omitProps: ['gutter', 'fluid'],
  style: p => {
    const gutter = px(prop('gutter', 'gridGutter')(p))
    return {
      width: '100%',
      paddingRight: gutter,
      paddingLeft: gutter,
      marginRight: 'auto',
      marginLeft: 'auto',
      ...(p.fluid ? null : styleBreakpoints(p)),
    }
  },
  propTypes: {
    children: PropTypes.node,
    gutter: PropTypes.number,
    fluid: PropTypes.bool,
  },
}))

export default Grid
