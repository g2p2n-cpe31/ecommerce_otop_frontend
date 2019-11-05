import React from 'react'
import renderer from 'react-test-renderer'
import ItemProduct from '../common/ItemProduct'

describe('ItemProduct', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ItemProduct />).toJSON()
  })
})
