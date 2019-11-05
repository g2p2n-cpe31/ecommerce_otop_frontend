import React from 'react'
import renderer from 'react-test-renderer'
import Store from '../containers/cart/Store'

describe('Store', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Store />).toJSON()
  })
})
