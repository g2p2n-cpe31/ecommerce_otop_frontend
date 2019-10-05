import React from 'react'
import Modal from '../components/containers/ForgotPassword/Modal.js'
import SEO from '../components/utility/seo'
import { createGlobalStyle } from 'styled-components'
import { TypographyStyle } from 'react-typography'
import typography from '../components/utility/typography'

const Forgot_1 = () => {
    return (
        <div>
            <TypographyStyle typography={typography} />
            <SEO title="ลืมรหัสผ่าน" />
            <Modal />
        </div>
    )
}
  
export default Forgot_1