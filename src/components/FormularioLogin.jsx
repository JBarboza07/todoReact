import React, { useState } from 'react';
import { getUsers } from '../services/Llamados';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

function FormularioLogin() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const navigate = useNavigate()

  async function validarUsuario(event) {
    event.preventDefault();
    const datos = await getUsers("usuarios")
    const usuarioValido = datos.find(dato => dato.email === correo && dato.pass === clave)

    if (usuarioValido) {
      navigate("/inicio")
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Iniciar Sesión</h1>

      <div className="div">
        <label htmlFor="correo" className="input-label">Correo</label>
        <input
          type="email"
          id="correo"
          className="input-field"
          onChange={(evento) => setCorreo(evento.target.value)}
        />
      </div>

      <div className="div">
        <label htmlFor="clave" className="input-label">Contraseña</label>
        <input
          type="password"
          id="clave"
          className="evento"
          onChange={(evento) => setClave(evento.target.value)}
        />
      </div>

      <button onClick={validarUsuario} className="login-btn">Iniciar Sesión</button>
    </div>
  );
}

export default FormularioLogin;
