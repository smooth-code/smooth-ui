Smooth UI has a powerful grid system to layout an align content. It's build with [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes), mobile first and fully responsive.

```js
<Row>
  <Col sm>One</Col>
  <Col sm>Two</Col>
  <Col sm>Three</Col>
</Row>
```

The above example creates three equal-width columns on small, medium, large, and extra large devices.

### Breakpoints

This table resume all available breakpoints in grid.

<table>
  <thead>
    <tr>
      <th></th>
      <th>
        Extra small<br>
        <small><576px</small>
      </th>
      <th>
        Small<br>
        <small>≥576px</small>
      </th>
      <th>
        Medium<br>
        <small>≥768px</small>
      </th>
      <th>
        Large<br>
        <small>≥992px</small>
      </th>
      <th>
        Extra large<br>
        <small>≥1200px</small>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Max container width</th>
      <td>None (auto)</td>
      <td>540px</td>
      <td>720px</td>
      <td>960px</td>
      <td>1140px</td>
    </tr>
    <tr>
      <th>Prop</th>
      <td><code>xs</code></td>
      <td><code>sm</code></td>
      <td><code>md</code></td>
      <td><code>lg</code></td>
      <td><code>xl</code></td>
    </tr>
  </tbody>
</table>

### Auto-layout columns

#### Equal-width

For example, here are two grid layouts that apply to every device and viewport, from `xs` to `xl`. Add any number of unit-less props for each breakpoint you need and every column will be the same width.

```js
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
```

#### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.

```js
  <Row>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
```

### Responsive classes

Smooth UI's grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

#### All breakpoints

For grids that are the same from the smallest of devices to the largest, use the props `xs`, `sm`, `md`, `lg` or `xl`. Specify a number value when you need a particularly sized column; otherwise, feel free to put the prop without a value (`true`).

```js
  <Row>
    <Col>-</Col>
    <Col>-</Col>
    <Col>-</Col>
    <Col>-</Col>
  </Row>
  <Row>
    <Col xs={8}>{`xs={8}`}</Col>
    <Col xs={4}>{`xs={4}`}</Col>
  </Row>
```

#### Stacked to horizontal

Using a single set of `sm` props, you can create a basic grid system that starts out stacked before becoming horizontal with at the small breakpoint (`sm`).

```js
  <Row>
    <Col sm={8}>{`sm={8}`}</Col>
    <Col sm={4}>{`sm={4}`}</Col>
  </Row>
  <Row>
    <Col sm>sm</Col>
    <Col sm>sm</Col>
    <Col sm>sm</Col>
  </Row>
```

#### Mix and match

Don’t want your columns to simply stack in some grid tiers? Use a combination of different props for each tier as needed. See the example below for a better idea of how it all works.

**Stack the columns on mobile by making one full-width and the other half-width**

```js
<Row>
  <Col xs={12} md={8}>{`xs={12} md={8}`}</Col>
  <Col xs={6} md={4}>{`xs={6} md={4}`}</Col>
</Row>
```

**Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop**

```js
<Row>
  <Col xs={6} md={4}>
    {`xs={6} md={4}`}
  </Col>
  <Col xs={6} md={4}>
    {`xs={6} md={4}`}
  </Col>
  <Col xs={6} md={4}>
    {`xs={6} md={4}`}
  </Col>
</Row>
```

**Columns are always 50% wide, on mobile and desktop**

```js
<Row>
  <Col xs={6}>{`xs={6}`}</Col>
  <Col xs={6}>{`xs={6}`}</Col>
</Row>
```

### Custom gutter

It is possible to specify custom padding (left and right) using `gutter` props on `Row`.

```js
<Row gutter={5}>
  <React.Fragment>
    <Col>{`5px gutter`}</Col>
    <Col>{`5px gutter`}</Col>
    <Col>{`5px gutter`}</Col>
  </React.Fragment>
</Row>
```
