import EditarForm from './EditarForm'
import { useState } from 'react'
import Favorito from './Favorito'
import Eliminar from './Eliminar'


const Contacto = ({id, nombre, apellido, telefono, favorito, cambiar, mDatos, eDatos}) => {
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
        <Eliminar eDatos={eDatos} id={id}/>
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
