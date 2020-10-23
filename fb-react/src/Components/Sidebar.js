import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'


const Sidebar = () => {
    return (
        <div>
            <SidebarRow src="my_avatar.JPG" title="Neeraj"></SidebarRow>
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'></SidebarRow>
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'></SidebarRow>
            <SidebarRow Icon={PeopleIcon} title='Friends'></SidebarRow>
            <SidebarRow Icon={ChatIcon} title="Messenger"></SidebarRow>
            <SidebarRow Icon={StorefrontIcon} title='MarketPlace'></SidebarRow>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'></SidebarRow>
            <SidebarRow Icon={ExpandMoreOutlined} title='More'></SidebarRow>
        </div>
    )
}

export default Sidebar
