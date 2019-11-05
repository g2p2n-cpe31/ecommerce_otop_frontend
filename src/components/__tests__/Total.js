import React from 'react'
import renderer from 'react-test-renderer'
import Total from '../containers/cart/Total'

describe('Total', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Total />).toJSON()
  })
})
