import React from 'react'
import renderer from 'react-test-renderer'
import Profile from '../containers/Information/Profile'

describe('Profile', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Profile />).toJSON()
  })
})
