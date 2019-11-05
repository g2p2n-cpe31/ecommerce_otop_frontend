import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import ProdPath from '../../../images/Cart/prod.png'
import React, { useState, useEffect } from 'react'
import IconDeleteProd from '../../common/IconDeleteProd'
import CheckBox from '../../common/CheckBoxCustom'
import PlusAndMinus from '../ProductDetail/PlusAndMinus'
import { QuantityProvider } from '../../context/QuantityProduct'

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10rem;
  margin: 0;
  padding-left: 1.079rem;
  box-sizing: border-box;
  margin: 0.8rem 0;
`

const ContainerPlusAndMinus = styled.div`
  height: 100%;

  margin: 0 6.5rem 0 0;
`

const DetailToSeller = styled.div`
  height: 100%;
  width: auto;

  margin: 0;
`

const Detail = styled.p`
  font-family: Kanit;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  color: #4f4f4f;
  margin: 0;
`

const ContentPM = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
`
const ContainerItemContent = styled.div`
  margin: 0;

  padding-top: 2rem;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  display: flex;
  width: 100%;
`
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-left: 4.6rem;
  max-width: 50.4rem;
  width: 40%;
  height: 100%;
`

const ContainerHorizontal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FontSize = styled.p`
  font-size: 18px;
  margin: 0;
`
const FontSize2 = styled.p`
  font-size: 13px;
  color: #828282;
  margin: 0;
`
const FontSize3 = styled.p`
  width: 15rem;
  font-size: 2.4rem;
  margin: 0;
  color: #5b3c78;
`
const FontSize4 = styled.p`
  width: 15rem;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #828282;
  margin: 0;
`
const DeleteBox = styled.div`
  height: 100%;
  margin-top: -3rem;
  margin-left: auto;
`

const PreviewProdImage = styled.img`
  width: 15.7rem;
  height: 8.7rem;
`
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

const Product = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
    if (count < 0) setCount(0)
    if (count === 'NaN') setCount(0)
  }, [count])

  const [state, setState] = React.useState({
    checkedB: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  const classes = useStyles()

  return (
    <QuantityProvider>
      <Box>
        <CheckBox
          checked={state.checkedB}
          onChange={handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />

        <PreviewProdImage src={ProdPath} alt="preview_product" />
        <ContainerItemContent>
          <ContainerText>
            <ContainerHorizontal>
              <FontSize>ชื่อสินค้า</FontSize>
              <FontSize3>255 บาท</FontSize3>
            </ContainerHorizontal>
            <ContainerHorizontal>
              <FontSize2>รายละเอียดสินค้า</FontSize2>
              <FontSize4>ฟรีค่าจัดส่ง</FontSize4>
            </ContainerHorizontal>
          </ContainerText>
          <ContainerPlusAndMinus>
            <ContentPM>
              <PlusAndMinus />
            </ContentPM>
          </ContainerPlusAndMinus>
          <DetailToSeller>
            <Detail>รายละเอียดถึงผู้ขาย</Detail>
            <Detail>-----------------</Detail>
          </DetailToSeller>
          <DeleteBox>
            <IconDeleteProd />
          </DeleteBox>
        </ContainerItemContent>
        {/* <ContainerButton>
          <ButtonCustom onClick={() => setCount(parseInt(count) - 1)}>
            -
          </ButtonCustom>

          <TextFieldCustom
            id="outlined-bare"
            type="number"
            margin="normal"
            variant="outlined"
            value={count}
            onChange={e =>
              e.target.value !== null ? setCount(e.target.value) : setCount(0)
            }
          />
          <ButtonCustom onClick={() => setCount(parseInt(count) + 1)}>
            +
          </ButtonCustom>
        </ContainerButton>
        <SetMargin>
          <Box2>
            <FontSize5></FontSize5>
            <FontSize5>-----------------</FontSize5>
          </Box2>
        </SetMargin>
        <Margin3 />
       */}
      </Box>
    </QuantityProvider>
  )
}

export default Product
