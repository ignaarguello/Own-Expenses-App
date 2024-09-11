import React from 'react'
import './GridMenuHome.css'

//Importacion de la funcion encargada de restar el localstorage
import { reiniciar_local_storage } from '../../funciones/localstorage_funcion';

/* Iconos */
import { MdAddCircleOutline } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOutlineRestartAlt } from "react-icons/md";

export default function GridMenuHome() {
    return (
        <div id='contenedor_gridMenuHome'>
            {/* Contenedor Vertical - Izquierda */}
            <div id="contenedor-vertical-izquierdo_gridMenuHome">
                <div className="contenedorIconVertical_gridMenuHome">
                    <MdAddCircleOutline id='Icon' className='icon-menuGridHome' onClick={() => alert('Action more info')} />
                </div>
                <div className="contenedorIconVertical_gridMenuHome">
                    <IoStatsChartSharp className='icon-menuGridHome' onClick={() => alert('Action charts')} />
                </div>
            </div>
            {/* Contenedor Horizontal - Derecho */}
            <div id="contenedor-horizontal-derecho_gridMenuHome">
                <MdOutlineRestartAlt className='icon-menuGridHome icon-restart_menuGridHome' onClick={reiniciar_local_storage} />
            </div>
        </div>
    )
}
