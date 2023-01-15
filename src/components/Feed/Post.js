import React from 'react'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { InputIcon } from './InputIcon';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';


export const Post = ({name, description, message, photoURL, images}) => {
  return (
    <div className="post">
        <div className="post__header">
            <PersonRoundedIcon src={photoURL}/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
            {images ? <img src={images} /> : ''}
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
}
