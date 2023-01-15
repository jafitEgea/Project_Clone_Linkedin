import React from 'react'

export const InputIcon = ({Icon, title, color}) => {
  return (
    <div className='inputIcon'>
        <Icon style={{color: color}} />
        <h3>{title}</h3>
    </div>
  )
}
