import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import useNode from './hooks/useNode'

function create() {
  function Portal({ children, type = 'sui-portal' }) {
    const node = useNode(type)
    if (!node) return null
    return createPortal(children, node)
  }

  Portal.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
  }

  return Portal
}

export default create()
