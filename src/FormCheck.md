### Basic usage

Using `FormCheck` and `FormCheckLabel` you can display `Checkbox` and `Radio` with labels.

```js
<div>
  <FormCheck>
    <Checkbox id="basicCheckbox1" />
    <FormCheckLabel htmlFor="basicCheckbox1">First</FormCheckLabel>
  </FormCheck>
  <FormCheck>
    <Checkbox id="basicCheckbox2" />
    <FormCheckLabel htmlFor="basicCheckbox2">Second</FormCheckLabel>
  </FormCheck>
</div>
```

### Inline

Set inline with `inline` props.

```js
<div>
  <FormCheck inline>
    <Checkbox id="checkboxInline1" />
    <FormCheckLabel htmlFor="checkboxInline1">First</FormCheckLabel>
  </FormCheck>
  <FormCheck inline>
    <Checkbox id="checkboxInline2" />
    <FormCheckLabel htmlFor="checkboxInline2">Second</FormCheckLabel>
  </FormCheck>
</div>
```
