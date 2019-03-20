import PropTypes from 'prop-types'

export function getSystemPropTypes(system) {
  if (!system) return {}
  return system.meta.props.reduce((obj, prop) => {
    obj[prop] = PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
    ])
    return obj
  }, {})
}
