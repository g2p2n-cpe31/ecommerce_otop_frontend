import React from 'react'
import renderer from 'react-test-renderer'
import ButtonFlat from '../common/ButtonFlat'

describe('ButtonFlat', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonFlat>Click</ButtonFlat>).toJSON()
  })
})
