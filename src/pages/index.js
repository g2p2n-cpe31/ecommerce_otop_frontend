import React, { useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import Layout from '../components/common/Layout'
import Image from '../components/common/image'
import SEO from '../components/utility/seo'

const IndexPage = ({ location, history }) => {
  useEffect(() => {
    navigate('/home')
  }, [])
  return <Layout location={location} history={history}></Layout>
}

export default IndexPage
