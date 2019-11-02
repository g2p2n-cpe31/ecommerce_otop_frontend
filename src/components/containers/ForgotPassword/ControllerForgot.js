import React, { useState, useEffect } from 'react'
import ForgotModalStepI from './ForgotModalStepI'
import ForgotModalStepII from './ForgotModalStepII'

const ControllerForgotPassword = props => {
  const [verify, setVerify] = useState('')
  const [otp, setOtp] = useState(0)
  const [pwd, setPwd] = useState('')

  useEffect(() => {
    console.log(verify, otp)
  }, [verify, otp])

  return (
    <>
      {
        {
          close: null,
          step1: (
            <ForgotModalStepI
              step={props.open}
              nextStep={() => props.handleOpen('step2')}
              handleClose={() => props.handleOpen('close')}
              setVerify={setVerify}
              otp={otp}
              setOtp={setOtp}
            />
          ),
          step2: (
            <ForgotModalStepII
              step={props.open}
              nextStep={() => props.handleOpen('close')}
              handleClose={() => {
                props.handleOpen('close')
              }}
              verify={verify}
              otp={otp}
              pwd={pwd}
              setPwd={setPwd}
            />
          ),
        }[props.open]
      }
    </>
  )
}

export default ControllerForgotPassword
