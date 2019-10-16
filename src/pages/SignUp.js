import React from 'react'
import Modal from '../components/containers/SignUp/Modal.js'
import SEO from '../components/utility/seo'
import { TypographyStyle } from 'react-typography'
import typography from '../components/utility/typography'

const SignUp = () => {
    return (
        <div>
            <TypographyStyle typography={typography} />
            <SEO title="สมัครสมาชิก" />
            <Modal />
        </div>
    )
}
  
export default SignUp