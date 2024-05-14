import { useState } from 'react'
import Contacto from './Contacto'
import '../Agenda.css'
import Formulario from './Formulario'

const Agenda = ({datos}) => {
    const [contactos, setContactos] = useState(datos)
    const getDatos = (usuario)=>{
      //Aqui esta como lo hice primero, es un quilombo
     // const copiaContactos = [...contactos]
    //const id = copiaContactos.length + 1
     // const usuariosconID = {...usuario, id}
     // setContactos([...contactos, usuariosconID])
     //Abajo actualizo el estado con setContactos y le paso todo el objeto primero y despues el nuevo
     //usuario que se carga en el formulario el id lo determino con la logitud de contactos
     setContactos(contactos=>[...contactos, {...usuario, id: contactos.length + 1}])
    }
    const modificarDatos = (contacotosEditados, id)=>{
      setContactos(contactos.map(c=> c.id === id ? {...contacotosEditados} : c))
    }
    const cambiar = (id) =>{
        setContactos(contactos.map(c => c.id === id ? {...c, favorito: !c.favorito}: c))
    }
    const eliminarDatos=(id)=>{
      setContactos(contactos.filter(c=>c.id !== id))
    }
    const fav = contactos.filter(c => c.favorito).sort((a,b) => a.nombre.localeCompare(b.nombre))
    const resto = contactos.filter(c => !c.favorito).sort((a,b) => a.nombre.localeCompare(b.nombre))
  return (
    <>
    <Formulario getDatos={getDatos}/>
    <div className='agenda'>
      {fav.map(c =>
        
          <Contacto 
          key={c.id} 
          {...c} 
          cambiar={cambiar} 
          mDatos={modificarDatos}
          eDatos={eliminarDatos}/>
          
      )}
      {resto.map(c =>
        
        <Contacto 
        key={c.id} 
        {...c} 
        cambiar={cambiar} 
        mDatos={modificarDatos}
        eDatos={eliminarDatos}/>
        
    )}

    </div>
    </>
  )
}

export default Agenda
