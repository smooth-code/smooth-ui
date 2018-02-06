### Sizes

Set sizes using `size` prop like `"sm"` or `"lg"`.

```js
<div>
  <FormCheck>
    <Checkbox
      size="sm"
      id="sizeCheckbox1"
      name="sizeCheckboxs"
      value="option1"
    />
    <FormCheckLabel htmlFor="sizeCheckbox1">Small</FormCheckLabel>
  </FormCheck>
  <FormCheck>
    <Checkbox id="sizeCheckbox2" name="sizeCheckboxs" value="option2" />
    <FormCheckLabel htmlFor="sizeCheckbox2">Medium</FormCheckLabel>
  </FormCheck>
  <FormCheck>
    <Checkbox
      size="lg"
      id="sizeCheckbox3"
      name="sizeCheckboxs"
      value="option3"
    />
    <FormCheckLabel htmlFor="sizeCheckbox3">Large</FormCheckLabel>
  </FormCheck>
</div>
```

### Disabled

Disable using `disabled` prop.

```js
<FormCheck>
  <Checkbox
    disabled
    id="disabledCheckbox1"
    name="disabledCheckboxs"
    value="option1"
  />
  <FormCheckLabel htmlFor="disabledCheckbox1">Disabled</FormCheckLabel>
</FormCheck>
```
