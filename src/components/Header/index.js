import React from 'react'
import { HeaderIcons } from './HeaderIcons'
import WorkIcon from '@mui/icons-material/Work';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './styles.css'

export const Header = () => {
  return (
    <header className='header'>
        <nav className='nav'>
        
            <WorkIcon className='logo'/>

            <div className="header__buscar">
                <SearchRoundedIcon />
                <input type="text" placeholder='Buscar' />
            </div>

            <HeaderIcons Icon={HomeRoundedIcon} title="Home"/>
            <HeaderIcons Icon={SupervisorAccountRoundedIcon} title="Red personal"/>
            <HeaderIcons Icon={BusinessCenterRoundedIcon} title="Empleos"/>
            <HeaderIcons Icon={ForumRoundedIcon} title="Mensajes"/>
            <HeaderIcons Icon={NotificationsRoundedIcon} title="Notificaciones"/>
            <HeaderIcons avatar title="Mi perfil"/>
            <HeaderIcons Icon={AppsRoundedIcon} title="Productos"/>
            <HeaderIcons text="This is a personal project"/>
        </nav>
    </header>
  )
}
