// import React from 'react'
// import renderer from 'react-test-renderer'
// import { render, cleanup } from '@testing-library/react'
// import Line from '../section/Line'

// afterEach(cleanup)

// describe('Line', () => {
//   it('renders without crashing', () => {
//     const { unmount } = render(<Line />)
//     unmount()
//   })

//   it('renders correctly', () => {
//     const tree = renderer.create(<Line />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })

//   it('Component renders link to /somewhere', () => {
//     const tree = render(<Line />)
//     expect(document.querySelector('a').getAttribute('href')).toBe(
//       'https://line.me/'
//     )
//   })
// })
