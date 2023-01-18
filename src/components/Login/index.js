import React, { useState } from 'react'
import "./styles.css"
import Button from '@mui/material/Button';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

export const Login = () => {
    const [register, setRegister] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
    }

    const handleRegister = e => {
        e.preventDefault()
    }

    return (
        <>
            {
                register ? <div className="login">
                    <div className="login__container">
                        <div className="login__logo">
                            <WorkRoundedIcon sx={{ fontSize: 60, color: '#9932cc' }} />
                            <h1>EJobs</h1>
                        </div>
                        <div className="login__form">
                            <h2 className='login__sesion'>Iniciar sesión</h2>
                            <p>Te ofrecemos ayuda en tu búsqueda de empleo</p>
                            <form onSubmit={handleSubmit}>
                                <div className="div__input">
                                    <input type="email" placeholder='Correo Electrónico'
                                        value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="div__input">
                                    <input type="password" placeholder='Contraseña'
                                        value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <p>¿Olvidaste tu contraseña?</p>
                                <br />
                                <Button variant='contained' disableElevation
                                    type="submit">Acceder</Button>
                            </form>
                        </div>
                        <p className="login__footer">
                            ¿Eres nuevo? <span onClick={() => setRegister(false)}>Create un perfil</span>
                        </p>
                    </div>
                </div> : <div className="login register">
                    <div className="login__container">
                        <div className="login__logo register">
                            <WorkRoundedIcon sx={{ fontSize: 80, color: '#eee' }} />
                            <h1>EJobs</h1>
                        </div>
                        <div className="login__form register">
                            <h2 className='login__sesion register'>Crea una cuenta</h2>
                            <p>Comienza ahora y ofrece tus servicios o busca el más adecuado para ti.</p>
                            <form onSubmit={handleRegister}>
                                <div className="div__input">
                                    <input type="text" placeholder='Nombre de usuario'
                                        value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="div__input">
                                    <input type="email" placeholder='Correo Electrónico'
                                        value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="div__input">
                                    <input type="password" placeholder='Contraseña'
                                        value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                                <p>Al hacer click en "Registrarse", <span>aceptas los términos y condiciones de uso.</span>
                                </p>
                                <br />
                                <Button variant='contained' disableElevation
                                    type="submit">Registrarse</Button>
                            </form>
                        </div>
                        <p className="login__footer register">
                            ¿Ya tienes una cuenta? <span onClick={() => setRegister(true)}>Inicia sesión</span>
                        </p>
                    </div>
                </div>
            }
        </>
    )
}
