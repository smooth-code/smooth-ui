Smooth UI exposes lots of useful utilities to enhance your developer experience!

## Theme utilities

### `th`

Give access to a theme property. Shortcut of `th('x')` is a shortcut for `props => props.theme.x`.

```js static
import styled, { css } from 'styled-components'
import { th } from 'smooth-ui'

// 15px on mobile, 20px on desktop!
const Description = styled.div`
  color: ${th('primary')};
`
```

### `mixin`

Use a mixin define in the theme.

```js static
import styled, { css } from 'styled-components'
import { th } from 'smooth-ui'

const Input = styled.input`
  ${mixin('controlFocus')};
`
```

You can define custom mixins in your theme. A mixin is a function that takes `props` and return another function containing mixin arguments. You can find examples in [the default theme](https://github.com/smooth-code/smooth-ui/blob/master/src/theme/defaultTheme.js).

## Responsive utilities

### `up`

Apply style after a breakpoint. This is the mobile first approach.

```js static
import styled, { css } from 'styled-components'
import { up } from 'smooth-ui'

// 15px on mobile, 20px on desktop!
const Description = styled.div`
  font-size: 15px;

  ${up(
    'md',
    css`
      font-size: 20px;
    `,
  )};
`
```

### `down`

Apply style before a breakpoint. This is the desktop first approach.

```js static
import styled, { css } from 'styled-components'
import { up } from 'smooth-ui'

// 20px on desktop, 15px on mobile!
const Description = styled.div`
  font-size: 20px;

  ${down(
    'md',
    css`
      font-size: 15px;
    `,
  )};
`
```

### `between`

Apply style between two breakpoints.

```js static
import styled, { css } from 'styled-components'
import { between } from 'smooth-ui'

// Apply a custom style between "sm" and "md"
const Description = styled.div`
  font-size: 20px;

  ${between(
    'sm',
    'md',
    css`
      font-size: 15px;
    `,
  )};
`
```

## Style utilities

### `resolveUnit`

Automatically adds the unit prefix (pixel if a number).

```js static
import { resolveUnit } from 'smooth-ui'

resolveUnit(10) // 10px
resolveUnit('10rem') // 10rem
```
