import React, { useState, useEffect } from 'react'
import Forgot1 from '../components/containers/ForgotPassword/Modal.js'
import Forgot2 from '../components/containers/ForgotPassword_2/Modal.js'
import SEO from '../components/utility/seo'

const ForgotPassword = () => {
  const [step, setStep] = useState('close')
  const [verify, setVerify] = useState('')
  const [otp, setOtp] = useState(0)
  const [pwd, setPwd] = useState('')

  useEffect(() => {
    console.log(verify, otp)
  }, [verify, otp])

  return (
    <>
      <SEO title="ลืมรหัสผ่าน" />
      <button type="button" onClick={() => setStep('step1')}>
        ลืมรหัสผ่าน
      </button>
      {
        {
          close: null,
          step1: (
            <Forgot1
              step={step}
              nextStep={() => setStep('step2')}
              handleClose={() => setStep('close')}
              setVerify={setVerify}
              otp={otp}
              setOtp={setOtp}
            />
          ),
          step2: (
            <Forgot2
              nextStep={() => setStep('close')}
              handleClose={(e) => {
                setStep('close')

              }}
              verify={verify}
              otp={otp}
              pwd={pwd}
              setPwd={setPwd}
            />
          ),
        }[step]
      }
    </>
  )
}

export default ForgotPassword
