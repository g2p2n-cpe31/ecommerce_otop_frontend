import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Product from './Product'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 115rem;
  /* height: 46rem;   */
  background-color: #f7f4f3;
  border-radius: 2px;
`
const Box2 = styled.div`
  margin-top: 1.8rem;
  margin-left: 2.479rem;
  margin-bottom: 1rem;
`
// const MarginLine = styled.div`
//     margin: 5px;
//     margin-bottom: 2.4rem;
// `
const Line = styled.hr`
  width: 93%;
  margin-bottom: 2.4rem;
`
const Margin = styled.div`
  margin: 1rem;
`
const TextLabel = styled(FormControlLabel)`
  && .MuiTypography-body1 {
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.4rem;
  }
`
const Store = () => {
  const [state, setState] = React.useState({
    checkedB: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <>
      <Box>
        <Box2>
          <TextLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="ชื่อร้านค้า"
          />
        </Box2>
        {/* <MarginLine /> */}
        <Line />
        <Product />
        <Product />
        <Product />
      </Box>
      <Margin />
    </>
  )
}

export default Store
