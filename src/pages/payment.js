import React from 'react'
import CreditCard from '../components/containers/Payment/CreditCard'
import Layout from '../components/common/Layout'
import SEO from '../components/utility/seo'

const payment = ({location, history}) => {
    return (
        <div>
            <Layout location={location} history={history}>
                <SEO title="ตัวเลือกการชำระเงิน" />
                <CreditCard />
            </Layout>
        </div>
    )
}

export default payment
