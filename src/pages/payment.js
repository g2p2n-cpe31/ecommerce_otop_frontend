import React from 'react'
import CreditCard from '../components/containers/Payment/CreditCard'
import Layout from '../components/common/Layout'

const payment = ({location, history}) => {
    return (
        <div>
            <Layout location={location} history={history}>
                <CreditCard />
            </Layout>
        </div>
    )
}

export default payment
