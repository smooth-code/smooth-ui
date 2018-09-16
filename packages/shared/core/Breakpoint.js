import PropTypes from 'prop-types'
import { css } from './styled-engine'
import { up, down } from './utils/breakpoints'
import createComponent from './utils/createComponent'

const Breakpoint = createComponent(() => ({
  name: 'breakpoint',
  omitProps: ['up', 'down'],
  style: css`
    display: none;
    ${p => p.up && up(p.up, 'display: block;')};
    ${p => p.down && down(p.down, 'display: block;')};
  `,
  propTypes: {
    children: PropTypes.node,
    up: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    down: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  },
}))

export default Breakpoint
