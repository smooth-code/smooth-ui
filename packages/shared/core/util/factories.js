import React from 'react'
import styled, { useTheme } from '@xstyled/x'
import { omit } from '@xstyled/util'
import { systemProps } from './system'
import { mergeClone } from './misc'

const omittedProps = ['as', 'forwardedAs', 'variant', 'scale', ...systemProps]

function useProps(props) {
  const as = props.as || props.forwardedAs || undefined
  return { as, safeProps: omit(props, omittedProps) }
}

const cacheSupported =
  typeof Map !== 'undefined' && typeof WeakMap !== 'undefined'
const caches = cacheSupported ? new WeakMap() : null
function getThemeCache(theme) {
  if (caches.has(theme)) return caches.get(theme)
  const cache = {}
  caches.set(theme, cache)
  return cache
}

function computeTheme(baseTheme, customTheme) {
  const theme = mergeClone(baseTheme, customTheme)
  if (!theme.colors || !theme.colors.modes) return theme
  return {
    ...theme,
    colors: {
      ...theme.colors,
      ...theme.colors.modes[theme.colorMode || theme.__colorMode],
    },
  }
}

function getTheme(name, baseTheme, customTheme) {
  const themeCache = getThemeCache(customTheme)
  themeCache[name] = themeCache[name] || computeTheme(baseTheme, customTheme)
  return themeCache[name]
}

export function createInnerComponent({ name, render, theme: baseTheme = {} }) {
  const InnerComponent = React.forwardRef(function InnerComponent(props, ref) {
    const customTheme = useTheme()
    const theme = getTheme(name, baseTheme, customTheme)
    const { as, safeProps } = useProps(props)
    return render({ ref, as, ...safeProps }, { theme, ...props })
  })
  InnerComponent.displayName = name
  return InnerComponent
}

export function createComponent({
  name,
  render,
  theme: themeArg = {},
  propTypes,
}) {
  const baseTheme = Array.isArray(themeArg) ? mergeClone(...themeArg) : themeArg
  const InnerComponent = createInnerComponent({
    name,
    render,
    theme: baseTheme,
  })
  const Component = styled(InnerComponent)`
    ${p => {
      const theme = getTheme(name, baseTheme, p.theme)
      const props = { ...p, theme }
      const componentStyle = theme.components ? theme.components[name] : null
      return componentStyle ? componentStyle(props) : null
    }}
  `
  Component.displayName = `styled(${name})`
  Component.propTypes = propTypes
  return Component
}
