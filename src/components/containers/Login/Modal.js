import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'
import { getFirebase } from '../../utility/Firebase'
import axios from 'axios'

const BigBox = styled(Box)`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
`

const BoxOne = styled(Box)`
  width: 272px;
  height: 474px;
  border-radius: 10px;
  /* margin: 0 0 0 0; */
`

const BoxTwo = styled(Box)`
  width: 458px;
  height: 474px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  /* border-radius: 10px; */
`

const SmallBox = styled(Box)`
  display: flex;
  flex-direction: row;
`

const BoxThree = styled(Box)`
  width: 235px;
  height: 43px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: auto;
  margin-top: 6px;
  margin-right: 5px;
`

const BoxFour = styled(Box)`
  width: 205px;
  height: 43px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  margin-top: 6px;
  margin-left: 0px;
`

const CloseIconButton = styled(IconButton)`
  && {
    position: absolute;
    padding: 3px;
    top: 28px;
    right: 28px;
    background: rgba(255, 255, 255, 0.5);
    color: grey;
  }
`

const ForgotPassword = styled(Button)`
  && {
    width: 100px;
    height: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 290px;
    top: 18px;
    font-family: Kanit;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: linear-gradient(316.04deg, #44275d 0%, #3c5b78 100%);
    opacity: 0.7;
  }
`

const ImageSideLeft = styled(Img)`
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin: 0 0 0 0;
`

const NotMember = styled.div`
  font-family: Kanit;
  font-size: 13px;
  line-height: 43px;

  text-align: center;
  letter-spacing: 0.5px;
  margin-top: 8px;
  /* margin-left: 130px; */

  color: rgba(51, 51, 51, 0.8);

  mix-blend-mode: normal;
  opacity: 0.5;
`

const ModalTitle = styled.div`
  line-height: 43px;
  font-family: Kanit;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 0.5px;
  color: #444444;

  display: flex;
  justify-content: center;
  top: '67px';
  margin-bottom: 30px;
  margin-top: 67px;
`

const ModalContainer = styled(Modal)`
  && {
    cursor: url(${ic_cancel_white}) 205 205, auto;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -2;
      background: linear-gradient(316.04deg, #44275d 0%, #3c5b78 100%);
      opacity: 0.9;
    }
  }
`

const PasswordField = styled(TextField)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    top: 12px;

    & input {
      width: 290px;
      padding: 10px;
      text-indent: 5px;
      font-family: Kanit;
      font-size: 14px;
      line-height: 43px;
      letter-spacing: 0.5px;
    }
  }
`

const SignInButton = styled(Button)`
    &&   {
    width: 23.4rem;
    height: 4.8rem;
    font-size: 1.4rem;
    font-family: 'Kanit';
    border-radius: 2.5rem;
    background-color: #5b3c78;
    color: white;
    margin: 4.4rem 11.4rem 0rem;
    & :hover {
      background-color: #412a57;
    }
  }
`

const SignUpButton = styled(Button)`
    &&   {
    width: 100px;
    height: 43px;
    font-family: 'Kanit';
    font-size: 13px;
    text-align: center;
    letter-spacing: 0.5px;
    color: rgba(91, 60, 120, 0.5);
    margin-top: 8px;

    & span {
      color: white;
    }
  }
`

const WrapContentBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextRegister = styled.p`
  margin: 0 auto;
`

const Underline = () => (
  <hr
    style={{
      color: 'rgba(91, 60, 120, 0.5)',
      backgroundColor: 'rgba(91, 60, 120, 0.5)',
      width: 67,
      height: 2.5,
      border: 0,
      margin: '0',
    }}
  />
)

const UserField = styled(TextField)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 10px;
    margin-bottom: 15px;

    & input {
      width: 290px;
      padding: 10px;
      text-indent: 5px;
      font-family: Kanit;
      font-size: 14px;
      line-height: 43px;
      letter-spacing: 0.5px;
    }
  }
`

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-237px',
    marginLeft: '-365px',
    width: '730px',
    height: '474px',
    backgroundColor: theme.palette.background.paper,
    border: '0.5px solid #000',
    fontFamily: 'Kanit',
    borderRadius: '10px',
    padding: 0,
    outline: 0,
    cursor: 'auto',
  },
  textField2: {
    lineHeight: '43px',
    marginLeft: theme.spacing(4),
    width: 337,
    padding: '2px',
  },
}))

