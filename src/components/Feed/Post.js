import React, { forwardRef } from 'react'
import { InputIcon } from './InputIcon';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { Avatar } from '@mui/material';
import "./styles.css"


const Post = forwardRef(({name, description, message, photoURL, images}, ref) => {
  return (
    <div ref={ref} className="post">
        <div className="post__header">
            <Avatar className='post__profileIcon' src={photoURL}>
                {name[0]}
            </Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
            {images ? <img src={images} alt='post' /> : ''}
        </div>
        <div className="post__bottom">
            <InputIcon 
                Icon={ThumbUpRoundedIcon}
                title='Reaccionar'
                color="#2f4f4f"
            />
            <InputIcon 
                Icon={CommentRoundedIcon}
                title='Comentar'
                color="#2f4f4f"
            />
            <InputIcon 
                Icon={ShareRoundedIcon}
                title='Compartir'
                color="#2f4f4f"
            />
        </div>
    </div>
  )
})

export default Post;