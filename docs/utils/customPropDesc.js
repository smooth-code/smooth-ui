import PropDesc from './PropDesc'
import { styles } from '@smooth-ui'

const systemProps = styles.system.meta.props

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
    if (systemProps.includes(prop)) {
      obj[prop] = getSystemDesc()
    }
    return obj
  }, {})
