import React from 'react'
import Favorito from './Favorito'


const Contacto = ({id, nombre, apellido, telefono, favorito, cambiar}) => {
  return (
    <div className='card'>
        <Favorito id={id} favorito={favorito} cambiar={cambiar}/>
      <h1><b>{nombre} {apellido}</b></h1>
      <strong>{telefono}</strong>
    </div>
  )
}

export default Contacto
