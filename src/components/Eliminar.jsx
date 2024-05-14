const Eliminar = ({eDatos, id}) => {

  return (
    <>
    <span onClick={()=>eDatos(id)}><i className="fa-solid fa-trash"></i></span>
    </>
  )
}

export default Eliminar