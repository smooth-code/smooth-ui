/* eslint-disable import/no-extraneous-dependencies */
import 'jest-styled-components'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })
