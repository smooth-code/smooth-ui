import { minWidth, DEFAULT_BREAKPOINTS } from './media'
import { is, num, string, obj, merge, getThemeValue, warn } from './util'

const transformOptions = {}

export const themeGetter = ({
  transform,
  themeKey,
  defaultVariants,
}) => value => {
  return props => {
    let variants = is(themeKey) ? getThemeValue(props, themeKey) : null
    variants = is(variants) ? variants : defaultVariants
    const themeValue = is(variants)
      ? getThemeValue(props, value, variants)
      : null
    const computedValue = is(themeValue) ? themeValue : value
    if (!transform) return computedValue
    transformOptions.rawValue = value
    transformOptions.variants = variants
    return transform(computedValue, transformOptions)
  }
}

function styleFromValue(cssProperties, value, props, themeGet) {
  const computedValue = themeGet(value)(props)
  if (string(computedValue) || num(computedValue)) {
    const style = {}
    for (let i = 0; i < cssProperties.length; i++) {
      style[cssProperties[i]] = computedValue
    }
    return style
  }
  return null
}

function getBreakpoints(props) {
  const themeBreakpoints = getThemeValue(props, 'breakpoints')
  if (is(themeBreakpoints)) return themeBreakpoints
  return DEFAULT_BREAKPOINTS
}

function createStyleGenerator(getStyle, props, generators) {
  getStyle.meta = {
    props,
    getStyle,
    generators,
  }

  return getStyle
}

function styleFromBreakPoint(cssProperties, value, props, themeGet) {
  const breakpoints = getBreakpoints(props)
  const keys = Object.keys(value)
  let allStyle = {}
  for (let i = 0; i < keys.length; i++) {
    const breakpoint = keys[i]
    const style = styleFromValue(
      cssProperties,
      value[breakpoint],
      props,
      themeGet,
    )

    if (style !== null) {
      const breakpointValue = breakpoints[breakpoint]

      if (breakpointValue === 0) {
        allStyle = merge(allStyle, style)
      } else {
        allStyle = merge(allStyle, {
          [minWidth(breakpointValue)]: style,
        })
      }
    }
  }
  return allStyle
}

function getStyleFactory(prop, cssProperties, themeGet) {
  return function getStyle(props) {
    const value = props[prop]
    if (!is(value)) return null
    cssProperties = cssProperties || [prop]

    const style = styleFromValue(cssProperties, value, props, themeGet)

    if (style !== null) {
      return style
    }

    if (obj(value)) {
      return styleFromBreakPoint(cssProperties, value, props, themeGet)
    }

    return null
  }
}

export function style({
  prop,
  cssProperties,
  themeKey = null,
  transform = null,
  themeGet = null,
}) {
  themeGet = themeGet || themeGetter({ themeKey, transform })
  const getStyle = getStyleFactory(prop, cssProperties, themeGet)
  return createStyleGenerator(getStyle, [prop])
}

function indexGeneratorsByProp(styles) {
  const index = {}
  for (let i = 0; i < styles.length; i++) {
    const style = styles[i]
    if (style && style.meta) {
      const propsKeys = Object.keys(style.meta.props)
      for (let j = 0; j < propsKeys.length; j++) {
        const prop = style.meta.props[propsKeys[j]]
        index[prop] = style
      }
    }
  }
  return index
}

export function compose(...generators) {
  let flatGenerators = []
  generators.forEach(gen => {
    warn(gen, `Undefined generator in "compose" method`)
    if (!gen) return
    if (gen.meta.generators) {
      flatGenerators = [...flatGenerators, ...gen.meta.generators]
    } else {
      flatGenerators.push(gen)
    }
  })

  const generatorsByProp = indexGeneratorsByProp(flatGenerators)

  function getStyle(props) {
    const propKeys = Object.keys(props)
    const propCount = propKeys.length
    let allStyle = {}
    for (let i = 0; i < propCount; i++) {
      const propKey = propKeys[i]
      const generator = generatorsByProp[propKey]
      if (generator) {
        allStyle = merge(allStyle, generator.meta.getStyle(props))
      }
    }
    return allStyle
  }

  const props = flatGenerators.reduce(
    (keys, generator) => [...keys, ...generator.meta.props],
    [],
  )

  return createStyleGenerator(getStyle, props, generators)
}
