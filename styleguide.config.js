const path = require('path')
const { version } = require('./package.json')

module.exports = {
  title: `Smooth UI | ${version}`,
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  sections: [
    {
      name: 'Smooth UI',
      content: path.resolve(__dirname, 'docs/Introduction.md'),
    },
    {
      name: 'Layout',
      content: path.resolve(__dirname, 'docs/Grid.md'),
      components: () => [
        path.resolve(__dirname, 'src/Col.js'),
        path.resolve(__dirname, 'src/Row.js'),
      ],
    },
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/Button.js'),
        path.resolve(__dirname, 'src/Checkbox.js'),
        path.resolve(__dirname, 'src/CheckLabel.js'),
        path.resolve(__dirname, 'src/FormGroup.js'),
        path.resolve(__dirname, 'src/Input.js'),
        path.resolve(__dirname, 'src/Radio.js'),
        path.resolve(__dirname, 'src/Select.js'),
        path.resolve(__dirname, 'src/Switch.js'),
        path.resolve(__dirname, 'src/Textarea.js'),
      ],
    },
  ],
}
