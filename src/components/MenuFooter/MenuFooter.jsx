import React from 'react'
import './MenuFooter.css'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

export default function MenuFooter() {
    return (
        <div id='contenedor-general_MenuFooter'>
            <div id='subcontenedor-botones__MenuFooter'>
            <div className="contenedores-botones_MenuFooter">
                <IoMdAdd className='icono-rest-add__MenuFooter' />
            </div>
            <div className="contenedores-botones_MenuFooter">
                <RiSubtractFill className='icono-rest-add__MenuFooter' />
            </div>

            </div>
        </div>
    )
}
