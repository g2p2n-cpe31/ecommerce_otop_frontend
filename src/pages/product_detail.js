import  React from 'react'
import styled from 'styled-components'
import Navbar from '../components/common/Navbar'
import Section1 from '../components/product_detail/section1'
import Section2 from '../components/product_detail/section2'
import Modal from '@material-ui/core/Modal'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Container = styled.div`
    background : linear-gradient(294.13deg, #44275D 0%, #3C5B78 100%);
    height: 100%;
`

const ModalContainer = styled(Modal)`
    display: flex;
    background : linear-gradient(294.13deg, #44275D 0%, #3C5B78 100%);
    opacity: 0.9;
`

const  Detial = styled(Button)`
    display: flex;
    height: 30px;
    width: 30px;
`
// function getModalStyle() {
//     const top = 52 ;
//     const left = 55 ;
//     return {
//       top: `${top}%`,
//       left: `${left}%`,
//       transform: `translate(-${top}%, -${left}%)`,
//     };
//   }
//   const useStyles = makeStyles(theme => ({
//     paper: {
//       position: 'absolute',
//       // display: flex,
//       // alignItems="center",
//       // justifyContent="center",
//       width: 819,
//       height: 526,
//       backgroundColor: theme.palette.background.paper,
//       border: '0.5px solid #000',
//       boxShadow: theme.shadows[1],
//       padding: theme.spacing(2, 4, 3),
//     },
//     textField1: {
//       marginLeft: theme.spacing(4),
//       // marginRight: theme.spacing(2),
//       width: 670,
//     },
//     textField2: {
//       marginLeft: theme.spacing(4),
//       // marginRight: theme.spacing(3),
//       width: 320,
//     },
//     signButton:{
//       display: flexbox,
//       justifyContent: flex-end,
//       alignItems: flex-end
//     }
//   }));

//   export default function SimpleModal() {
//     const classes = useStyles();
//     const [modalStyle] = React.useState(getModalStyle);
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => {
//       setOpen(true);
//     };
//     const handleClose = () => {
//       setOpen(false);
//     };




const Product_detail = () => {
    return(
        <>
            <Container>
                <Navbar></Navbar>
                {/* <Detial>รายละเอียดสินค้า</Detial> */}
                {/* <ModalContainer> */}
                    <Section1></Section1>
                    <Section2></Section2>
                {/* </ModalContainer> */}
            </Container>
        </>
    )
}
export default Product_detail