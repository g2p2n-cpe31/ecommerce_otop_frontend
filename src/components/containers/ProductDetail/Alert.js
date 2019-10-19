import React from 'react'
import styled from 'styled-components'
import CloseIcon from '../../../images/ProductDetail/cross.svg'
import Pipeapple from '../../../images/ProductDetail/pineapple.jpg'

const ContainerAlert = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 264px;
  height: 58px;
  background-color: rgba(154, 228, 185, 0.3);
  top: 19px;
  right: 15px;
  z-index: 200;
`

const Cross = styled.img`
  position: absolute;
  top: 7.4px;
  left: 245px;
  width: 9.5px;
  height: 9.5px;
  z-index: 250;
  cursor: pointer;
`

const ContainerAlertLeft = styled.div`
  width: 30%;
  padding: 8px 14px 8px 8px;
`

const ContainerAlertRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
`

const ContainerAlertImage = styled.img`
  width: 64px;
  height: 42px;
`

const AlertNameProduct = styled.p`
  display: flex;
  flex-direction: row;
  font-family: Kanit;
  font-weight: 300;
  font-size: 12px;
  color: #4f4f4f;
  margin-top: 8px;
  margin-bottom: 5px;
  /* margin: auto 0; */
`

const AlertAddProduct = styled.p`
  display: flex;
  flex-direction: row;
  font-family: Kanit;
  font-weight: normal;
  font-size: 12px;
  color: #4f4f4f;
  margin: 0;
  /* margin: auto 0; */
`

const Alert = props => {
  return (
    <>
      <ContainerAlert>
        <ContainerAlertLeft>
          <ContainerAlertImage src={Pipeapple} />
        </ContainerAlertLeft>

        <ContainerAlertRight>
          <Cross src={CloseIcon} onClick={() => props.closeAlert()} />
          <AlertNameProduct>สับปะรดกับมะพร้าว</AlertNameProduct>
          <AlertAddProduct>ถูกเพิ่มลงตะกร้าสินค้าแล้ว</AlertAddProduct>
        </ContainerAlertRight>
      </ContainerAlert>
    </>
  )
}
export default Alert
