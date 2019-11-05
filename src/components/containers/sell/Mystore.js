import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'
import CloseIcon from '../../../images/ProductDetail/cross.svg'
import {navigate} from 'gatsby'
import axios from 'axios'

const ContainerCreate = styled(Button)`
    width: 100%;
    height: 16.8rem;
    background: #FFFFFF;
    margin: 1.6rem 2rem 0 0;
    font-weight: normal;
    color: #4F4F4F;
    margin:0;
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
    overflow-y: scroll;
    overflow-x: hidden;
`

const ContainerMyStore = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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




const Mystore = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const [isShow, setIsShow] = useState(false)
    const [nameStore, setNameStore] = useState('')
    const [store,setStore] = useState([])


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setIsShow(false)
        setOpen(false);
        setTimeout(() => setIsShow(false), 600);
    };

    const onClickStore = (e, name) => {
        navigate(`/managestore?nameStore=${name}`)
      }


      const handleSubmit = async () => {
            setIsShow(true)
            getStore()
      }


       const getStore = async () =>
       {

           const id = ''
           try{
               const res = await axios.get('https://otop-d5bqdesqsq-an.a.run.app/v01/api/store/'+id,
            )
            setStore(res.data)
            console.log(res.data)
           }catch (error){
               console.log(error)
           }
       }

       useEffect(()=> {
        handleSubmit('')
       }, [])


    return(
        <>
            <ContainerCreate onClick={handleOpen}>
                <CreateNameStore>ร้านค้าของฉัน</CreateNameStore>
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
                    <BoxMyStore>
                        <Cross src={CloseIcon} onClick={() => handleClose()} />
                        <NameMyStore>ร้านค้าของฉัน</NameMyStore>

                        <ContainerListOfMyStore>
                            {store.map(item => (
                                <ContainerMyStore onClick={(e, name = 'test') => onClickStore(e, name)}>
                                <ContainerMyStoreName>
                                    <TitleStore>ร้าน</TitleStore>
                                    <SubtitleStore>{item.name}</SubtitleStore>
                                </ContainerMyStoreName>
                                <ContainerOwner>
                                    <TitleOwner>เจ้าของร้าน</TitleOwner>
                                    <SubtitleOwner>{item.ownerId}</SubtitleOwner>
                                </ContainerOwner>
                                </ContainerMyStore>
                                ))}
                        </ContainerListOfMyStore>
                    </BoxMyStore>
                    </div>
                </StyledFade>
            </StyledCreate>
        </>
    )
}
export default Mystore