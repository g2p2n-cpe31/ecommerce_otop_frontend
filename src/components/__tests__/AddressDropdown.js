import React from 'react'
import renderer from 'react-test-renderer'
import AddressDropdown from '../common/AddressDropdown'

describe('AddressDropdown', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AddressDropdown />).toJSON()
  })
})
