import React from 'react'
import AddrBook from '../components/containers/Address/AddrBook'
import SEO from '../components/utility/seo'


const address = () => {
    return (
        <div>
            <SEO title="สมุดที่อยู่" />
            <AddrBook />
        </div>
    )
}

export default address
