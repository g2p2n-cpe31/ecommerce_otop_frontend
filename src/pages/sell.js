import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Button from '@material-ui/core/Button'
import Join from '../components/containers/Sell/Join'
import Create from '../components/containers/Sell/Create'
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
`

const Sell = ({ location, history }) => {
  const classes = useStyles()
  return (
    <Layout location={location} history={history} navbar="second">
      <ContainerMyStore disabled className={classes.button}>
        <StoreName>ร้านค้าของฉัน</StoreName>
      </ContainerMyStore>
      <ContainerCreate>
        <Create />
        <Join />
      </ContainerCreate>
    </Layout>
  )
}
export default Sell
