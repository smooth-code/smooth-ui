Using Smooth UI, you have three choices to extend the style of a component.

### Global extend using theme

Smooth UI uses [Styled Components theming feature](https://www.styled-components.com/docs/advanced#theming). It means you can customize it by creating your own theme.

You can find all theme values in [the default theme](https://github.com/smooth-code/smooth-ui/blob/master/src/theme/defaultTheme.js).

An example of custom theme usage:

```jsx static
import React from 'react'
import { render } from 'react-dom'
import { defaultTheme } from 'smooth-ui'
import { ThemeProvider } from 'styled-components'

const theme = {
  ...defaultTheme,
  primary: 'blue',
}

render(
  <ThemeProvider theme={theme}>
    <Button variant="primary">Blue primary button</Button>
  </ThemeProvider>,
  document.getElementById('root'),
)
```

### Local extend using `.extend`

Every Smooth UI components expose a method `.extend`. It has the same effect as [the original `.extend` of Styled Components](https://www.styled-components.com/docs/api#extend). You can use it to override any CSS property of the original component. It creates a new component and doesn't affect other components.

An example of a `BorderedButton` extended from a `Button`:

```js
const BorderedButton = Button.extend`
  border: 2px solid black;

  &:hover {
    border-color: blue;
  }
`
;<BorderedButton variant="primary">A button with border!</BorderedButton>
```

#### Extend components deeply

Some components are more complex than a `Button`. The `Switch` for an example is a component that includes several elements: a container, a ball... All of these elements have their own classes. To extend it, just use the browser inspector, pick the class and override it 👌.

An example of a custom `Switch` with a black ball 🎱.

```js
const BlackBallSwitch = Switch.extend`
  .sui-switch-ball {
    background-color: black !important;
  }
`
;<BlackBallSwitch />
```

### Local override using `style`

Inline styles are still a good approach for a lot of use-cases. It can be used for very specific changes that don't need media queries or auto-prefixer. All components supports inline style using `style` property.

An example of inline style to change the `padding` of a button.

```js
<Button variant="primary" style={{ padding: 20 }}>
  Button with big padding
</Button>
```
