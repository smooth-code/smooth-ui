import { system } from '@smooth-ui/system'
import PropDesc from './PropDesc'

const getSystemDesc = () =>
  PropDesc.oneOfType([
    PropDesc.string,
    PropDesc.number,
    PropDesc.shape({
      xs: PropDesc.oneOfType([PropDesc.string, PropDesc.number]),
      sm: PropDesc.oneOfType([PropDesc.string, PropDesc.number]),
      md: PropDesc.oneOfType([PropDesc.string, PropDesc.number]),
      lg: PropDesc.oneOfType([PropDesc.string, PropDesc.number]),
      xl: PropDesc.oneOfType([PropDesc.string, PropDesc.number]),
    }),
  ]).desc('[system]')

export const getSystemPropDesc = Component =>
  Object.keys(Component.propTypes).reduce((obj, prop) => {
    if (system.meta.props.includes(prop)) {
      obj[prop] = getSystemDesc()
    }
    return obj
  }, {})
