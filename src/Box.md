Box is a simple component to create flexboxes based layout that are not part of [a grid](#grid).

It supports several properties:

* `flex`: See [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)
* `direction`: See [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
* `wrap`: See [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)
* `alignItems`: See [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
* `alignContent`: See [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)
* `alignSelf`: See [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
* `justifyContent`: See [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
* `margin`: See [`margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
* `padding`: See [`padding`](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

### Examples

```js
<Box
  padding="10px"
  justifyContent="space-between"
  style={{ background: '#bd4932' }}
>
  <Box padding="20px" style={{ background: 'white' }}>
    Left
  </Box>
  <Box padding="20px" style={{ background: 'white' }}>
    Middle
  </Box>
  <Box padding="20px" style={{ background: 'white' }}>
    Right
  </Box>
</Box>
```
