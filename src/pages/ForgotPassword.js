import React, { useState, useEffect } from 'react'
import Forgot1 from '../components/containers/ForgotPassword/Modal.js'
import Forgot2 from '../components/containers/ForgotPassword_2/Modal.js'
import SEO from '../components/utility/seo'
import { Button } from '@material-ui/core'

const ForgotPassword = () => {
    const [step, setStep] = useState('close');
    // 0 close all
    // 1 step1
    // 2 step2
    const [verify, setVerify] = useState('')
    const [otp, setOtp] = useState(0)
    const [pwd, setPwd] = useState('')
    const [confirmPwd, setConfirmPwd] = useState('')
    const [open, setOpen] = React.useState(false);
    useEffect(()=> {
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
                    'close' : null,
                    'step1' : (<Forgot1 
                        step={step} 
                        nextStep={()=>setStep('step2')} 
                        verify={verify} 
                        setVerify={setVerify} 
                        otp={otp} 
                        setOtp={setOtp} 
                        />),
                    'step2' : <Forgot2 /> 
                }[step]
            }
        </>
    );
}
  
export default ForgotPassword