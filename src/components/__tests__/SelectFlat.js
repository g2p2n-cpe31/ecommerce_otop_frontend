import React from 'react'
import renderer from 'react-test-renderer'
import SelectFlat from '../common/SelectFlat'

describe('SelectFlat', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SelectFlat />).toJSON()
  })
})
