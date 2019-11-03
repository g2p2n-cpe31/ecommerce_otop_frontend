import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const ButtonCustom = styled(Button)`
  && {
    background: #e89c6b;
    height: 42px;
    width: 332.94px;
    font-family: 'Kanit';
    font-size: 18px;
    color: white;
  }
`

const Box = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  width: 1150px;
  /* height: 46rem;   */
  border-radius: 2px;
`
const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`
const Margin = styled.div`
  margin-right: 30px;
`
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const FontSize = styled.div`
  font-size: 22px;
  color: white;
`

const FontSize2 = styled.div`
  font-size: 36px;
  color: white;
`

const Total = props => {
  const classes = useStyles()
  return (
    <div>
      <Box>
        <Box2>
          <FontSize>ยอดรวมทั้งสิ้น</FontSize>
          <Margin />
          <FontSize2>255 บาท</FontSize2>
        </Box2>
        <Margin />
        <ButtonCustom
          variant="contained"
          size="medium"
          className={classes.margin}
          onClick={props.setShowPayment}
        >
          ดำเนินการชำระเงิน
        </ButtonCustom>
      </Box>
    </div>
  )
}

export default Total
