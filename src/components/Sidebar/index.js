import React, { useState } from 'react'
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { Avatar } from '@mui/material';
import "./styles.css"
import { selectUser, login } from '../../features/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { auth, storage } from '../../firebase';

export const Sidebar = () => {

  const user = useSelector(selectUser);
  //console.log(user)
  const [imgURL, setImgURL] = useState('')
  
  const dispatch = useDispatch()

  const updateEmail = (url) => {
    auth.currentUser.updateProfile({
      displayName: user.name,
      photoURL: url
    }).then(() => {
      dispatch(login({
        email: user.email,
        uid: user.uid,
        name: user.name,
        photoURL: url
      }))
    })
      .catch((error) => {
        console.log(error)
      })
  }

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    const storeRef = storage.ref(`/avatar/${file.name}`).put(file)
    storeRef.on("state_changed",
      (snapchot) => { },
      (error) => { console.log(error) },
      () => {
        storage
          .ref("avatar")
          .child(file.name)
          .getDownloadURL()
          .then((url) => { 
            updateEmail(url) 
          })
      })
  }

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="" />

        <Avatar src={user.photoURL} className='sidebar__avatar'>
          {user.name[0]}
        </Avatar>

        <input type="file" className="files" onChange={handlePhoto} />

        <h3>{user.name}</h3>
        <h4>{user.email}</h4>

        <div className="sidebar__contents">
          <div className="sidebar__cont">
            <p>Contacto</p>
            <p>2</p>
          </div>

          <div className="sidebar__cont">
            <p>
              <a href="/#">
                Acceder a información y <br />
                herramientas exclusivas <br />
                {""} <b>Texto de prueba</b> {""}
              </a>
            </p>
          </div>

          <div className="sidebar__cont">
            <div className="sidebar__marcadores">
              <TurnedInRoundedIcon className='sidebar__icons' />
              <p>Marcapaginas</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="sidebar__bottom">
        <ul>
          <li>
            <p>Grupos</p>
          </li>
          <li>
            <p>Eventos</p>
          </li>
          <li>
            <p>Hastags seguidores</p>
          </li>
        </ul>
        <AddBoxRoundedIcon className='sidebar__box' />
      </div>

      <div className="sidebar__recientes">
        <p>Recientes</p>
        {recentItem("react.js")}
        {recentItem("node.js")}
        {recentItem("Next.js")}
        {recentItem("Angular")}
        {recentItem("Vue")}
        {recentItem("TailwindFramework")}
      </div>

    </div>
  )
}
