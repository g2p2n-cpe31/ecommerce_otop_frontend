import React from 'react'
import renderer from 'react-test-renderer'
import Filter from '../common/Filter'

describe('Filter', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Filter />).toJSON()
  })
})