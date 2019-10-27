import React, {useState} from './node_modules/react'
import { makeStyles } from './node_modules/@material-ui/core/styles';
import styled from './node_modules/styled-components'
import Button from './node_modules/@material-ui/core/Button'
import Modal from './node_modules/@material-ui/core/Modal'
import Backdrop from './node_modules/@material-ui/core/Backdrop'
import Fade from './node_modules/@material-ui/core/Fade'
import TextField from './node_modules/@material-ui/core/TextField'
import CloseIcon from '../../../images/ProductDetail/cross.svg'
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'



const ContainerJoin = styled(Button)`
        width: 50%;
        height: 16.8rem;
        background: #FFFFFF;
        margin: 1.6rem 0 0 0;
        font-weight: normal;
        color: #4F4F4F;
`

const CreateNameJoin  = styled.p`
    font-family: Kanit;
    font-size: 3.6rem;
    margin-bottom: 0;
    margin-top: 0;
`


const StyledJoin = styled(Modal)`
    &&{
        cursor: url(${ic_cancel_white}) 205 205 ,auto;
    }
    &:after{
        background: #BDBDBD;
        opacity: 0.5;
    }
`

const StyledFade = styled(Fade)`
    outline: 0;
    cursor: auto;
`

const  Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 83.9rem;
    height: 23.4rem;
    background: #FFFFFF;
    border-radius: 3px;
    padding: 4.8rem 6.9rem 7.4rem 6.7rem;
    box-sizing: border-box;
    position: relative;
`

const  NameBox = styled.p`
    font-family: Kanit;
    font-size: 3rem;
    color: #333333;
    margin-bottom: 0;
    margin-top: 0;
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2.7rem;
`



const CodeInvite = styled(TextField)`
    &&{
        width: 70%;
        margin-right: 5.7rem;
        margin: 0 5.7rem  0  0;
        & input{
            font-family: Kanit;
            font-size: 1.6rem;
            font-weight: normal;
        }
        & > div {
            height: 4rem;
            display: flex;
        }
        & .MuiInput-underline::before{
            border-bottom-color: #BDBDBD;
        }
    }
`

const ButtonJoin = styled(Button)`
    &&{
        width: 15.5rem;
        height: 4rem;
        background: #E89C6B;
        border-radius: 0.3rem;
        padding: 0.9rem 0 1rem 0;
    }
    &:hover{
        background: #ED7F38;
    }
`

const NameButtonJoin = styled.p`
    font-family: Kanit;
    font-weight: 500;
    font-size: 14px;
    color: #F2F2F2;
    margin-top: 0;
    margin-bottom: 0;
`

const Cross = styled.img`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  z-index: 250;
  cursor: pointer;
`


const Request = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 18px;
    color: #4F4F4F;
    margin-bottom: 0;
    margin-top: 3.7rem;
`

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const  Join = () =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const [isShow, setIsShow] = useState(false)

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
        setTimeout(() => setIsShow(false), 600)
    };

    return(
        <>
            <ContainerJoin type="button" onClick={handleOpen}>
               <CreateNameJoin>เข้าร่วมร้านค้า</CreateNameJoin>
            </ContainerJoin>
            <StyledJoin
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <StyledFade in={open}>
                <div className={classes.paper}>
                    <Box>
                        <Cross src={CloseIcon} onClick={() => handleClose()} />
                        <NameBox>เข้าร่วมร้านค้า</NameBox>
                            {
                                isShow ? (
                                   <Request>ส่งคำขอเข้าร่วมร้านค้าแล้ว กรุณารอการตอบรับจากเจ้าของร้านค้า</Request>
                                ):(
                                    <ContainerInput>
                                           <CodeInvite
                                            placeholder="CODE INVITE"
                                            />
                                            <ButtonJoin onClick={() => setIsShow(true)}>
                                                <NameButtonJoin>เข้าร่วม</NameButtonJoin>
                                            </ButtonJoin>
                                    </ContainerInput>
                                    )
                            }
                    </Box>
                </div>
            </StyledFade>
        </StyledJoin>
        </>

    )
}
export default Join