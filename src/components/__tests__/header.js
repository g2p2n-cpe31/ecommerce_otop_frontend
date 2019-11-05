import React from 'react'
import renderer from 'react-test-renderer'
// import { StaticQuery, useStaticQuery, graphql } from 'gatsby'
import Header from '../common/header'

describe('Header', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          title: `Otop ecommerce`,
          description: `Software Engineering Project`,
          author: `@g2p2n`,
        },
      },
    }
    const tree = renderer.create(<Header data={data} />).toJSON()
    // expect(tree).toMatchSnapshot()
  })
})
