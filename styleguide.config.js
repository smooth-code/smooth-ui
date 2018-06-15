const path = require('path')
const { version } = require('./package.json')

module.exports = {
  title: `Smooth UI | ${version}`,
  require: [path.join(__dirname, 'styleguidist/main.js')],
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
  styles: {
    StyleGuide: {
      sidebar: {
        width: 240,
      },
      hasSidebar: {
        paddingLeft: 240,
      },
    },
    SectionHeading: {
      sectionName: {
        color: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
      },
    },
    Heading: {
      heading1: {
        color: '#bd4932',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        margin: '0.7em 0',
      },
      heading2: {
        fontWeight: 500,
        fontSize: '1.75rem',
        margin: '2rem 0 0.5rem',
      },
      heading3: {
        fontWeight: 500,
        fontSize: '1.25rem',
        margin: '2rem 0 1.25rem',
      },
    },
  },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'styleguidist/Logo'),
  },
  sections: [
    {
      name: 'Basics',
      sections: [
        {
          name: 'Introduction',
          content: path.resolve(__dirname, 'docs/Introduction.md'),
        },
        {
          name: 'Installation',
          content: path.resolve(__dirname, 'docs/Installation.md'),
        },
        {
          name: 'Getting Started',
          content: path.resolve(__dirname, 'docs/GettingStarted.md'),
        },
        {
          name: 'Extending Styles',
          content: path.resolve(__dirname, 'docs/ExtendingStyles.md'),
        },
        {
          name: 'Use another component',
          content: path.resolve(__dirname, 'docs/UseAnotherComponent.md'),
        },
      ],
    },
    {
      name: 'Utilities',
      content: path.resolve(__dirname, 'docs/Utilities.md'),
    },
    {
      name: 'Layout',
      sections: [
        {
          name: 'Grid',
          content: path.resolve(__dirname, 'docs/Grid.md'),
          components: () => [
            path.resolve(__dirname, 'src/Col.js'),
            path.resolve(__dirname, 'src/Row.js'),
          ],
        },
      ],
      components: () => [path.resolve(__dirname, 'src/Box.js')],
    },
    {
      name: 'Forms',
      content: path.resolve(__dirname, 'docs/Forms.md'),
      components: () => [
        path.resolve(__dirname, 'src/ControlFeedback.js'),
        path.resolve(__dirname, 'src/FormGroup.js'),
      ],
    },
    {
      name: 'Components',
      components: () => [
        path.resolve(__dirname, 'src/Alert.js'),
        path.resolve(__dirname, 'src/Button.js'),
        path.resolve(__dirname, 'src/Checkbox.js'),
        path.resolve(__dirname, 'src/FormCheck.js'),
        path.resolve(__dirname, 'src/FormCheckLabel.js'),
        path.resolve(__dirname, 'src/Input.js'),
        path.resolve(__dirname, 'src/Label.js'),
        path.resolve(__dirname, 'src/Modal.js'),
        path.resolve(__dirname, 'src/ModalBody.js'),
        path.resolve(__dirname, 'src/ModalContent.js'),
        path.resolve(__dirname, 'src/ModalDialog.js'),
        path.resolve(__dirname, 'src/ModalFooter.js'),
        path.resolve(__dirname, 'src/ModalHeader.js'),
        path.resolve(__dirname, 'src/Radio.js'),
        path.resolve(__dirname, 'src/RadioGroup.js'),
        path.resolve(__dirname, 'src/Select.js'),
        path.resolve(__dirname, 'src/Slider.js'),
        path.resolve(__dirname, 'src/Switch.js'),
        path.resolve(__dirname, 'src/Textarea.js'),
        path.resolve(__dirname, 'src/Typography.js'),
      ],
    },
    {
      name: 'Utility Components',
      components: () => [path.resolve(__dirname, 'src/Toggler.js')],
    },
  ],
}
