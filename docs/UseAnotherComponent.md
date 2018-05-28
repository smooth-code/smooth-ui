Sometimes you may want to use a component but the resulting HTML tag is not the good one. Or you want to use a `Button` with another component like [the `Link` from React Router](https://reacttraining.com/react-router/web/api/Link).

You can do it using two approaches.

### Static approach using `.withComponent`

Styled Components has a magic method called [`.withComponent`](https://www.styled-components.com/docs/api#withcomponent), it gives you the opportunity to keep style and swap the component. All Smooth UI components exposes the same method, this way you can easily create a new component from another without losing the style.

An example of `Button` that will use `a` instead of `button`.

```js
const LinkButton = Button.withComponent('a')
;<LinkButton variant="primary" href="#">
  A button as a link
</LinkButton>
```

#### Dynamic approach using `component` property

Every components accept a `component` property, it defines the base component used in each component.

An example of an `Alert` that uses `span` as a component.

```js
<Alert component="span" variant="primary">
  A span alert
</Alert>
```
