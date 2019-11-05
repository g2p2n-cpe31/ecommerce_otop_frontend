import React from 'react'
import renderer from 'react-test-renderer'
import SelectAll from '../containers/cart/SelectAll'

describe('SelectAll', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectAll />).toJSON()
  })
})
