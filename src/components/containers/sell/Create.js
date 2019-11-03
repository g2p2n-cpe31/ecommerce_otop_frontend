import React,{useState} from 'react'
import {navigate} from 'gatsby'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'
import TextField from '@material-ui/core/TextField'
import CloseIcon from '../../../images/ProductDetail/cross.svg'

const ContainerCreate = styled(Button)`
    width: 50%;
    height: 16.8rem;
    background: #FFFFFF;
    margin: 1.6rem 2rem 0 0;
    font-weight: normal;
    color: #4F4F4F;
`

const CreateNameStore  = styled.p`
    font-family: Kanit;
    font-size: 3.6rem;
    margin-bottom: 0;
    margin-top: 0;
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


  const StyledCreate = styled(Modal)`
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

const  BoxCreate = styled.div`
    display: flex;
    flex-direction: column;
    width: 83.9rem;
    background: #FFFFFF;
    border-radius: 3px;
    padding: 4.8rem 6.7rem 4.4rem 6.8rem;
    position: relative;
    box-sizing: border-box;
`

const  NameCreate = styled.p`
    font-family: Kanit;
    font-size: 3rem;
    color: #333333;
    margin-bottom: 0;
    margin-top: 0;
`

const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.9rem;
`

const StyledTextField = styled(TextField)`
    &&{
        width: 100%;
        margin-bottom: 3.5rem;
    }
    & input{
            font-family: Kanit;
            font-size: 1.6rem;
            font-weight: normal;
            margin-left: 1rem;
            margin-bottom: 1.1rem;
            line-height: 2.4rem;
            padding: 0;
            color: #BDBDBD;
        }
    & .MuiInput-underline::before{
            border-bottom-color: #BDBDBD;
    }
`

const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1.8rem;
`


const ButtonCancle = styled(Button)`
    width: 15.5rem;
    height: 4rem;
    background: #F2F2F2;
    border-radius: 0.3rem;
    padding: 0.9rem 0 1rem 0;
    margin-right: 3.2rem;
`

const NameButtonCancle = styled.p`
    font-family: Kanit;
    font-weight: 500;
    font-size: 1.4rem;
    color: #828282;
    margin-top: 0;
    margin-bottom: 0;
`


const ButtonCreate = styled(Button)`
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

const NameButtonCreate = styled.p`
    font-family: Kanit;
    font-weight: 500;
    font-size: 1.4rem;
    color: #F2F2F2;
    margin-top: 0;
    margin-bottom: 0;
`

const  BoxMyStore = styled.div`
    display: flex;
    flex-direction: column;
    width: 83.9rem;
    height: 45.9rem;
    background: #FFFFFF;
    border-radius: 3px;
    padding: 4.8rem 6.8rem 4.4rem 6.8rem;
    position: relative;
    box-sizing: border-box;
`
const Cross = styled.img`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  z-index: 250;
  cursor: pointer;
`

const  NameMyStore = styled.p`
    font-family: Kanit;
    font-size: 3rem;
    color: #333333;
    margin-bottom: 2.1rem;
    margin-top: 0;
`


const ContainerListOfMyStore = styled.div`
    display: flex;
    flex-direction: column;
    overflow:scroll;
`



const ContainerMyStore = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 8.8rem;
        background: #FBFBFB;
        border-radius: 0.5rem;
        box-sizing: border-box;
        border: 1px solid #E0E0E0;
        margin-bottom: 1rem;
        margin-right: 0;
        cursor: pointer;

        &:hover{
            background: #EBEBEB;
        }
`

const  ContainerMyStoreName = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 0;
    margin: 1.4rem 0 1.2rem 2.6rem;
`

const TitleStore = styled.p`
    width: 7.9rem;
    font-family: Kanit;
    font-weight: normal;
    font-size: 16px;
    color: #828282;
    margin: 0 2.1rem 0 0;
`

const SubtitleStore = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.6rem;
    color: #4F4F4F;
    margin: 0;
`

const  ContainerOwner = styled.p`
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    margin: 0 0 1.4rem 2.6rem;
`

const TitleOwner = styled.p`
    width: 7.9rem;
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.6rem;
    color: #828282;
    margin: 0 2.1rem 0 0;
`

const SubtitleOwner = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.6rem;
    color: #4F4F4F;
    margin: 0;
