Smooth UI has no built-in form system.

Smooth UI provides component to simplify the form layouting but it doesn't provide a complete form system. We recommends using [🏁 React Final Form](https://github.com/final-form/react-final-form) if you need one.

👉 **[Checkout the 🏁 React Final Form example on CodeSandbox](https://codesandbox.io/s/40o45po3l4)**

### Create simple layout using `FormGroup`

Using `FormGroup` component and `control` property on controls like `Input` gives you a clean form layout.

```js
  <FormGroup>
    <Label htmlFor="form-group-input-name">Name</Label>
    <Input control id="form-group-input-name" />
  </FormGroup>
  <FormGroup>
    <Label htmlFor="form-group-input-firstname">Firstname</Label>
    <Input control id="form-group-input-firstname" />
  </FormGroup>
```

### Validation

You can set validation using `valid` property and `ControlFeedback`.

```js
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
```
