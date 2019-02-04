import PropTypes from 'prop-types'
import { px, mediaMinWidth } from './utils/index'
import { gridMaxWidths, gridGutter, breakpoints } from './theming/index'
import createComponent from './createComponent'

const styleBreakpoints = p => {
  const bk = breakpoints(p)
  const maxWidths = gridMaxWidths(p)
  const style = breakpoint => {
    const width = bk[breakpoint]
    const media = s => (width === 0 ? s : { [mediaMinWidth(width)]: s })
    return media({ maxWidth: maxWidths[breakpoint] })
  }
  return Object.keys(bk).reduce(
    (obj, breakpoint) => Object.assign(obj, style(breakpoint)),
    {},
  )
}

const Grid = createComponent(() => ({
  name: 'grid',
  omitProps: ['gutter', 'fluid'],
  style: p => {
    const { gutter: rawGutter = gridGutter(p) } = p
    const gutter = px(rawGutter)
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
