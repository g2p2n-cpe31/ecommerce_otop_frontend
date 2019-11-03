import React, { useState }  from 'react'
import styled from 'styled-components'
import RequestList from './RequestList.js'

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
    background: #FFFFFF;
    border-radius: 0.3rem;
    margin-top: 3rem ;
    margin-bottom: 9.8rem;
    padding: 0 2px 0 2px;
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 4.7rem;
    width:100%;
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
    line-height: 3.3rem;
`
const Other = styled.div`
    width: 40%;
`

const Request = () => {
    const [showDelete, setShowDelete] = useState(false)
    const [show, setShow] = useState(true)

    const handleShowDelete = () => {
        setShowDelete(true)
    }

    return ( 
        <ContainerSectionThree>
                <Content>
                    <Text>หมายเลขสมาชิก</Text>
                    <Text>วันที่ยื่นคำขอ</Text>
                    <Text>เบอร์ติดต่อ</Text>
                    <Text>ชื่อผู้ยื่นคำขอ</Text>
                    <Text>ตำแหน่งในร้านค้า</Text>
                    <Other />
                </Content>

                <ContainerStockList>
                    <RequestList />
                    <RequestList />
                </ContainerStockList>
        </ContainerSectionThree>
    ) 
}
export default Request