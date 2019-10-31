import React, { useState } from 'react'
import Modal from '../components/containers/Signup/Modal.js'
import SEO from '../components/utility/seo'

const SignUp = () => {
    const [step, setStep] = useState('close')
    
    return (
      <>
        <SEO title="สมัครสมาชิก" />
        <button type="button" onClick={() => setStep('openModal')}>
          สมัครสมาชิก
        </button>
        {
          {
            close: null,
            openModal: (
              <Modal
                step={step}
                handleClose={(e) => {
                  setStep('close')
                }}
                />
            ),
          }[step]
        }
      </>
    )
  }
  
  export default SignUp
  