import React from 'react'
import styled from 'styled-components'
import ProdPath from '../../../images/Cart/prod.png'
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
  max-width: 54.4rem;
  width: 50%;
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
  font-family: Kanit;
  font-weight: normal;
  font-size: 18px;
  color: #333333;
`
const DetailProd = styled.p`
  font-family: Kanit;
  font-size: 13px;
  color: #828282;
  margin: 0;
`
const FontSize3 = styled.p`
  font-family: Kanit;
  width: 15rem;
  font-size: 2.4rem;
  margin: 0;
  color: #5b3c78;
`
const TextShipping = styled.p`
  width: 15rem;
  font-family: Kanit;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #828282;
  margin: 0.5rem 0;
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

const Product = () => {
  const [state, setState] = React.useState({
    checkedB: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }
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
              <DetailProd>รายละเอียดสินค้า</DetailProd>
              <TextShipping>ฟรีค่าจัดส่ง</TextShipping>
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
      </Box>
    </QuantityProvider>
  )
}

export default Product
