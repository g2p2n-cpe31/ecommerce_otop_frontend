import React from 'react'
import renderer from 'react-test-renderer'
import ChangePassword from '../containers/Information/ChangePassword'

describe('ChangePassword', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ChangePassword />).toJSON()
  })
})
