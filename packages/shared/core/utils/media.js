export const mediaMinWidth = value => `@media (min-width: ${value}px)`
export const mediaMaxWidth = value => `@media (max-width: ${value}px)`
export const mediaBetweenWidth = (min, max) =>
  `@media (min-width: ${min}px) and (max-width: ${max}px)`
