// Eliminar.jsx
import React from 'react'
import '../Eliminar.css'

const Eliminar = ({ id, eliminar }) => {
    const handleClick = () => {
        eliminar(id);
    };

    return (
        <span onClick={handleClick} className='elim'>
            <i className="fa-solid fa-trash"></i>
        </span>
    );
}

export default Eliminar;
/*

Agregado Botón Eliminar
Estilos añadidos para un manejo mas eficaz
El botón eliminar consiste de un icono de papelera para eliminar el contacto de la agenda
Un icono de papelera se encuentra ubicado en la esquina inferior izquierda

*/