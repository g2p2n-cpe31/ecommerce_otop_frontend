import React from 'react'
import renderer from 'react-test-renderer'
import Option from '../containers/Address/Option'

describe('Option', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Option />).toJSON()
  })
})
