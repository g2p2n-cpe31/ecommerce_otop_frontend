import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import styled from 'styled-components'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Button from '@material-ui/core/Button';
// import Badge from '@material-ui/core/Badge';

const AccountIcon = styled(AccountCircleIcon)`
    width: 19px;
    height: 19px;
    margin-top: 3px;
    cursor: pointer;   
    && {
        color: #4F4F4F;
        background-color: #fff;
    }
`

// const CustomBadge = styled(Badge)`
//     color: #FFFFFF;
//     background-color: #EB5757;
//     font-family: Kanit;
//     font-weight: 300;
//     font-size: 11px;
//     line-height: 16px;
//     display: flex;
//     align-items: center;
//     text-align: center;
// `

const CustomButton = styled(Button)`
    color: #828282;
    font-family: Kanit;
    font-weight: 300;
    font-size: 11px;
    line-height: 16px;
    border-radius: 10px;
    box-sizing: border-box;
`

const CustomNavbar = styled(AppBar)`
    height: 69px;
    color: black;
    background-color: #fff;
    opacity: 0.9;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`

const CustomToolbar = styled(Toolbar)`
    height: 69px;
    padding: 0 21px;
    background: #FFFFFF;
    opacity: 0.9;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`

const HeaderText = styled.div`
    color: #727272;
    font-family: Kanit;
    font-size: 24px;
    line-height: 36px;
    padding-left: 19px;
    padding-right: 900px;
    display: flex;
    align-items: center;
`

const LogoContainer = styled(Container)`
    background-color: #F2F2F2;
    width: 142px;
    height: 53px;
    margin: 0;
    padding-left: -12px;
    display: flex;
    align-items: center;
`

const NotificationIcon = styled(NotificationsNoneIcon)`
    opacity: 0.9;
    width: 19px;
    height: 19px;
    margin-right: 21px;
    cursor: pointer;
    && {
        color: #4F4F4F;
        background-color: #fff;
    }

`

const Text = styled.div`
    color: #4F4F4F;
    font-family: Kanit;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    max-width: 95px;
    padding-left: 5px;
    padding-right: 43px;
    cursor: default;   
`

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
    const [username] = useState('poonnn');
    
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <CustomNavbar>
          <CustomToolbar>

            <LogoContainer />
            <HeaderText>SELLER</HeaderText>
            <AccountIcon />
            <Text>{username}</Text>
            {/* <CustomBadge badgeContent={17}> */}
                <NotificationIcon />
            {/* </CustomBadge> */}
            <CustomButton variant="outlined">
                แนะนำผู้ขาย
            </CustomButton>

          </CustomToolbar>
          
        </CustomNavbar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}