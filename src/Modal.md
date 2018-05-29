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

You can toggle a modal from a `Button` using the `Toggler`.

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
                <Button variant="secondary" onClick={() => onToggle(false)}>
                  Close
                </Button>
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

### Scrolling long content

When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

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
              <ModalBody>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et.
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                sed odio dui. Donec ullamcorper nulla non metus auctor
                fringilla. Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                fringilla. Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                fringilla. Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                fringilla. Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                fringilla. Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
                fringilla.
              </ModalBody>
              <ModalFooter>
                <Button variant="primary">Save changes</Button>
                <Button variant="secondary" onClick={() => onToggle(false)}>
                  Close
                </Button>
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
