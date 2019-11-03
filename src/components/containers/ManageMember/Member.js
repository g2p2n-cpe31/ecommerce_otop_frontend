import React from 'react'
import styled from 'styled-components'
import StockList from './StockList'

const ContainerStockList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 88.2rem;
`

const ContainerSectionThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 88.2rem;
  background: #ffffff;
  border-radius: 0.3rem;
  margin-top: 3rem;
  margin-bottom: 9.8rem;
  padding: 0 2px 0 2px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.7rem;
  width: 100%;
  padding: 1.3rem 2.3rem 0 2.3rem;
  box-sizing: border-box;
  border-bottom: 0.1rem solid #828282;
  margin-bottom: 2.6rem;
  font-family: Kanit;
  font-weight: normal;
  font-size: 1.8rem;
  color: #828282;
`

const Text = styled.div`
  width: 12%;
`
const Other = styled.div`
  width: 40%;
`

const SectionThree = () => {
  //   const [showDelete, setShowDelete] = useState(false)
  //   const [show, setShow] = useState(true)

  //   const handleShowDelete = () => {
  //     setShowDelete(true)
  //   }

  return (
    <ContainerSectionThree>
      <Content>
        <Text>หมายเลขสมาชิก</Text>
        <Text>วันที่เข้าร่วม</Text>
        <Text>เบอร์ติดต่อ</Text>
        <Text>ชื่อสมาชิก</Text>
        <Text>ตำแหน่งในร้านค้า</Text>
        <Other />
      </Content>

      <ContainerStockList>
        <StockList />
        <StockList />
      </ContainerStockList>
    </ContainerSectionThree>
  )
}
export default SectionThree
