import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Button from '@material-ui/core/Button'
import Join from '../components/containers/Sell/Join'
import Create from '../components/containers/sell/Create'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: '#4F4F4F',
  },
}))

const ContainerMyStore = styled(Button)`
  && {
    width: 100%;
    height: 16.8rem;
    background: #ffffff;
    font-weight: normal;
    margin: 0;
    /* margin-top: 17.5rem; */
    /* margin: 20.5rem 0 0 0; */
  }
`
const StoreName = styled.p`
  font-family: Kanit;
  font-size: 3.6rem;
  margin: 0;
`

const ContainerCreate = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30.4rem;
`
const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 23.5rem;
  margin-bottom: 30.4rem;
`

const Sell = ({ location, history }) => {
  const classes = useStyles()
  return (
    <Layout location={location} history={history} navbar="second">
      <BigContainer>
        <ContainerMyStore disabled className={classes.button}>
          <StoreName>ร้านค้าของฉัน</StoreName>
        </ContainerMyStore>
        <ContainerCreate>
          <Create />
          <Join />
        </ContainerCreate>
      </BigContainer>
    </Layout>
  )
}
export default Sell
