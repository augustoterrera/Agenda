// Contacto.jsx
import React from 'react'
import Favorito from './Favorito'
import Eliminar from './Eliminar'

const Contacto = ({ id, nombre, apellido, telefono, favorito, cambiar, eliminar }) => {
  return (
    <div className='card'>
      <Favorito id={id} favorito={favorito} cambiar={cambiar} />
      <Eliminar id={id} eliminar={eliminar} />
      <h1><b>{nombre} {apellido}</b></h1>
      <strong>{telefono}</strong>
    </div>
  );
}

export default Contacto;
