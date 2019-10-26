import React, { useState, useEffect } from 'react'
import Forgot1 from '../components/containers/ForgotPassword/Modal.js'
import Forgot2 from '../components/containers/ForgotPassword_2/Modal.js'
import SEO from '../components/utility/seo'
import { Button } from '@material-ui/core'

const ForgotPassword = () => {
  const [step, setStep] = useState('close')
  // 0 close all
  // 1 step1
  // 2 step2
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
              nextStep={() => setStep('step2')}
              setVerify={setVerify}
              setOtp={setOtp}
            />
          ),
          step2: (
            <Forgot2
              nextStep={() => setStep('close')}
              verify={verify}
              otp={otp}
              setPwd={setPwd}
            />
          ),
        }[step]
      }
    </>
  )
}

export default ForgotPassword
