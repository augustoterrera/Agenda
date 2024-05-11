import { useState } from "react"

const Formulario = ({getDatos}) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    //La funcion cargar lo que hace es evitar que el form se actulice y le pasa como objeto
    //los datos obtenidos de los inputs a la funcion que le paso por props
    const cargar = (e) =>{
        e.preventDefault()
        const nuevosDatos = {nombre, apellido, telefono}
        getDatos(nuevosDatos)
    }
  return (
    <>
    <form>
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}/>
    <div id="emailHelp" className="form-text"> </div>
  </div>
  <div className="mb-3">
    <label htmlFor="apellido" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="telefono" className="form-label">Telefono</label>
    <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e)=>setTelefono(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={cargar}>Agregar</button>
</form>
    </>
  )
}

export default Formulario