import React, { useState } from 'react'
// import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Pagination from 'material-ui-flat-pagination'
import styled from 'styled-components'
import pagination_left from '../../images/SearchPage/pagination_left.svg'
import pagination_right from '../../images/SearchPage/pagination_right.svg'
import ButtonFlat from './ButtonFlat'
import TextField from '@material-ui/core/TextField'

const ContainerPagination = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 2.9rem 1rem 7.8rem;
`

const Text = styled.p`
  font-size: 12px;
  font-family: Kanit;
  color: #828282;
  margin: auto 0 auto 3rem;
`

const TextFieldCustom = styled(TextField)`
  && {
    font-family: Kanit;
    font-size: 13px;
    max-width: 57px;

    margin: auto 0.6rem;

    & input {
      padding: 0 0.4rem;
      height: 22px;
    }
    & fieldset {
      border: 0.7px solid #bdbdbd !important;
      box-sizing: border-box;
      border-radius: 1px;
    }
  }
`

const PaginationCustom = styled(Pagination)`
  && {
    button span {
      font-family: Kanit;
      font-size: 18px;
    }
    & .MuiButton-root {
      color: #828282;
    }
    & .MuiButton-textPrimary {
      color: #bdbdbd;
    }

    & .MuiFlatPageButton-rootCurrent:hover {
      background: rgba(130, 130, 130, 0.2);
    }
  }
`

const IconPaging = styled.img`
  width: 8.34px;
  height: 13.5px;
  margin: 8.25px auto;
`

const theme = createMuiTheme()
const PaginationComponent = props => {
  const [offset, setOffset] = useState(0)
  const handleClick = offset => setOffset(offset)

  return (
    <ContainerPagination>
      <MuiThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <PaginationCustom
          // currentPageColor="#828282"
          size="medium"
          limit={10}
          offset={offset}
          total={100}
          onClick={(e, offset) => handleClick(offset)}
          previousPageLabel={<IconPaging src={pagination_left} />}
          nextPageLabel={<IconPaging src={pagination_right} />}
        />
      </MuiThemeProvider>
      <Text>ไปที่หน้า</Text>
      <TextFieldCustom defaultValue="" margin="normal" variant="outlined" />
      <ButtonFlat
        background="#828282"
        color_btn="#F2F2F2"
        font_size="10px"
        border_radius="1px"
        width="43px"
        height="22px"
        onClick = {() => props.getProductOne()}
      >
        ไป
      </ButtonFlat>
    </ContainerPagination>
  )
}

export default PaginationComponent
