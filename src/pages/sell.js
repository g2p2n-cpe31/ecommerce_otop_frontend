import React, { useState , useEffect} from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Join from '../components/containers/Sell/Join'
import Create from '../components/containers/sell/Create'
import Mystore from '../components/containers/sell/Mystore'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: '#4F4F4F',
  },
}))



const ContainerCreate = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const BigContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Sell = ({ location, history }) => {
  const classes = useStyles()
  const [haveStore, sethaveStore] = useState(false)

  useEffect(()=> {
    checkHaveStore('')
   }, [])


  const checkHaveStore = async () =>
  {

      try{
        const res = await axios.get('https://otop-d5bqdesqsq-an.a.run.app/v01/api/account/5dbe8890d4e555459c4ad10d')
       if(res.data.store.length > 0 )
        sethaveStore(true)
       else sethaveStore(false)
       console.log(res.data)
      }catch (error){
          console.log(error)
      }
  }

  return (
    <Layout location={location} history={history} navbar="second">
      <BigContainer>
        <Mystore disabled={haveStore} className={classes.button}/>
        <ContainerCreate>
          <Create/>
          <Join />
        </ContainerCreate>
      </BigContainer>
    </Layout>
  )
}
export default Sell
