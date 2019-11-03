import React, { useState } from 'react'
import styled from 'styled-components'

const Cancle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: kanit;
    width: 30%;
    height: 3.3rem;
    font-weight: 300;
    font-size: 1.4rem;
    background-color: #BDBDBD;
    color: #FFFFFF;
    border-radius: 3px 0px 0px 3px;
    box-sizing: border-box;
    & :hover{
        background-color: #666565;
    }
    cursor: pointer;
`

const ContainerEdit = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-left: auto;
`

const ContianerStockList = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    padding: 0 2.3rem 1.7rem 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #BDBDBD;
    margin-bottom: 1.7rem;
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 2.1rem;
    letter-spacing: 0.5px;
    position: relative;
    outline: none;
`

const ContainerDel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    width: ${props => props.showDelete? '20rem': '0'};
    height: 3.3rem;
    z-index: 100;
    right: 0rem;
    top: 50%;
    margin-top: -2rem;
    transition: all 0.25s ease;
    overflow: hidden;
    box-sizing: border-box;
`

const Confirm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space : nowrap;
    width: 40%;
    font-family: kanit;
    font-weight: 300;
    font-size: 1.4rem;
    margin-right: 1.4rem;
    color: #828282;
`

const ConfirmDelete = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: kanit;
    width: 30%;
    height: 3.3rem;
    font-weight: 300;
    font-size: 1.4rem;
    background-color: #FF6969;
    color: #FFFFFF;
    box-sizing: border-box;
    & :hover{
        background-color: #fa3e3e;
    }
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

const Edit = styled.div`
    text-decoration: underline;
    color: #4F4F4F;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    margin-right: 3.5rem;
    cursor: pointer;
`

const Text = styled.div`
    width: 12%;
`

const StockList = () => {
    const [showDelete, setShowDelete] = useState(false)
    const [show, setShow] = useState(true)

    const handleShowDelete = () => {
        setShowDelete(true)
    }

    return ( show ?
        <ContianerStockList 
            onBlur={()=> setShowDelete(false)}  
            tabIndex={0}
        >
            <Text>#6210260000001</Text>
            <Text>20/10/2562</Text>
            <Text>088-088-0888</Text>
            <Text>ชื่อจริง  นามสกุล</Text>
            <Text>พนักงาน</Text>

            <ContainerEdit>
                <Edit>แก้ไข</Edit>
                <Delete onClick = {() => handleShowDelete()}>ลบ</Delete>
            </ContainerEdit>

            <ContainerDel showDelete={showDelete} >
                <Confirm>ยืนยันการลบ</Confirm>
                <Cancle onClick = {() => setShowDelete(false)}><p>ยกเลิก</p></Cancle>
                <ConfirmDelete onClick={() => setShow(false)}>ลบ</ConfirmDelete>
            </ContainerDel>

        </ContianerStockList> : null

    )
}
export default StockList