import React, {useEffect, useState} from 'react'
import './styles.css'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import { InputIcon } from './InputIcon';
import Post from './Post';
import FlipMove from 'react-flip-move';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/useSlice';
import { storage, db } from '../../firebase'
import firebase from 'firebase/compat/app'

export const Feed = () => {
    const [input, setInput] = useState('');
    const [imgPost, setImgPost] = useState('');
    const [post, setPost] = useState([]);

    const sendPost = e => {
        e.preventDefault();
        
        if(input.length < 1) return alert("Escribe algún comentario a la publicación")

        db.collection('posts').add({
            name: user.name,
            description: user.email,
            mensaje: input,
            photoURL: user.photoURL || '',
            images: imgPost,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })

        setImgPost('')
        setInput('')
    }

    const user = useSelector(selectUser);

    const handlePhoto = e => {
        const file = e.target.files[0]
        const storageRef = storage.ref(`/post/${file.name}`).put(file);
        storageRef.on(
            "state_changed",
            snapchot => {},
            error => {console.log(error)},
            () => {
                storage
                    .ref("post")
                    .child(file.name)
                    .getDownloadURL()
                    .then(url => {
                        setImgPost(url)
                    })
            }
        )
    }

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPost(snapshot.docs.map(doc => (
                    {
                    id: doc.id,
                    data: doc.data()
                    }
                )))
            })
    }, [])

  return (
    <div className='feed'>
        <div className="feed__containerInput">
            <div className="feed_profile_input">
                {user ? <Avatar src={user?.photoURL} 
                className="feed__inputProfileIcon"> {user?.name[0]} </Avatar> : 
                <Avatar className='feed__inputProfileIcon' />}
                
                <div className="feed__input">
                <CreateRoundedIcon className='feed__input__icon'/>
                    <form>
                        <input type="text" placeholder='Escribe una publicacion' 
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                />
                                <button onClick={sendPost} type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="feed__inputIcon">
            {/*Icons*/}
            <InputIcon 
                Icon={InsertPhotoRoundedIcon}
                title="Foto"
                color="#ba55d3"
                />
            <input type="file" className="file" onChange={handlePhoto}/>
            <InputIcon 
                Icon={SmartDisplayRoundedIcon}
                title="Video"
                color="#ba55d3"
                />
            <InputIcon 
                Icon={AttachFileRoundedIcon}
                title="Adjuntar Archivo"
                color="#ba55d3"
                />
            </div>
        </div>
        {/*SEPARACION */}
        <hr className='sepa__line'/>
        {/*POST - PUBLICACION */}
        <FlipMove>
        {
            post.map(({id, data: {name, description, mensaje, photoURL, images}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={mensaje}
                    photoURL={photoURL}
                    images={images}
                />
            ))
        }
        </FlipMove>

        <Post 
            name="Admin User"
            description="admin123@email.com"
            message="lorem ipsum"
            photoURL="https://i.ytimg.com/an_webp/9UGRgDILhOk/mqdefault_6s.webp?du=3000&sqp=CJ7UjJ4G&rs=AOn4CLCpWDFotwFX4lpjdybCj7_hcKVJ3Q"
            images="https://cdn.dribbble.com/users/2069402/screenshots/5574718/gif-4mb.gif"
        />


    </div>
  )
}
