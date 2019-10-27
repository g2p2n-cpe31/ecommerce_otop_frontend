import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Button from '@material-ui/core/Button'
// import Manage  from '../components/containers/ManageStore/Manage'

const ContainerName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 6rem;
`

const StyledTitle = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 4.8rem;
    color: #4F4F4F;
    margin: 1.2rem 4.8rem 0 0;
`

const StoreName = styled.p`
    font-family: Kanit;
    font-weight: normal;
    font-size: 6.4rem;
    color: #333333;
    margin: 0;
`

const Underline = styled.div`
  border: 3px solid #FFFFFF;
  box-shadow: 0px 4px 10px rgba(221, 221, 221, 0.5);
  margin-top: 5.9rem;
`

const ContainerSlotOne = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7.2rem;
`

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 18rem;
    background: #FFFFFF;
    font-family: kanit;
    font-weight: 300;
    font-size: 3.6rem;
    margin-right: 2rem;

    &:last-child{
      margin-right: 0;
    }
`





const ManageStore = () => {
    return (
      <Layout>
        <ContainerName>
            <StyledTitle>จัดการร้านค้า</StyledTitle>
            <StoreName>ABCDEFG</StoreName>
        </ContainerName>
        <Underline/>

        <ContainerSlotOne>
            <StyledButton>จัดการร้านค้า</StyledButton>
            <StyledButton>ตรวจสอบรายการสั่งซื้อ</StyledButton>
            <StyledButton>ประวัติการขาย</StyledButton>
        </ContainerSlotOne>

      </Layout>
    )
}
export default ManageStore