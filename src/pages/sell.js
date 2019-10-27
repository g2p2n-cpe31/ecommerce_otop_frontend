import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Button from '@material-ui/core/Button'
import Join from '../components/containers/sell/Join'
import Create from '../components/containers/sell/Create'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
      color: '#4F4F4F'
    },
  }));


const ContainerMyStore = styled(Button)`
    &&{
        width:100%;
        height: 16.8rem;
        background: #FFFFFF;
        font-weight: normal;
        margin: 20.5rem 0 0 0;
    }
`
const StoreName = styled.p`
    font-family: Kanit;
    font-size: 3.6rem;
    margin-bottom: 0;
    margin-top: 0;
`

const ContainerCreate = styled.div`
    display: flex;
    flex-direction: row;
`



const Sell = () => {
    const classes = useStyles();
    return(
        <Layout>
            <ContainerMyStore disabled className={classes.button}>
                <StoreName>
                    ร้านค้าของฉัน
                </StoreName>
            </ContainerMyStore>
            <ContainerCreate>
                <Create/>
                <Join/>
            </ContainerCreate>
        </Layout>
    )
}
export default Sell