import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedinLogo from './images/linkedin.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>
            {/* <h1>This is header</h1> */}
            <div className="header__left">
                <img src={linkedinLogo} alt="[in] Logo"/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>                
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://avatars.githubusercontent.com/u/56752427?v=4" title="me" />
            </div>
        </div>
    )
}

export default Header
