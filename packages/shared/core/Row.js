import PropTypes from 'prop-types'
import { mr, ml } from '@smooth-ui/system'
import { css } from './styled-engine'
import { gridGutter } from './theming/index'
import { negative } from './utils/unit'
import { getSystemPropTypes } from './utils/propTypes'
import createComponent from './createComponent'

const Row = createComponent(() => ({
  name: 'row',
  omitProps: ['gutter'],
  style: p => {
    const { gutter = gridGutter(p) } = p
    const negativeGutter = negative(gutter)
    return css`
      box-sizing: border-box;
      flex-grow: 1;
      flex-wrap: wrap;
      display: flex;
      ${ml({ ml: negativeGutter })(p)}
      ${mr({ mr: negativeGutter })(p)}
    `
  },
  propTypes: {
    children: PropTypes.node,
    gutter: getSystemPropTypes(ml).ml,
  },
}))

export default Row
