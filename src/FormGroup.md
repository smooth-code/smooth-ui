`FormGroup` creates easy form layout.

```js
<div>
  <FormGroup>
    <Label htmlFor="form-group-input-name">Name</Label>
    <Input control id="form-group-input-name" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="form-group-input-firstname">Firstname</Label>
    <Input control id="form-group-input-firstname" />
  </FormGroup>
</div>
```

### Validation

You can set validation using `valid` props.

```js
<div>
  <FormGroup>
    <Label htmlFor="form-group-input-valid">Name</Label>
    <Input control valid id="form-group-input-valid" />
    <ControlFeedback valid>Looks good!</ControlFeedback>
  </FormGroup>
  <FormGroup>
    <Label htmlFor="form-group-input-invalid">Firstname</Label>
    <Input control valid={false} id="form-group-input-invalid" />
    <ControlFeedback valid={false}>It is required.</ControlFeedback>
  </FormGroup>
</div>
```
