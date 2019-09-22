import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/utility/layout'
import Image from '../components/common/image'
import SEO from '../components/utility/seo'
// import styled from 'styled-components'

// const Container = styled.div`
//   display: flex;
// `

const IndexPage = () => (
  <Layout>
    {/* <Container></Container> */}

    <SEO title="Home" />
    <h1>Hi Poon</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
