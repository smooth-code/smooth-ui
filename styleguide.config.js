const path = require('path')
const { version } = require('./package.json')

module.exports = {
  title: `Smooth UI | ${version}`,
  compilerConfig: {
    transforms: {
      dangerousTaggedTemplateString: true,
    },
  },
  theme: {
    color: {
      link: '#bd4932',
      linkHover: '#6c2a1d',
    },
    fontFamily: {
      base:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    },
  },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'styleguidist/Logo'),
  },
  sections: [
    {
      name: 'Smooth UI',
      content: path.resolve(__dirname, 'docs/Introduction.md'),
    },
    {
      name: 'Grid',
      content: path.resolve(__dirname, 'docs/Grid.md'),
      components: () => [
        path.resolve(__dirname, 'src/Col.js'),
        path.resolve(__dirname, 'src/Row.js'),
      ],
    },
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/Alert.js'),
        path.resolve(__dirname, 'src/Box.js'),
        path.resolve(__dirname, 'src/Button.js'),
        path.resolve(__dirname, 'src/Checkbox.js'),
        path.resolve(__dirname, 'src/ControlFeedBack.js'),
        path.resolve(__dirname, 'src/FormCheck.js'),
        path.resolve(__dirname, 'src/FormCheckLabel.js'),
        path.resolve(__dirname, 'src/FormGroup.js'),
        path.resolve(__dirname, 'src/Input.js'),
        path.resolve(__dirname, 'src/Label.js'),
        path.resolve(__dirname, 'src/Radio.js'),
        path.resolve(__dirname, 'src/RadioGroup.js'),
        path.resolve(__dirname, 'src/Select.js'),
        path.resolve(__dirname, 'src/Switch.js'),
        path.resolve(__dirname, 'src/Textarea.js'),
      ],
    },
  ],
}
