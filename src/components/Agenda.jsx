import React from 'react'
import { useState } from 'react'
import Contacto from './Contacto'
import '../Agenda.css'

const Agenda = ({datos}) => {
    const [contactos, setContactos] = useState(datos)
    const cambiar = (id) =>{
        setContactos(contactos.map(c => c.id === id ? {...c, favorito: !c.favorito}: c))
    }
    const fav = contactos.filter(c => c.favorito).sort((a,b) => a.nombre.localeCompare(b.nombre))
    const resto = contactos.filter(c => !c.favorito).sort((a,b) => a.nombre.localeCompare(b.nombre))
  return (
    <div className='agenda'>
      {fav.map(c =>
        
          <Contacto key={c.id} {...c} cambiar={cambiar}/>

      )}
      {resto.map(c =>
        
        <Contacto key={c.id} {...c} cambiar={cambiar}/>

    )}
    </div>
  )
}

export default Agenda
