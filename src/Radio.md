### Sizes

Set sizes using `size` prop like `"sm"` or `"lg"`.

```js
<RadioGroup>
  <FormCheck>
    <Radio size="sm" id="sizeRadio1" name="sizeRadios" value="option1" />
    <FormCheckLabel htmlFor="sizeRadio1">Small</FormCheckLabel>
  </FormCheck>
  <FormCheck>
    <Radio id="sizeRadio2" name="sizeRadios" value="option2" />
    <FormCheckLabel htmlFor="sizeRadio2">Medium</FormCheckLabel>
  </FormCheck>
  <FormCheck>
    <Radio size="lg" id="sizeRadio3" name="sizeRadios" value="option3" />
    <FormCheckLabel htmlFor="sizeRadio3">Large</FormCheckLabel>
  </FormCheck>
</RadioGroup>
```

### Disabled

Disable using `disabled` prop.

```js
<FormCheck>
  <Radio disabled id="disabledRadio1" name="disabledRadios" value="option1" />
  <FormCheckLabel htmlFor="disabledRadio1">Disabled</FormCheckLabel>
</FormCheck>
```
