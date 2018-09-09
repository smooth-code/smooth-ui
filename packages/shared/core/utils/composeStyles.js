import { merge } from './misc'

const composeStyles = (...styles) => {
  const stylesByProp = styles.reduce((props, systemStyle) => {
    if (systemStyle.meta) {
      systemStyle.meta.props.forEach(prop => {
        props[prop] = systemStyle
      })
    }
    return props
  }, {})

  const composedStyle = props => {
    const propKeys = Object.keys(props)
    const propCount = propKeys.length
    let style = {}
    for (let i = 0; i < propCount; i += 1) {
      const propKey = propKeys[i]
      const systemStyle = stylesByProp[propKey]
      if (systemStyle) {
        style = merge(
          style,
          systemStyle({ [propKey]: props[propKey], theme: props.theme }),
        )
      }
    }
    return style
  }

  composedStyle.meta = {
    props: styles.reduce(
      (keys, systemStyle) => [...keys, ...systemStyle.meta.props],
      [],
    ),
  }

  composedStyle.propTypes = styles
    .map(systemStyle => systemStyle.propTypes)
    .reduce(merge, {})

  return composedStyle
}

export default composeStyles
