import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import ButtonFlat from '../../common/ButtonFlat'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import CopyIcon from '@material-ui/icons/FilterNoneRounded';

// import Layout from '../../common/Layout';

const AddressBox = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px 0px 0px 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0 11.1rem;
    width: ${props => props.showAddress ? '65.69rem' : '0'};
    /* height: 3.3rem; */
    position: absolute;
    top: 78;
    right: 0;
    z-index: 200;
    overflow: hidden;
    transition: all 0.25s ease;
    /* height: 7.8rem; */
`

const AddressSearchTextBox = styled(TextField)`
  && {
    margin: 0 0;
    width: 100%;
    width: 90rem;
    height: 3.1rem;
    background: #FFFFFF;
    border: 0.1rem solid #BDBDBD;
    border-radius: 0.2rem;
    input {
      font-family: Kanit;
      font-size: 1.4rem;
      font-weight: 300;
      padding: 0 1.8rem;
      width: 100%;
      height: 3.1rem;
    }

    & fieldset {
      z-index: -1;
      background-color: rgba(242, 242, 242, 0.9);
      border-width: 0 !important;
      padding: 0;
    }

    & .MuiOutlinedInput-adornedEnd {
      padding-right: 0;
    }
  }
`

const Amount = styled.div`
    width: 4%;
`

const AmountContainer = styled.div`
    width: 4%;
    color: ${props => props.showAddress ? 'transparent' : '#4F4F4F'};
    text-shadow: ${props => props.showAddress ? '0 0 0.4rem rgba(0,0,0,0.2)' : 'null'};
    margin: -0.2rem 3.5rem 0 -3.5rem;
    height: 7.8rem;
    /* margin-top: -0.2rem;
    margin-left: -3.5rem; */
`

const CustName = styled.div`
    height: 7.8rem;
    width: 14%;
`

const Empty = styled.div`
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
    width: 8%;
    height: 7.8rem;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

const ListText = styled.div`
    width: 100%;
    line-height: 2.8rem;

    /* padding-top: 0.5rem; */
`

const OrderNumber = styled.div`
    height: 7.8rem;
    width: 15%;
`

const PayDate = styled.div`
    height: 7.8rem;
    width: 9%;
`

const ProductName = styled.div`
    width: 13%;
`

const ProdNameContainer = styled.div`
    width: 16%;
    color: ${props => props.showAddress ? 'transparent' : '#4F4F4F'};
    text-shadow: ${props => props.showAddress ? '0 0 0.4rem rgba(0,0,0,0.2)' : 'null'};
    margin-top: -0.2rem;
    height: 7.8rem;
`

const ShipDate = styled.div`
    height: 7.8rem;
    width: 9%;
`

const ShipStatus = styled.div`
    height: 7.8rem;
    width: 12%;
`

const StockList = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    padding: 0 2.3rem 1.7rem 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #BDBDBD;
    margin-bottom: 2.6rem;
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
    /* position: relative; */
`

const StyledCloseIcon = styled(CloseRoundedIcon)`
    color: #fff;
    width: 1.2rem;
    height: 1.2rem;
`

const StyledCopyIcon = styled(CopyIcon)`
    color: #fff;
    width: 1rem;
    height: 1.2rem;
    transform: rotate(90deg);
`

const TableContainer = styled(Container)`
    background-color: #fff;
    max-width: 162.4rem;
    min-height: 88.2rem;
    width: 100%;
    margin-top: 3.1rem;
    margin-left: 0;
    padding: 0 0;
`

const TableHead = styled.div`
    display: flex;
    flex-direction: row;
    height: 4.7rem;
    width:100%;
    padding: 1.3rem 2.3rem 0 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.1rem solid #828282;
    margin-bottom: 1.7rem;
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.8rem;
    color: #828282;
`

const TrackNo = styled.div`
    height: 7.8rem;
    width: 13%;
`


const PendingShip = () => {
    const [valueSearch, setValueSearch] = useState('')
    const handleChangeSearch = event => setValueSearch(event.target.value)
    const [showAddress, setShowAddress] = useState(false)
    
    const handleAddress = () => {
        setShowAddress(true)
    }

    return (
        <>
            {/* <Layout> */}
                <TableContainer>
                    <TableHead>
                        <OrderNumber>หมายเลขคำสั่งซื้อ</OrderNumber>
                        <PayDate>วันที่ชำระเงิน</PayDate>
                        <ShipDate>วันที่จัดส่ง</ShipDate>
                        <TrackNo>หมายเลขไปรษณีย์</TrackNo>
                        <ShipStatus>สถานะการจัดส่ง</ShipStatus>
                        <CustName>ชื่อผู้ซื้อ</CustName>
                        <ProductName>ชื่อสินค้า</ProductName>
                        <Amount>จำนวน</Amount>
                        <Empty></Empty>
                    </TableHead>

                    <StockList>
                        <OrderNumber>#33336210260000001</OrderNumber>
                        <PayDate>15/10/2562</PayDate>
                        <ShipDate>16/10/2562</ShipDate>
                        <TrackNo>EF582621151TH</TrackNo>
                        <ShipStatus>ถึงผู้รับแล้ว</ShipStatus>
                        <CustName>ชื่อจริง  นามสกุล</CustName>
                        <ProdNameContainer showAddress={showAddress}>
                            <ListText>สับปะรด</ListText>
                            <ListText>กล้วย</ListText>
                            <ListText>ทุเรียนทอด</ListText>
                        </ProdNameContainer>
                        <AmountContainer showAddress={showAddress}>
                            <ListText>3</ListText>
                            <ListText>10</ListText>
                            <ListText>2</ListText>
                        </AmountContainer>
                        <Empty onClick={() => handleAddress()}>ที่อยู่จัดส่ง</Empty>
                        <AddressBox showAddress={showAddress}>
                            <AddressSearchTextBox
                                variant="outlined"
                                margin="normal"
                                value={valueSearch}
                                onChange={event => handleChangeSearch(event)}
                                placeholder="111/111 ถนนบลาบลาบลา แขวงบลาบลาบลา เขตบลาบลาบลา จังหวัดบลาบลาบลา 10200"
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <ButtonFlat 
                                                background='#FBB282' 
                                                width="3.5rem"
                                                onClick={() => setShowAddress(false)}
                                            >
                                                <StyledCopyIcon />
                                            </ButtonFlat>
                                            <ButtonFlat
                                                background="#C4C4C4"
                                                width="2.1rem"
                                                type="submit"
                                                onClick={() => setShowAddress(false)}
                                            >
                                                <StyledCloseIcon />
                                            </ButtonFlat>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </AddressBox>

                    </StockList>

                </TableContainer>

            {/* </Layout> */}
        </>
    )
}
  
export default PendingShip