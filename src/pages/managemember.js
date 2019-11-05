import React from 'react'
// import styled from 'styled-components'
import Main from '../components/containers/ManageMember/Main'
import Layout from '../components/common/Layout'

// const Container = styled.div`
//   margin: 0 0;
// `

const ManageMember = ({ location , history }) => {
    return (
        <>
            <Layout location={location} history={history} navbar="second">
                <Main />
            </Layout>
        </>
    )
}

export default ManageMember