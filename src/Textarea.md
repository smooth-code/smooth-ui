### Sizes

Set heights using `size` prop like `"sm"` or `"lg"`.

```js
<div>
  <div style={{ margin: '5px' }}>
    <Textarea size="sm" placeholder="Small" />
  </div>
  <div style={{ margin: '5px' }}>
    <Textarea placeholder="Medium" />
  </div>
  <div style={{ margin: '5px' }}>
    <Textarea size="lg" placeholder="Large" />
  </div>
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
<div>
  <div style={{ margin: '5px' }}>
    <Textarea control placeholder="Control" />
  </div>
  <div style={{ margin: '5px' }}>
    <Textarea control valid placeholder="Valid control" />
  </div>
  <div style={{ margin: '5px' }}>
    <Textarea control valid={false} placeholder="Invalid control" />
  </div>
</div>
```
