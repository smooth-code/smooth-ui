Toggler is a render-props component that provide a toggle behaviour.

```js
<Toggler>
  {({ toggled, onToggle }) => (
    <Button variant="primary" onClick={onToggle}>
      {toggled ? 'ON' : 'OFF'}
    </Button>
  )}
</Toggler>
```

### Specify a value in `onToggle`

```js
<Toggler>
  {({ toggled, onToggle }) => (
    <div className="block-list">
      <div>{toggled ? '🌞' : '🌛'}</div>
      <div>
        <Button variant="primary" size="sm" onClick={() => onToggle(false)}>
          Night
        </Button>{' '}
        <Button variant="primary" size="sm" onClick={() => onToggle(true)}>
          Day
        </Button>
      </div>
    </div>
  )}
</Toggler>
```

### Set the default toggle

You can define the default `toggled` value using `defaultToggled` property.

```js
<Toggler defaultToggled>
  {({ toggled, onToggle }) => (
    <Button variant="primary" onClick={onToggle}>
      {toggled ? 'ON' : 'OFF'}
    </Button>
  )}
</Toggler>
```

### Listen for toggling

You can listen when the element is toggled using `onToggle` property.

```js
<Toggler onToggle={toggled => console.log('Toggled', toggled)}>
  {({ toggled, onToggle }) => (
    <Button variant="primary" onClick={onToggle}>
      {toggled ? 'ON' : 'OFF'}
    </Button>
  )}
</Toggler>
```
