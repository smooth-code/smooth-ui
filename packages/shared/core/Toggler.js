import PropTypes from 'prop-types'
import useToggle from './hooks/useToggle'

function create() {
  function Toggler({ children, defaultToggled, onToggle: onToggleProp }) {
    return children(useToggle(defaultToggled, onToggleProp))
  }

  Toggler.propTypes = {
    children: PropTypes.func.isRequired,
    defaultToggled: PropTypes.bool,
    onToggle: PropTypes.func,
  }

  return Toggler
}

export default create()
