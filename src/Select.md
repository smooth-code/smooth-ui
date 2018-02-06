### Sizes

Set heights using `size` prop like `"sm"` or `"lg"`.

```js
<div>
  <div style={{ margin: '5px' }}>
    <Select size="sm" placeholder="Small" options={['One', 'Two']} />
  </div>
  <div style={{ margin: '5px' }}>
    <Select placeholder="Medium" options={['Yes', 'No', 'Maybe']} />
  </div>
  <div style={{ margin: '5px' }}>
    <Select size="lg" placeholder="Large" options={['Amazing', 'Great']} />
  </div>
</div>
```

### Disabled

Disable using `disabled` prop.

```js
<Select disabled placeholder="Disabled" options={['Disabled']} />
```

### Custom labels

Specify custom labels by passing an object to `options`.

```js
<Select
  options={[{ label: 'One', value: 'one' }, { label: 'Two', value: 'two' }]}
/>
```

### Groups

Define groups in `options` props.

```js
<Select
  options={[
    {
      label: 'Group 1',
      options: [{ label: 'One', value: 'one' }, { label: 'Two', value: 'two' }],
    },
    {
      label: 'Group 2',
      options: [
        { label: 'Three', value: 'three' },
        { label: 'Four', value: 'four' },
      ],
    },
  ]}
/>
```
