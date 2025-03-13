import React, { useState } from 'react'
import { postUsers } from '../services/Llamados'
import '../styles/registro.css'
import { Link } from 'react-router-dom'

function FormularioRegistro() {
  const [name, setName] = useState("")
  const [correo, setCorreo] = useState("")
  const [clave, setClave] = useState("")

  async function guardarInfo() {
    let usuario = {
      nombre: name,
      email: correo,
      pass: clave
    }
    await postUsers(usuario, "usuarios")
  }

  return (
    <div className="container">
      <h1 className="title">Registro De Usuarios</h1>

      <div className="input-container">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          id="name" 
          type="text" 
          onChange={(evento) => setName(evento.target.value)} 
          className="form-input"
        />
      </div>

      <div className="input-container">
        <label htmlFor="correo" className="form-label">Correo</label>
        <input 
          id="correo" 
          type="email" 
          onChange={(evento) => setCorreo(evento.target.value)} 
          className="input"
        />
      </div>

      <div className="input-container">
        <label htmlFor="clave" className="label">Contraseña</label>
        <input 
          id="clave" 
          type="password" 
          onChange={(evento) => setClave(evento.target.value)} 
          className="form-input"
        />
      </div>

      <button onClick={guardarInfo} className="button">Crear usuario</button>
    <Link to="/login" className="login-link">Ya Tienes Cuenta?</Link>
    </div>
  )
}

export default FormularioRegistro
