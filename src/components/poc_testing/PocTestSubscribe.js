// import React from 'react'
// import renderer from 'react-test-renderer'
// import { render, cleanup, fireEvent, getByTestId } from '@testing-library/react'
// import 'jest-styled-components'
// import Subscribe from '../section/Subscribe'
// import TextField from '../common/TextField'
// import R from '../resources/R'

// afterEach(cleanup)

// describe('Render', () => {
//   it('Subscribe => renders without crashing', () => {
//     const { unmount } = render(<Subscribe />)
//     unmount()
//   })

//   it('Subscribe => renders correctly', () => {
//     const tree = renderer.create(<Subscribe />).toJSON()
//     expect(tree).toMatchSnapshot()
//   })

//   it('test', () => {
//     // const tree = renderer.create(<Subscribe />).toJSON()
//     const { container } = render(<Subscribe />)
//     const btn_submit = getByTestId(container, 'btn_submit')
//     // expect(btn_submit).toHaveStyle(`background-color: ${R.colors.primary}`)
//   })
//   //   it('TextField => renders without crashing', () => {
//   //     const { unmount } = render(<TextField />)
//   //     unmount()
//   //   })

//   //   it('TextField => renders correctly', () => {
//   //     const tree = renderer.create(<TextField />).toJSON()
//   //     expect(tree).toMatchSnapshot()
//   //   })

//   //   it('textfield styles', () => {
//   //     // const { getByTestId } = render(<TextField />)
//   //     // const txtfield = getByTestId('textfield')
//   //     // fireEvent.change(txtfield, { target: { value: 'poon' } })
//   //     const { container } = render(<TextField />)
//   //     const wrapper = getByTestId(container, 'textfield')
//   //     expect(wrapper).toHaveStyleRule('backgroundColor', '#fff')
//   //   })
// })

// // describe('Semantic and Style', () => {})
