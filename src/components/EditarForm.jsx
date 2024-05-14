import { useState } from "react"
import '../editarForm.css'
const EditarForm = ({nombre, apellido, telefono, modificarDatos, onClose, id, favorito}) => {
    const [nuevonombre, setNombre] = useState(nombre)
    const [nuevoapellido, setApellido] = useState(apellido)
    const [nuevotelefono, setTelefono] = useState(telefono)
    const modificar = (e)=>{
        e.preventDefault()
        const contactosEditados = {
            nombre: nuevonombre,
            apellido: nuevoapellido,
            telefono: nuevotelefono,
            favorito: favorito
        }
        modificarDatos(contactosEditados, id)
    }
  return (
    <>
    <div className="modal">
        <div>
    <form action="modal-content">
    <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre</label>
    <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp"  value={nuevonombre} onChange={(e)=>{setNombre(e.target.value)}}/>
    <div id="emailHelp" className="form-text"> </div>
  </div>
  <div className="mb-3">
    <label htmlFor="apellido" className="form-label">Apellido</label>
    <input type="text" className="form-control" id="apellido" value={nuevoapellido} onChange={(e)=>setApellido(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="telefono" className="form-label">Telefono</label>
    <input type="text" className="form-control" id="telefono" value={nuevotelefono} onChange={(e)=>setTelefono(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={modificar}>Modificiar</button>
  <button className="close-btn" onClick={onClose}>Cerrar</button>
    </form>
    </div>
</div>
    </>
  )
}

export default EditarForm