import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import TextField from '@material-ui/core/TextField'

const StyledAddProduct = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    color:  #4F4F4F;
    margin: 4.1rem 0 0.4rem 1.5rem;
`

const DetailAddProduct = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #FFFFFF;
    border: 0.1rem solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 0.3rem;
    padding: 2.5rem 3.5rem 4rem 3.6rem;
`

const ContainerTextFiled = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0.3rem 0 0 0 ;
`
const InputTextFeild = styled(TextField)`
    &&{
        width: 100%;
        margin:0 0 3rem  0;
        &:last-child{
            margin-bottom: 0;
        }
        & input{
            font-family: Kanit;
            font-size: 1.6rem;
            font-weight: normal;
            margin-left: 1rem;
            margin-bottom: 1.2rem;
            line-height: 2.4rem;
            padding: 0;
            color: #BDBDBD;
        }
        & .MuiInput-underline::before{
            border-bottom-color: #BDBDBD;
        }
    }
`



const Manage = () => {
    return(
       <Layout>
           <StyledAddProduct>เพิ่มสินค้า</StyledAddProduct>
           <DetailAddProduct>
                <ContainerTextFiled>
                    <InputTextFeild placeholder="ชื่อสินค้า"/>
                    <InputTextFeild placeholder="ราคา"/>
                    <InputTextFeild placeholder="จำนวน"/>
                </ContainerTextFiled>
           </DetailAddProduct>
       </Layout>
    )
}
export default Manage