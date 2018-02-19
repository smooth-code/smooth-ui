### Sizes

Set heights using `size` prop like `"sm"` or `"lg"`.

```js
<div>
  <div style={{ margin: '5px' }}>
    <Input size="sm" placeholder="Small" />
  </div>
  <div style={{ margin: '5px' }}>
    <Input placeholder="Medium" />
  </div>
  <div style={{ margin: '5px' }}>
    <Input size="lg" placeholder="Large" />
  </div>
</div>
```

### Types

All HTML5 types are supported, `"number"` is adapted.

```js
<Input type="number" placeholder="100" />
```

### Disabled

Disable using `disabled` prop.

```js
<Input disabled placeholder="Disabled" />
```

### Control & Validation

* Set `display` to "block" and `width` to "100%" using `control` prop.
* Set validation using `valid` or `valid={false}`

```js
<div>
  <div style={{ margin: '5px' }}>
    <Input control placeholder="Control" />
  </div>
  <div style={{ margin: '5px' }}>
    <Input control valid placeholder="Valid control" />
  </div>
  <div style={{ margin: '5px' }}>
    <Input control valid={false} placeholder="Invalid control" />
  </div>
</div>
```
