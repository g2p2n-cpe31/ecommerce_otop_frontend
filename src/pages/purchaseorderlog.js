import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import SearchSection from '../components/containers/POlog/SearchSection'
import Table from '../components/containers/POlog/Table'
// import { Table } from '@material-ui/core'

const HeaderText = styled.p`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: #4f4f4f;
  margin: 4.1rem 0 0 1.5rem;
  
`

const purchaseorderlog = ({ location, history }) => {
    return (
        <>
            <Layout location={location} history={history} navbar="second">
                <HeaderText>ประวัติการขาย</HeaderText>
                <SearchSection />
                <Table />
            </Layout>
        </>
    )
}

export default purchaseorderlog
