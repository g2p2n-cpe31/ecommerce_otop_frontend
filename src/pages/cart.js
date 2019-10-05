import React from 'react'
import AllCart from '../components/containers/cart/AllCart'
import SEO from '../components/utility/seo'

const cart = () => {
    return (
        <div>
            <SEO title="cart" />
            <AllCart />
        </div>
    )
}

export default cart
