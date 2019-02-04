import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { gridGutter } from './theming/index'
import { px } from './utils/index'
import createComponent from './createComponent'

const Row = createComponent(() => ({
  name: 'row',
  omitProps: ['gutter'],
  style: p => {
    const { gutter: rawGutter = gridGutter(p) } = p
    const gutter = px(rawGutter)
    return css`
      box-sizing: border-box;
      flex-grow: 1;
      flex-wrap: wrap;
      display: flex;
      margin-left: -${gutter};
      margin-right: -${gutter};
    `
  },
  propTypes: {
    children: PropTypes.node,
    gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  },
}))

export default Row
