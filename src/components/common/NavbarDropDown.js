import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Container from '@material-ui/core/Container'
import Slide from '@material-ui/core/Slide'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import Button from '@material-ui/core/Button'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import { Link, useStaticQuery, graphql } from 'gatsby'
import DropDownIcon from '../../images/NavbarDropDown/tile.svg'
// import Img from 'gatsby-image'
import Logo from '../../images/NavbarDropDown/logo_navbardropdown.png'

const AccountIcon = styled(AccountCircleIcon)`
  width: 1.9rem;
  height: 1.9rem;
  margin-top: 0.188rem;
  /* margin-left: -3.125rem; */
  cursor: pointer;
  && {
    color: #4f4f4f;
    background-color: #fff;
  }
`

const BigContainer = styled(Container)`
  max-width: 163rem;
  width: 100%;
  height: 5rem;
  padding: 0;
  display: flex;
  padding: 0;
  justify-content: space-between;
  align-items: center;
`

const BigNotificationIcon = styled(NotificationsNoneIcon)`
    opacity: 0.9;
    /* width: 32px;
    height: 32px; */
    width: 1.7rem;
    height: 1.7rem;
    margin: auto;
    /* padding-right: 10px; */
    /* margin-left: ${props => (props.isManageProd ? '12px' : null)}; */
    /* margin-right: 15px; */
    cursor: pointer;
    && {
        color: #4F4F4F;
        background-color: #fff;
    }
`

const ButtonContainer = styled(Container)`
  width: 8.9rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.369rem 0 1.5rem;
  padding: 0;
`

const CustomButton = styled(Button)`
  color: #828282;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1rem;
  border-radius: 10px;
`

const CustomMenuItem = styled(MenuItem)`
  font-family: Kanit;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.1rem;
`

const CustomNavbar = styled(AppBar)`
  background-color: #fff;
  /* opacity: 0.9; */
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  /* max-width: 136.6rem; */
  width: 100%;
  height: 6.9rem;
`

const CustomToolbar = styled(Toolbar)`
  width: 100%;
  /* max-width: 136.6rem; */
  height: 6.9rem;
  padding-left: 5rem;
  padding-right: 3.8rem;

  opacity: 0.9;
  /* margin: auto; */
  /* box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1); */
`

const HeaderText = styled.div`
  color: #727272;
  font-family: Kanit;
  font-size: 2.4rem;
  line-height: 3rem;
  /* padding-left: 1.19rem; */
  display: flex;
  /* align-items: center;
  justify-content: center; */
  margin-left: 1.9rem;
`
const SellerLink = styled(Link)`
  cursor: pointer;
  margin: auto auto auto 0;
  color: #727272;
  text-decoration: none;
`

const LeftContainer = styled(Container)`
  /* width: 15rem; */
  width: 50%;
  max-width: 155px;
  /* height: 4rem; */
  padding: 0;
  margin: 0;
  display: flex;
  /* direction: row; */
  /* align-items: center; */
  justify-content: flex-start;
`

// const LogoContainer = styled(Link)`
//   /* background-color: #f2f2f2; */
//   /* width: 10rem;
//   height: 3.5rem;
//   margin: 0;
//   padding: 0 0;
//   display: flex;
//   align-items: center; */
//   cursor: pointer;
// `

const LogoLink = styled(Link)`
  cursor: pointer;
  margin: auto 0;
`

const NotiContainer = styled(Container)`
  /* background-color: #ffffff; */
  width: 1.7rem;
  height: 1.7rem;
  margin: 0 0;
  padding: 0 0;
  display: flex;
  align-items: center;
`

const RightContainer = styled(Container)`
  /* width: 22rem; */
  width: 50%;
  /* width: 1100rem; */
  height: 4rem;
  padding: 0 0;
  margin: 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const SmallNotificationIcon = styled(NotificationsNoneIcon)`
  opacity: 0.9;
  width: 1.7rem;
  height: 1.7rem;
  /* margin-left: 0.4rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  && {
    color: #4f4f4f;
    background-color: #fff;
  }
`

const StyledBadge = withStyles(theme => ({
  badge: {
    right: 4,
    top: 12,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 0.25rem',
    backgroundColor: '#EB5757',
    fontFamily: 'Kanit',
    fontWeight: '400',
    fontSize: '0.688rem',
    lineHeight: '1rem',
    color: '#FFFFFF',
  },
}))(Badge)

const StyledIconButton = styled(IconButton)`
  margin-right: 0.7rem;
`

const StyledImage = styled.img`
  width: 1.375rem;
  height: 1.375rem;
  padding: 0 0;
`

const Text = styled.div`
  color: #4f4f4f;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 1rem;
  max-width: 5.938rem;
  padding-left: 0.313rem;
  padding-right: 3rem;
  cursor: default;
`

function HideOnScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}

export default function HideAppBar(props) {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 142, height: 53) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [username] = useState('poonnn')
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {
        <>
          <CssBaseline />
          <HideOnScroll {...props}>
            <CustomNavbar>
              <CustomToolbar>
                <BigContainer>
                  <LeftContainer>
                    <LogoLink to="/home">
                      {/* <Img fixed={data.logo.childImageSharp.fixed} alt="" /> */}
                      <img src={Logo} width="55" height="55" />
                    </LogoLink>
                    <HeaderText>
                      <SellerLink to="/sell">SELLER</SellerLink>
                    </HeaderText>
                  </LeftContainer>

                  <RightContainer>
                    <AccountIcon />
                    <Text>{username}</Text>

                    {props.isManageProd ? (
                      <>
                        <StyledIconButton
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <StyledImage src={DropDownIcon} />
                        </StyledIconButton>

                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <CustomMenuItem onClick={handleClose}>
                            {' '}
                            จัดการสินค้า{' '}
                          </CustomMenuItem>
                          <CustomMenuItem onClick={handleClose}>
                            ตรวจสอบรายการสั่งซื้อ
                          </CustomMenuItem>
                          <CustomMenuItem onClick={handleClose}>
                            ประวัติการขาย
                          </CustomMenuItem>
                          <CustomMenuItem onClick={handleClose}>
                            จัดการสมาชิกร้านค้า
                          </CustomMenuItem>
                          <CustomMenuItem onClick={handleClose}>
                            แก้ไขข้อมูลร้านค้า
                          </CustomMenuItem>
                        </Menu>
                      </>
                    ) : null}

                    {props.notification === 0 ? (
                      <>
                        <NotiContainer>
                          <SmallNotificationIcon />
                        </NotiContainer>
                      </>
                    ) : (
                      <>
                        <NotiContainer>
                          <StyledBadge badgeContent={props.notification}>
                            <BigNotificationIcon />
                          </StyledBadge>
                        </NotiContainer>
                      </>
                    )}

                    <ButtonContainer>
                      <CustomButton variant="outlined">
                        แนะนำผู้ขาย
                      </CustomButton>
                    </ButtonContainer>
                  </RightContainer>
                </BigContainer>
              </CustomToolbar>
            </CustomNavbar>
          </HideOnScroll>

          <CustomToolbar />
          {/* <Container>
            {props.content}
        </Container> */}
        </>
      }
    </>
  )
}
