See [`Input`](#input).

### Sizes

Set heights using `size` prop like `"sm"` or `"lg"`.

```js
<div className="block-list">
  <Textarea size="sm" placeholder="Small" />
  <Textarea placeholder="Medium" />
  <Textarea size="lg" placeholder="Large" />
</div>
```

### Disabled

Disable using `disabled` prop.

```js
<Textarea disabled placeholder="Disabled" />
```

### Control & Validation

* Set `display` to "block" and `width` to "100%" using `control` prop.
* Set validation using `valid` or `valid={false}`

```js
<div className="block-list">
  <Textarea control placeholder="Control" />
  <Textarea control valid placeholder="Valid control" />
  <Textarea control valid={false} placeholder="Invalid control" />
</div>
```
