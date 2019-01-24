import Input from './Input'

function createTextarea() {
  const Textarea = Input.withComponent('textarea')
  Textarea.propTypes = Input.propTypes
  return Textarea
}

export default createTextarea()
