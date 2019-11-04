import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Button from '@material-ui/core/Button'
import { navigate } from 'gatsby'
// import Manage  from '../components/containers/ManageStore/Manage'

const ContainerName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 7.8rem;
`

const StyledTitle = styled.p`
  font-family: Kanit;
  font-weight: 300;
  font-size: 4.8rem;
  color: #4f4f4f;
  margin: 0 4.8rem 0 0;
  padding-top: 1.5rem;
`

const StoreName = styled.p`
  font-family: Kanit;
  font-weight: normal;
  font-size: 6.4rem;
  color: #333333;
  margin: 0;
`

const Underline = styled.div`
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 10px rgba(221, 221, 221, 0.5);
  margin-top: 5.9rem;
`

const ContainerSlotOne = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7.2rem;
`

const StyledButtonSlotOne = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 18rem;
  background: #ffffff;
  font-family: Kanit;
  font-weight: 300;
  font-size: 3.6rem;
  margin-right: 2rem;
  &:last-child {
    margin-right: 0;
  }
`

const StyledButtonSlotTwo = styled(Button)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 18rem;
  background: #ffffff;
  font-family: Kanit;
  font-weight: 300;
  font-size: 3.6rem;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
    background: #f2f2f2;
  }
`

const ContainerSlotTwo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 16.4rem;
`


const ManageStore = ({ location, history }) => {
  const onClickStore = (e, name) => {
    navigate(`/manageproduct?nameStore=${name}`)
  }

  return (
    <Layout location={location} history={history} navbar="second">
      <ContainerName>
        <StyledTitle>จัดการร้านค้า</StyledTitle>
        <StoreName>ABCDEFG</StoreName>
      </ContainerName>
      <Underline />

      <ContainerSlotOne>
        <StyledButtonSlotOne
          onClick={(e, name = 'test1') => onClickStore(e, name)}
        >
          จัดการร้านค้า
        </StyledButtonSlotOne>
        <StyledButtonSlotOne>ตรวจสอบรายการสั่งซื้อ</StyledButtonSlotOne>
        <StyledButtonSlotOne>ประวัติการขาย</StyledButtonSlotOne>
      </ContainerSlotOne>

      <ContainerSlotTwo>
        <StyledButtonSlotTwo>จัดการสมาชิกร้านค้า</StyledButtonSlotTwo>
        <StyledButtonSlotTwo disabled>แก้ไขข้อมูลร้านค้า</StyledButtonSlotTwo>
        <StyledButtonSlotTwo disabled> </StyledButtonSlotTwo>
      </ContainerSlotTwo>
    </Layout>
  )
}
export default ManageStore
