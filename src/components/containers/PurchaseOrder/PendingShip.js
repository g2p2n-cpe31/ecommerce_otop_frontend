import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import ButtonFlat from '../../common/ButtonFlat'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import CopyIcon from '@material-ui/icons/FilterNoneRounded';

// const BlurBox = styled.div`
//     color: transparent;
//     text-shadow: 0 0 0.4rem rgba(0,0,0,0.2);    
//     width: ${props => props.showAddress ? '75rem' : '0'};
// `

const AddressBox = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px 0px 0px 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0;
    margin: 0 -36.36rem;
    width: ${props => props.showAddress ? '75rem' : '0'};
    height: 3.3rem;
    position: absolute;
    transition: all 0.25s ease;
    z-index: 100;
    overflow: hidden;
`

const AddressSearchTextBox = styled(TextField)`
  && {
    margin: 0 0;
    width: 90.5%;
    width: 75rem;
    height: 3.1rem;
    background: #FFFFFF;
    border: 0.1rem solid #BDBDBD;
    border-radius: 0.2rem;
    /* z-index: 200; */
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

const CustName = styled.div`
    width: 15%;
`

const DetailBox = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 3px 0px 0px 3px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0;
    margin: 0 -6.142rem;
    width: ${props => props.showDetail ? '44.85rem' : '0'};
    height: 7.8rem;
    position: absolute;
    transition: all 0.25s ease;
    z-index: 100;
    overflow: hidden;
`

const DetailSearchTextBox = styled(TextField)`
  && {
    margin: 0 0;
    width: 100%;
    max-width: 51.9rem;
    height: 7.6rem !important;
    background: #FFFFFF;
    border: 0.1rem solid #BDBDBD;
    border-radius: 0.2rem;
    input {
      font-family: Kanit;
      font-size: 1.4rem;
      font-weight: 300;
      padding: 0 1.8rem;
      width: 100%;
      height: 7.6rem;
      visibility: visible;
    }

    textarea {
        max-height: 7.6rem;
    }

    & fieldset {
        height: 7.6rem;
        width: 100%;
      z-index: -1;
      background-color: rgba(242, 242, 242, 0.9);
      border-width: 0 !important;
      padding: 0;
    }

    & .MuiOutlinedInput-adornedEnd {
        /* height: 7.6rem; */
        width: 100%;
      padding-right: 0;
    }

    & .MuiOutlinedInput-multiline{
        font-family: Kanit;
        font-size: 1.4rem;
        font-weight: 300;
        padding: 0 0 0 1.25rem;
        height: 7.6rem;
        line-height: 2.6rem;
        visibility: visible;
        width: 100%;
    }
  }
`

const ListText = styled.div`
    width: 90%;
    padding-top: 0.5rem;
`

const ListAddress = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    cursor: pointer;
 `

const ListDetail = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    cursor: pointer;
`

const ListTrack = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    cursor: pointer;
 `

const OrderNumber = styled.div`
    width: 15%;
`

const OtherHead = styled.div`
    width: 30%;
`

const OtherText = styled.div`
    display: flex;
    direction: row;
    align-items: flex-start;
    width: 30%;
`

const PayDate = styled.div`
    width: 10%;
`

const ProductName = styled.div`
    width: 25%;
    /* color: transparent;
   text-shadow: 0 0 5px rgba(0,0,0,0.5); */
`

const ProdNameContainer = styled.div`
    width: 25%;
    color: ${props => props.showAddress ? 'transparent' : '#4F4F4F'};
    text-shadow: ${props => props.showAddress ? '0 0 0.4rem rgba(0,0,0,0.2)' : 'null'};
    /* color: transparent;
    text-shadow: 0 0 0.4rem rgba(0,0,0,0.2);     */
    /* color: #4F4F4F; */
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
`

const ProductNumber = styled.div`
    width: 5%;
`

const ProductNumberContainer = styled.div`
    width: 5%;
    color: ${props => props.showAddress ? 'transparent' : '#4F4F4F'};
    text-shadow: ${props => props.showAddress ? '0 0 0.4rem rgba(0,0,0,0.2)' : 'null'};
    /* color: transparent;
    text-shadow: 0 0 0.4rem rgba(0,0,0,0.2);     */
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
`

const StockList = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    padding: 1.3rem 2.3rem 0 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #BDBDBD;
    margin-bottom: 2.6rem;
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
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
    /* margin: 0 0; */
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
    margin-bottom: 2.6rem;
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.8rem;
    color: #828282;
`

const Tel = styled.div`
    width: 15%;
`

const TextButton = styled.div`
    font-family: Kanit;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.5px;
    color: #FFFFFF;    
    display: flex;
    justify-content: center;
    align-items: center;
`

const TrackBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0;
    width: ${props => props.showTrack ? '42.7rem' : '0'};
    height: 3.3rem;
    position: absolute;
    transition: all 0.25s ease;
    z-index: 100;
    overflow: hidden;
`

const TrackSearchTextBox = styled(TextField)`
  && {
    margin: 0 0;
    width: 90.5%;
    max-width: 42.7rem;
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

const PendingShip = () => {
    const [valueSearch, setValueSearch] = useState('')
    const handleChangeSearch = event => setValueSearch(event.target.value)
    const [showTrack, setShowTrack] = useState(false)
    const [showAddress, setShowAddress] = useState(false)
    const [showDetail, setShowDetail] = useState(false)

    const handleTrack = () => {
        setShowTrack(true)
    }

    const handleAddress = () => {
        setShowAddress(true)
    }

    const handleDetail = () => {
        setShowDetail(true)
    }

    return (
        <>
            <TableContainer>
                <TableHead>
                    <OrderNumber>หมายเลขคำสั่งซื้อ</OrderNumber>
                    <PayDate>วันที่สั่งซื้อ</PayDate>
                    <Tel>เบอร์ติดต่อผู้ซื้อ</Tel>
                    <CustName>ชื่อผู้ซื้อ</CustName>
                    <ProductName>ชื่อสินค้า</ProductName>
                    <ProductNumber>จำนวน</ProductNumber>
                    <OtherHead />
                </TableHead>

                <StockList>
                    <OrderNumber>#2226210260000001</OrderNumber>
                    <PayDate>21/10/2562</PayDate>
                    <Tel>088-088-0888</Tel>
                    <CustName>ชื่อจริง  นามสกุล</CustName>
                    <ProdNameContainer showAddress={showAddress}>
                        <ListText>สับปะรด</ListText>
                        <ListText>กล้วย</ListText>
                        <ListText>ผ้าไหม</ListText>
                    </ProdNameContainer>
                    <ProductNumberContainer showAddress={showAddress}>
                        <ListText>2</ListText>
                        <ListText>5</ListText>
                        <ListText>1</ListText>
                    </ProductNumberContainer>
                    <OtherText>
                        <ListTrack onClick={() => handleTrack()}>จัดส่งแล้ว</ListTrack>
                        <ListAddress onClick={() => handleAddress()}>ที่อยู่จัดส่ง</ListAddress>
                        <ListDetail onClick={() => handleDetail()}>รายละเอียดเพิ่มเติม</ListDetail>

                        <TrackBox showTrack={showTrack}>
                            <TrackSearchTextBox
                                variant="outlined"
                                margin="normal"
                                value={valueSearch}
                                onChange={event => handleChangeSearch(event)}
                                placeholder="หมายเลขไปรษณีย์"
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <ButtonFlat 
                                            background='#BDBDBD' 
                                            width="8.1rem"
                                            onClick={() => setShowTrack(false)}
                                        >
                                            <TextButton>ยกเลิก</TextButton>
                                        </ButtonFlat>
                                        <ButtonFlat
                                            background="#FBB282"
                                            width="8.1rem"
                                            type="submit"
                                            onClick={() => setShowTrack(false)}
                                        >
                                            <TextButton>ยืนยัน</TextButton>
                                        </ButtonFlat>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        </TrackBox>

                        <AddressBox showAddress={showAddress}>
                            {/* <BlurBox> */}
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
                            {/* </BlurBox> */}
                        </AddressBox>
                        

                        <DetailBox showDetail={showDetail}>
                            <DetailSearchTextBox
                                multiline
                                variant="outlined"
                                margin="normal"
                                value={"รายละเอียดจากผู้ซื้อ\nรายละเอียดจากผู้ซื้อ\nรายละเอียดจากผู้ซื้อ"}
                                onChange={event => handleChangeSearch(event)}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <ButtonFlat
                                                background="#C4C4C4"
                                                width="2.1rem"
                                                height="8.5rem"
                                                type="submit"
                                                onClick={() => setShowDetail(false)}
                                            >
                                                <StyledCloseIcon />
                                            </ButtonFlat>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </DetailBox>

                    </OtherText>
                </StockList>

            </TableContainer>
        </>
    )
}
  
export default PendingShip