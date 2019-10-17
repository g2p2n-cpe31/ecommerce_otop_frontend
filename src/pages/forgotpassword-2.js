import React from 'react'
import Modal from '../components/containers/ForgotPassword2/Modal.js'
import SEO from '../components/utility/seo'
import { TypographyStyle } from 'react-typography'
import typography from '../components/utility/typography'

const Forgot_2 = () => {
    return (
        <div>
            <TypographyStyle typography={typography} />
            <SEO title="กำหนดรหัสผ่านใหม่" />
            <Modal />
        </div>
    )
}
  
export default Forgot_2