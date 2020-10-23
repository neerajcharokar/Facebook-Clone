import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook logo"></img>
            </div>

            <div className="header_input">
                <SearchIcon></SearchIcon>
                <input placeholder="Search Facebook" type='text'>
                </input>
            </div>
            <div className="header-center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize='large'></HomeIcon>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize='large'></FlagIcon>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize='large'></SubscriptionsOutlinedIcon>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize='large'></StorefrontOutlinedIcon>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize='large'></SupervisedUserCircleIcon>
                </div>
                <div className='header__right'>
                    <div className="header__info">
                        <Avatar></Avatar>
                        <h4>Neeraj </h4>
                    </div>
                    <IconButton>
                        <AddIcon></AddIcon>
                    </IconButton>
                    <IconButton>
                        <ForumIcon></ForumIcon>
                    </IconButton>
                    <IconButton>
                        <NotificationActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Header
