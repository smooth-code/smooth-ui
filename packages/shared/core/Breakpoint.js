import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { up, down } from './theming/index'
import createComponent from './createComponent'

const Breakpoint = createComponent(() => ({
  name: 'breakpoint',
  omitProps: ['up', 'down'],
  style: p => css`
    display: none;
    ${p.up && up(p.up, 'display: block;')(p)};
    ${p.down && down(p.down, 'display: block;')(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    up: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    down: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  },
}))

export default Breakpoint
