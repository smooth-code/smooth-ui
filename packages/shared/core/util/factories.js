import React from 'react'
import styled from '@xstyled/x'
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

export function createInnerComponent({ name, render, theme = {} }) {
  const InnerComponent = React.forwardRef(function InnerComponent(props, ref) {
    const { as, safeProps } = useProps(props)
    return render({ ref, as, ...safeProps }, { theme, ...props })
  })
  InnerComponent.displayName = name
  return InnerComponent
}

export function createComponent({ name, render, theme = {}, propTypes }) {
  theme = Array.isArray(theme) ? mergeClone(...theme) : theme
  const InnerComponent = createInnerComponent({ name, render, theme })
  const Component = styled(InnerComponent)`
    ${p => {
      const cache = getThemeCache(p.theme)
      cache[name] = cache[name] || mergeClone(theme, p.theme)
      const props = { ...p, theme: cache[name] }
      const componentStyle = props.theme.components
        ? props.theme.components[name]
        : null
      return componentStyle ? componentStyle(props) : null
    }}
  `
  Component.displayName = `styled(${name})`
  Component.propTypes = propTypes
  return Component
}
