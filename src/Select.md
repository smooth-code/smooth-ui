Different sizes:

```js
<div>
  <div>
    <Select size="sm" options={['One', 'Two']} />
  </div>
  <div>
    <Select options={['One', 'Two']} />
  </div>
  <div>
    <Select size="lg" options={['One', 'Two']} />
  </div>
</div>
```

Custom labels:

```js
<Select
  options={[{ label: 'One', value: 'one' }, { label: 'Two', value: 'two' }]}
/>
```

Groups:

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
