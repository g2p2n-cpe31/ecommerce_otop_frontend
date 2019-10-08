import React from 'react'
import Modal from '../components/containers/Signup/Modal.js'
import SEO from '../components/utility/seo'
import { createGlobalStyle } from 'styled-components'
import { TypographyStyle } from 'react-typography'
import typography from '../components/utility/typography'
// const GlobalStyle = createGlobalStyle`
//   @font-face{
//     font-family: 'Kanit-Regular';
//     src: url('../static/fonts/Kanit/Kanit-Regular.ttf') format('truetype');
//   }

//   @font-face{
//     font-family: 'Kanit-Light';
//     src: url('../static/fonts/Kanit/Kanit-Light.ttf') format('truetype');
//   }
  

//   html {
//     font-size: 62.5%;
//   }

//   body{
//     margin: 0;
//     font-family: 'Kanit-Regular';
//     font-size: 1.6rem; /* 16px */
//     width: 100vw;
//     z-index: -1;
    
    
//   }
// `
const SignUp = () => {
    return (
        <div>
            {/* <GlobalStyle /> */}
            <TypographyStyle typography={typography} />
            <SEO title="สมัครสมาชิก" />
            <Modal />
        </div>
    )
}
  
export default SignUp