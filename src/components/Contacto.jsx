import EditarForm from './EditarForm'
import { useState } from 'react'
import Favorito from './Favorito'


const Contacto = ({id, nombre, apellido, telefono, favorito, cambiar, mDatos}) => {
  const [ventana, setVentana] = useState(false)
  const abrirVentana = () => {
    setVentana(true);
  }

  const cerrarVentana = () => {
    setVentana(false);
  }
  return (
    <div className='card'>
        <Favorito id={id} favorito={favorito} cambiar={cambiar}/>
      <h1><b>{nombre} {apellido}</b></h1>
      <strong>{telefono}</strong>
      <button onClick={abrirVentana}>Editar</button>
      {ventana && <EditarForm 
      key={id} 
      nombre={nombre} 
      apellido={apellido} 
      telefono={telefono} 
      onClose={cerrarVentana} 
      modificarDatos={mDatos} 
      id={id}
      favorito={favorito}/>}
    </div>
  )
}

export default Contacto
