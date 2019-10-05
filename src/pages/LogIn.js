import React from 'react'
import Modal from '../components/containers/Login/Modal.js'
import SEO from '../components/utility/seo'
import { createGlobalStyle } from 'styled-components'
import { TypographyStyle } from 'react-typography'
import typography from '../components/utility/typography'

const LogIn = () => {
    return (
        <div>
            <TypographyStyle typography={typography} />
            <SEO title="เข้าสู่ระบบ" />
            <Modal />
        </div>
    )
}
  
export default LogIn
