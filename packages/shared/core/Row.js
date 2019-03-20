import PropTypes from 'prop-types'
import { mr, ml } from '@smooth-ui/system'
import { css } from './styled-engine'
import { gridGutter } from './theming/index'
import { getSystemPropTypes } from './utils/propTypes'
import createComponent from './createComponent'

const Row = createComponent(() => ({
  name: 'row',
  omitProps: ['gutter'],
  style: p => {
    const { gutter = gridGutter(p) } = p
    return css`
      box-sizing: border-box;
      flex-grow: 1;
      flex-wrap: wrap;
      display: flex;
      ${ml({ ml: gutter })(p)}
      ${mr({ mr: gutter })(p)}
    `
  },
  propTypes: {
    children: PropTypes.node,
    gutter: getSystemPropTypes(ml).ml,
  },
}))

export default Row
