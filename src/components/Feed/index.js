import React, {useState} from 'react'
import './styles.css'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import InsertPhotoRoundedIcon from '@mui/icons-material/InsertPhotoRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import { InputIcon } from './InputIcon';
import { Post } from './Post';


export const Feed = () => {
    const [input, setInput] = useState('')

    const sendPost = e => {
        e.preventDefault();

        setInput('')
    }

  return (
    <div className='feed'>
        <div className="feed__containerInput">
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
            <div className="feed__inputIcon">
            {/*Icons*/}
            <InputIcon 
                Icon={InsertPhotoRoundedIcon}
                title="Foto"
                color="#ba55d3"
                />
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
        <Post 
            name="Admin User"
            description="admin123@email.com"
            message="lorem ipsum"
            photoURL="https://i.ytimg.com/an_webp/9UGRgDILhOk/mqdefault_6s.webp?du=3000&sqp=CJ7UjJ4G&rs=AOn4CLCpWDFotwFX4lpjdybCj7_hcKVJ3Q"
            images="https://cdn.dribbble.com/users/2069402/screenshots/5574718/gif-4mb.gif"

        />
        <Post 
            name="Admin User"
            description="admin123@email.com"
            message="lorem ipsum"
            photoURL="https://i.ytimg.com/an_webp/9UGRgDILhOk/mqdefault_6s.webp?du=3000&sqp=CJ7UjJ4G&rs=AOn4CLCpWDFotwFX4lpjdybCj7_hcKVJ3Q"
            images="https://cdn.dribbble.com/users/1124806/screenshots/4871258/ezgif.com-optimize.gif"

        />
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
