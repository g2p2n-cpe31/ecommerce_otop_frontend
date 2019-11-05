import React from 'react'
import renderer from 'react-test-renderer'
import ContainerProduct from '../common/ContainerProduct'

describe('ContainerProduct', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ContainerProduct />).toJSON()
  })
})
