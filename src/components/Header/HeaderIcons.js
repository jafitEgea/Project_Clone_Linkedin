import React from 'react'
import './styles.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export const HeaderIcons = ({Icon, title, text, avatar}) => {
  return (
    <div className='header__icons'>
        
        {Icon && <Icon className="header__box"/>}
        {avatar && <PersonRoundedIcon className="header__box"/>}
        {title ? <h3>{title}</h3> : <h3 className='header__text'>{text}</h3>}
    </div>
  )
}
