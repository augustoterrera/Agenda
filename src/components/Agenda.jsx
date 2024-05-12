// Agenda.jsx
import React, { useState } from 'react'
import Contacto from './Contacto'
import '../Agenda.css'
import Formulario from './Formulario'

const Agenda = ({ datos }) => {
  const [contactos, setContactos] = useState(datos)

  const getDatos = (usuario) => {
    setContactos(contactos => [...contactos, { ...usuario, id: contactos.length + 1 }])
  }

  const cambiar = (id) => {
    setContactos(contactos.map(c => c.id === id ? { ...c, favorito: !c.favorito } : c))
  }

  const eliminar = (id) => {
    setContactos(contactos.filter(c => c.id !== id))
  }

  const fav = contactos.filter(c => c.favorito).sort((a, b) => a.nombre.localeCompare(b.nombre))
  const resto = contactos.filter(c => !c.favorito).sort((a, b) => a.nombre.localeCompare(b.nombre))

  return (
    <>
      <Formulario getDatos={getDatos} />
      <div className='agenda'>
        {fav.map(c =>
          <Contacto key={c.id} {...c} cambiar={cambiar} eliminar={eliminar} />
        )}
        {resto.map(c =>
          <Contacto key={c.id} {...c} cambiar={cambiar} eliminar={eliminar} />
        )}
      </div>
    </>
  )
}

export default Agenda
