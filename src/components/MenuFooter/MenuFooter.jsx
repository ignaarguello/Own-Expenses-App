import React from 'react'
import './MenuFooter.css'
import { RiSubtractFill } from "react-icons/ri";

//Importamos los iconos
import AddIcon from './AddIcon/AddIcon';

export default function MenuFooter() {
    return (
        <div id='contenedor-general_MenuFooter'>
            <div id='subcontenedor-botones__MenuFooter'>
                <div className="contenedores-botones_MenuFooter">
                    <AddIcon />
                </div>
                <div className="contenedores-botones_MenuFooter">
                    <RiSubtractFill className='icono-rest-add__MenuFooter' />
                </div>
            </div>
        </div>
    )
}
