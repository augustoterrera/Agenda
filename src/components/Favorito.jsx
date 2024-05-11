import React from 'react'
import '../Favorito.css'

const Favorito = ({id, favorito, cambiar}) => {
  return (
    <span onClick={() => cambiar(id)} className='fav'>
      {favorito ? <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i> : <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>}
    </span>
  )
}

export default Favorito
