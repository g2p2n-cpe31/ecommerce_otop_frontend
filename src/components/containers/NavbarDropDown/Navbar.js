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
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import DropDownIcon from './tile.svg';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';


const AccountIcon = styled(AccountCircleIcon)`
    width: 1.1875rem;
    height: 1.1875rem;
    margin-top: 0.188rem;
    /* margin-left: -3.125rem; */
    cursor: pointer;   
    && {
        color: #4F4F4F;
        background-color: #fff;
    }
`

const BigContainer = styled(Container)`
    max-width: 136.6rem;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const BigNotificationIcon = styled(NotificationsNoneIcon)`
    opacity: 0.9;
    /* width: 32px;
    height: 32px; */
    width: 2.3rem;
    height: 2.3rem;
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
    width: 6rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.369rem 0 1.5rem;
    padding: 0 0;
`

const CustomButton = styled(Button)`
    color: #828282;
    font-family: Kanit;
    font-weight: 300;
    font-size: 0.688rem;
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
    opacity: 0.9;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    max-width: 136.6rem;
    width: 100%;
    height: 5rem;
    padding: 0 0;
`

const CustomToolbar = styled(Toolbar)`
    max-width: 136.6rem;
    width: 100%;
    height: 6rem;
    padding: 0 0;
    background: #FFFFFF;
    opacity: 0.9;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
`

const HeaderText = styled.div`
    color: #727272;
    font-family: Kanit;
    font-size: 1.5rem;
    line-height: 3rem;
    padding-left: 1.19rem;
    display: flex;
    align-items: center;
`

const LeftContainer = styled(Container)`
    width: 15rem;
    height: 4rem;
    padding: 0 0;
    margin: 0 0;
    display: flex;
    direction: row;
    align-items: center;
    justify-content: flex-start;
`

const LogoContainer = styled(Container)`
    background-color: #F2F2F2;
    width: 10rem;
    height: 3.5rem;
    margin: 0;
    padding: 0 0;
    /* padding-left: -12px; */
    display: flex;
    align-items: center;
    cursor: pointer;
`

const NotiContainer = styled(Container)`
    background-color: #FFFFFF;
    width: 1.688rem;
    height: 1.688rem;
    margin: 0 0;
    padding: 0 0;
    display: flex;
    align-items: center;
`

const RightContainer = styled(Container)`
    width: 22rem;
    height: 4rem;
    padding: 0 0;
    margin: 0 0;
    display: flex;
    direction: row;
    align-items: center;
    justify-content: flex-end;
`

const SmallNotificationIcon = styled(NotificationsNoneIcon)`
    opacity: 0.9;
    width: 1.5rem;
    height: 1.5rem;
    /* margin-left: 0.4rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    && {
        color: #4F4F4F;
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
  }))(Badge);

const StyledIconButton = styled(IconButton)`
    margin-right: 0.7rem;
`  

const StyledImage = styled.img`
    width: 1.375rem;
    height: 1.375rem;
    padding: 0 0;
`

const Text = styled.div`
    color: #4F4F4F;
    font-family: Kanit;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 1rem;
    max-width: 5.938rem;
    padding-left: 0.313rem;
    padding-right: 3rem;
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
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };    

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
                        <LogoContainer />
                        <HeaderText>SELLER</HeaderText>
                    </LeftContainer>

                    <RightContainer>
                        <AccountIcon />
                        <Text>{username}</Text>

                        {
                            props.isManageProd? (
                                <>
                                    <StyledIconButton 
                                    aria-controls="simple-menu" 
                                    aria-haspopup="true" 
                                    onClick={handleClick}
                                    >
                                    <StyledImage src={DropDownIcon}/>
                                    
                                    </StyledIconButton>

                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <CustomMenuItem 
                                            onClick={handleClose}
                                        > จัดการสินค้า </CustomMenuItem>
                                        <CustomMenuItem 
                                            onClick={handleClose}
                                        >ตรวจสอบรายการสั่งซื้อ</CustomMenuItem>
                                        <CustomMenuItem 
                                            onClick={handleClose}
                                        >ประวัติการขาย</CustomMenuItem>
                                        <CustomMenuItem 
                                            onClick={handleClose}
                                        >จัดการสมาชิกร้านค้า</CustomMenuItem>
                                        <CustomMenuItem 
                                            onClick={handleClose}
                                        >แก้ไขข้อมูลร้านค้า</CustomMenuItem>
                                    </Menu>
                                </>
                            ) : null
                        }

                        {
                            props.notification === 0? 
                                <>
                                    <NotiContainer>
                                        <SmallNotificationIcon/> 
                                    </NotiContainer>
                                </>
                                : 
                                <>
                                    <NotiContainer>
                                        <StyledBadge 
                                            badgeContent={props.notification} 
                                        >
                                            <BigNotificationIcon aria-label="4 pending messages" />
                                        </StyledBadge>
                                    </NotiContainer>
                                </>

                        }

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
        </>
     }
    </>
  );
}