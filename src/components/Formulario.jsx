import { useState } from "react"

const Formulario = ({ getDatos }) => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  //La funcion cargar lo que hace es evitar que el form se actulice y le pasa como objeto
  //los datos obtenidos de los inputs a la funcion que le paso por props
  const cargar = (e) => {
    e.preventDefault()
    // Validar que los campos no estén vacíos
    if (nombre.trim() === '' || apellido.trim() === '' || telefono.trim() === '') {
      alert('Por favor completa todos los campos.');
      return;
    }
    const nuevosDatos = { nombre, apellido, telefono }
    getDatos(nuevosDatos)

    // Limpiar los campos después de agregar los datos
    setNombre('');
    setApellido('');
    setTelefono('');
  }
  return (
    <>
      <h1 style={{ textAlign: 'center', border: '1px solid black' }}>Agenda - Agregar / Eliminar Contactos</h1>
      <div className="formularioAdd">
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" value={nombre} onChange={(e) => { setNombre(e.target.value) }} required autoComplete="off" />
            <div id="emailHelp" className="form-text"> </div>
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) =>
              setApellido(e.target.value)} required autoComplete="off" />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Telefono</label>
            <input type="number" className="form-control" id="telefono" value={telefono} onChange={(e) =>
              setTelefono(e.target.value)} required maxLength={15} autoComplete="off" />
          </div>
          <button type="submit" className="btn btn-primary" onClick={cargar}>Agregar</button>
        </form>
      </div>
    </>
  )
}
// Cambios realizados:
/*

Desactivar el autocomplete para un manejo de datos mas eficaz
Agregado Required en los inputs de nombre, apellido y telefono para que no se puedan dejar vacios
Agregado maxLength en el input de telefono para que no se puedan escribir mas de 15 digitos
Añadido estilos mas un H1 para que se vea mejor


*/
export default Formulario