`



const Create = () =>{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const [isShow, setIsShow] = useState(false)
    const [nameStore, setNameStore] = useState('')

    const handleOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
        setTimeout(() => setIsShow(false), 600);
        setNameStore('')
      };

      const onClickStore = (e, name) => {
        navigate(`/managestore?nameStore=${name}`)
      }

      const handleSubmit = () => {
        if(nameStore !== ''){
            setIsShow(true)
        }
      }

    return(
        <>
            <ContainerCreate onClick={handleOpen}>
                <CreateNameStore>สร้างร้านค้า</CreateNameStore>
            </ContainerCreate>
            <StyledCreate
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
                            {
                                isShow ? (
                                    <BoxMyStore>
                                        <Cross src={CloseIcon} onClick={() => handleClose()} />
                                        <NameMyStore>ร้านค้าของฉัน</NameMyStore>

                                        <ContainerListOfMyStore>
                                            <ContainerMyStore onClick={(e, name = 'test') => onClickStore(e, name)}>
                                                <ContainerMyStoreName>
                                                    <TitleStore>ร้าน</TitleStore>
                                                    <SubtitleStore>{nameStore}</SubtitleStore>
                                                </ContainerMyStoreName>
                                                <ContainerOwner>
                                                    <TitleOwner>เจ้าของร้าน</TitleOwner>
                                                    <SubtitleOwner>poonshit</SubtitleOwner>
                                                </ContainerOwner>
                                            </ContainerMyStore>
                                            <ContainerMyStore>
                                                <ContainerMyStoreName>
                                                    <TitleStore>ร้าน</TitleStore>
                                                    <SubtitleStore>HIJKLMNOP</SubtitleStore>
                                                </ContainerMyStoreName>
                                                <ContainerOwner>
                                                    <TitleOwner>เจ้าของร้าน</TitleOwner>
                                                    <SubtitleOwner>poonshit</SubtitleOwner>
                                                </ContainerOwner>
                                            </ContainerMyStore>
                                            <ContainerMyStore>
                                                <ContainerMyStoreName>
                                                    <TitleStore>ร้าน</TitleStore>
                                                    <SubtitleStore>QRSTUVWXYZ</SubtitleStore>
                                                </ContainerMyStoreName>
                                                <ContainerOwner>
                                                    <TitleOwner>เจ้าของร้าน</TitleOwner>
                                                    <SubtitleOwner>poonshit</SubtitleOwner>
                                                </ContainerOwner>
                                            </ContainerMyStore>
                                            <ContainerMyStore>
                                                <ContainerMyStoreName>
                                                    <TitleStore>ร้าน</TitleStore>
                                                    <SubtitleStore>QRSTUVWXYZ</SubtitleStore>
                                                </ContainerMyStoreName>
                                                <ContainerOwner>
                                                    <TitleOwner>เจ้าของร้าน</TitleOwner>
                                                    <SubtitleOwner>poonshit</SubtitleOwner>
                                                </ContainerOwner>
                                            </ContainerMyStore>
                                        </ContainerListOfMyStore>
                                    </BoxMyStore>
                                ):(
                                    <BoxCreate>
                                        <NameCreate>สร้างร้านค้า</NameCreate>
                                        <ContainerInput>
                                            <StyledTextField
                                                    placeholder="ชื่อร้านค้า"
                                                    value={nameStore}
                                                    onChange={e => setNameStore(e.target.value)}
                                            />
                                            <StyledTextField
                                                    placeholder="รายละเอียดร้านค้า"
                                            />
                                            <StyledTextField
                                                    placeholder="ที่อยู่ร้านค้า"
                                            />
                                            <StyledTextField
                                                    placeholder="เบอร์โทรร้านค้า"
                                            />
                                            <StyledTextField
                                                    placeholder="อีเมลร้านค้า"
                                            />
                                        </ContainerInput>
                                        <ContainerButton>
                                            <ButtonCancle onClick={() => setOpen(false)}>
                                                <NameButtonCancle>ยกเลิก</NameButtonCancle>
                                            </ButtonCancle>
                                            <ButtonCreate onClick={handleSubmit}>
                                                <NameButtonCreate>สร้าง</NameButtonCreate>
                                            </ButtonCreate>
                                        </ContainerButton>
                                    </BoxCreate>
                                )
                            }
                    </div>
                </StyledFade>
            </StyledCreate>
        </>
    )
}
export default Create