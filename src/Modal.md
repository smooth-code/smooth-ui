### Modal components

Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional).

```js
const ModalExample = Modal.extend`
  position: relative;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  z-index: 1;
  display: block;
`

const ModalDialogExample = ModalDialog.extend`
  left: auto;
  margin-right: auto;
  margin-left: auto;
`
;<ModalDialogExample>
  <ModalContent>
    <ModalHeader>
      <Typography variant="h5" margin={false}>
        Modal title
      </Typography>
    </ModalHeader>
    <ModalBody>Modal body</ModalBody>
    <ModalFooter>
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Close</Button>
    </ModalFooter>
  </ModalContent>
</ModalDialogExample>
```

### Live example

```js
const ModalExample = () => (
  <Toggler>
    {({ toggled, onToggle }) => (
      <div>
        <Button variant="primary" onClick={() => onToggle(true)}>
          Open modal
        </Button>
        <Modal opened={toggled} onClose={() => onToggle(false)}>
          <ModalDialog>
            <ModalContent>
              <ModalHeader>
                <Typography variant="h5" margin={false}>
                  Modal title
                </Typography>
              </ModalHeader>
              <ModalBody>Modal body</ModalBody>
              <ModalFooter>
                <Button variant="primary">Save changes</Button>
                <Button variant="secondary">Close</Button>
              </ModalFooter>
            </ModalContent>
          </ModalDialog>
        </Modal>
      </div>
    )}
  </Toggler>
)
;<ModalExample />
```