function getModalStyle() {
  return {
    background: '#fff',
  }
}

const ModalLogin = props => {
  const data = useStaticQuery(graphql`
    query {
      pictImage: file(relativePath: { eq: "Login/login-pict.jpg" }) {
        childImageSharp {
          fixed(width: 272, height: 474) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [message, setMessage] = useState('')
  const [firebase, setFirebase] = useState({})
  const check = () => {
    return username !== '' && pwd !== '' ? true : false
  }

  const submit = e => {
    e.preventDefault()
    if (check()) {
      props.handleClose()
      Login()
    }
  }
  const getId = async () => {
    try {
      const res = await axios.get(
        `https://otop-d5bqdesqsq-an.a.run.app/v01/api/account/email/${username}`
      )
      console.log(res.data)
      localStorage.setItem('id', res.data[0]._id)
      localStorage.setItem('username', res.data[0].username)
    } catch (error) {
      console.log(error)
    }
  }
  const Login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, pwd)
      .then(response => {
        setCurrentUser(response.user)
        getId()
        props.setLogin(true)
        console.log(response.user)
      })
      .catch(error => {
        setMessage(error.message)
      })
  }

  useEffect(() => {
    const lazyApp = import('firebase/app')
    const lazyDatabase = import('firebase/auth')

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      setFirebase(getFirebase(firebase))
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          props.setLogin(true)
          setCurrentUser(user)
          console.log(user)
        }
      })
    })
  }, [])

  return (
    <form>
      <ModalContainer open={props.open} onClose={() => props.handleClose()}>
        <BigBox style={modalStyle} className={classes.paper}>
          <CloseIconButton
            className={classes.button}
            aria-label="close"
            onClick={props.handleClose}
          >
            <CloseIcon fontSize="large" />
          </CloseIconButton>

          <BoxOne style={modalStyle}>
            <ImageSideLeft fixed={data.pictImage.childImageSharp.fixed} />
          </BoxOne>

          <BoxTwo style={modalStyle}>
            <ModalTitle id="simple-modal-title"> เข้าสู่ระบบ </ModalTitle>
            <UserField
              type="email"
              placeholder="ชื่อบัญชี / อีเมล"
              className={classes.textField2}
              margin="normal"
              onChange={e => setUsername(e.target.value)}
            />
            <PasswordField
              placeholder="รหัสผ่าน"
              className={classes.textField2}
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={e => setPwd(e.target.value)}
            />
            <ForgotPassword
              onClick={props.showForgot}
              className={classes.button}
              flexbox="flex-end"
            >
              ลืมรหัสผ่าน
            </ForgotPassword>
            <SignInButton
              variant="extended"
              className={classes.margin}
              onClick={submit} // onClick={() => props.setStep('close')}
            >
              เข้าสู่ระบบ
            </SignInButton>

            <SmallBox>
              <BoxThree>
                <NotMember>ยังไม่เป็นสมาชิก ?</NotMember>
              </BoxThree>

              <BoxFour>
                <SignUpButton>
                  <WrapContentBtn onClick={props.showSignup}>
                    <TextRegister>สมัครสมาชิก</TextRegister>
                    <Underline />
                  </WrapContentBtn>
                </SignUpButton>
              </BoxFour>
            </SmallBox>
          </BoxTwo>
        </BigBox>
      </ModalContainer>
    </form>
  )
}
export default ModalLogin
