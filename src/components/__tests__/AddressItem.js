import React from 'react'
import renderer from 'react-test-renderer'
import AddressItem from '../common/AddressItem'

describe('AddressItem', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AddressItem />).toJSON()
  })
})
