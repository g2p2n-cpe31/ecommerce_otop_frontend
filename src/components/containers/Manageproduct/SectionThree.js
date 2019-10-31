import React  from 'react'
import styled from 'styled-components'

const ContainerSectionThree = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 88.2rem;
    background: #FFFFFF;
    border-radius: 0.3rem;
    margin-top: 5rem ;
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
`

const Product = styled.div`
    width: 30%;
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.8rem;
    color: #828282;
`
const Other = styled.div`
    width: 15%;
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.8rem;
    color: #828282;
`
const Remain = styled.div`
    width: 20%;
    font-family: Kanit;
    font-style: normal;
    font-size: 1.8rem;
    color: #828282;
`

const StockList = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    height: 4.7rem;
    width:100%;
    padding: 1.3rem 2.3rem 0 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #BDBDBD;
    margin-bottom: 2.6rem;
`

const ProductName = styled.div`
    width: 30%;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color:  #4F4F4F;
    display: flex;
`

const OtherName = styled.div`
    width: 15%;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color: #828282;
`

const RemainName = styled.div`
    width: 15%;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color: #828282;
`

const ContainerEdit = styled.div`
   display: flex;
   flex-direction: row;
   margin-left: auto;
`

const Edit = styled.div`
    text-decoration: underline;
    color: #4F4F4F;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    margin-right: 3.5rem;
    cursor: pointer;
`

const Delete = styled.div`
    text-decoration: underline;
    color: #4F4F4F;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    cursor: pointer;
`




const SectionThree = () => {
    return (
        <ContainerSectionThree>
                <Content>
                    <Product>ชื่อสินค้า</Product>
                    <Other>ราคา</Other>
                    <Other>วันที่เพิ่มสินค้า</Other>
                    <Other>วันที่แก้ไขล่าสุด</Other>
                    <Remain>จำนวนคงเหลือ</Remain>
                </Content>

                <StockList>
                    <ProductName>สับประรดกับมะพร้าว</ProductName>
                    <OtherName>255</OtherName>
                    <OtherName>20/10/2562</OtherName>
                    <OtherName>20/10/2562</OtherName>
                    <RemainName>12</RemainName>
                    <ContainerEdit>
                        <Edit>แก้ไข</Edit>
                        <Delete>ลบ</Delete>
                    </ContainerEdit>
                </StockList>
        </ContainerSectionThree>
    )
}
export default SectionThree