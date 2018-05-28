### Sizes

Set heights using `size` prop like `"sm"` or `"lg"`.

```js
<div className="block-list">
  <Input size="sm" placeholder="Small" />
  <Input placeholder="Medium" />
  <Input size="lg" placeholder="Large" />
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
<div className="block-list">
  <Input control placeholder="Control" />
  <Input control valid placeholder="Valid control" />
  <Input control valid={false} placeholder="Invalid control" />
</div>
```
