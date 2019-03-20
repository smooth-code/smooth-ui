import PropTypes from 'prop-types'
import { pr, pl } from '@smooth-ui/system'
import { mediaMinWidth } from './utils/index'
import { gridMaxWidths, gridGutter, breakpoints } from './theming/index'
import { getSystemPropTypes } from './utils/propTypes'
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
    const { gutter = gridGutter(p) } = p
    return {
      width: '100%',
      ...pr({ pr: gutter })(p),
      ...pl({ pl: gutter })(p),
      marginRight: 'auto',
      marginLeft: 'auto',
      ...(p.fluid ? null : styleBreakpoints(p)),
    }
  },
  propTypes: {
    children: PropTypes.node,
    gutter: getSystemPropTypes(pr).pr,
    fluid: PropTypes.bool,
  },
}))

export default Grid
