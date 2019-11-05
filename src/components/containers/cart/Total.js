import React from 'react'
import styled from 'styled-components'
// import { makeStyles } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
import ButtonFlat from '../../common/ButtonFlat'

// const ButtonCustom = styled(Button)`
//   && {
//     background: #e89c6b;
//     height: 42px;
//     width: 332.94px;
//     font-family: Kanit;
//     font-size: 18px;
//     color: white;
//     margin: 0;
//   }
// `

const Box = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
`

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const Margin = styled.div`
  margin-right: 30px;
`
// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }))

const FontSize = styled.div`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #f2f2f2;
  margin-right: 4rem;
`

const FontSize2 = styled.div`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: #ffffff;
`

const Total = props => {
  // const classes = useStyles()
  return (
    <Box>
      <Box2>
        <FontSize>ยอดรวมทั้งสิ้น</FontSize>
        <FontSize2>255 บาท</FontSize2>
      </Box2>
      <Margin />
      <ButtonFlat
        width="33.2rem"
        height="4.2rem"
        color_btn="#FFF"
        background="#E89C6B"
        font_weight="500"
        font_size="1.8rem"
        onClick={props.setShowPayment}
      >
        ดำเนินการชำระเงิน
      </ButtonFlat>
    </Box>
  )
}

export default Total
