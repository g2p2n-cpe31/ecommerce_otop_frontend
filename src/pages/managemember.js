import React from 'react'
import styled from 'styled-components'
import Main from '../components/containers/ManageMember/Main'
import GlobalStyles from '../components/utility/GlobalStyle'

const Container = styled.div`
  margin: 0 0;
`

const ManageMember = ({ location }) => {
    return (
        <>
            <Container>
                <GlobalStyles />
                    <Main />
            </Container>
        </>
    )
}
  
export default ManageMember