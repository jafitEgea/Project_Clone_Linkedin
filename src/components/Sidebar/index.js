import React from 'react'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TurnedInRoundedIcon from '@mui/icons-material/TurnedInRounded';
import "./styles.css"
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

export const Sidebar = () => {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
    )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
        alt="" />
      
        <PersonRoundedIcon className='sidebar__avatar' />
      
        <h3>Jafit Egea</h3>
        <h4>admin123@email.com</h4>
      
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
            <TurnedInRoundedIcon className='sidebar__icons'/>
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
