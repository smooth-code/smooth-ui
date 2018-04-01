import React from 'react'
import pkg from '../package.json'

export default () => (
  <div
    style={{
      fontSize: 12,
      lineHeight: 1.5,
      textAlign: 'center',
      fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    }}
  >
    <img
      style={{ backgroundColor: 'white' }}
      alt="Smooth UI"
      width="80%"
      src="https://raw.githubusercontent.com/smooth-code/smooth-ui/master/resources/smooth-ui-logo.png?token=AAQQPuM4Puh4DdUkTB1OufRD9oW_EOHzks5agcuiwA%3D%3D"
    />
    <div>v{pkg.version}</div>
  </div>
)
