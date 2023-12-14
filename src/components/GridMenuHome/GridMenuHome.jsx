import React from 'react'
import './GridMenuHome.css'

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
                    <MdAddCircleOutline className='icon-menuGridHome' onClick={() => alert('Action more info')} />
                </div>
                <div className="contenedorIconVertical_gridMenuHome">
                    <IoStatsChartSharp className='icon-menuGridHome' onClick={() => alert('Action charts')} />
                </div>
            </div>
            {/* Contenedor Horizontal - Derecho */}
            <div id="contenedor-horizontal-derecho_gridMenuHome">
                <MdOutlineRestartAlt className='icon-menuGridHome icon-restart_menuGridHome' onClick={() => alert('Action reload')} />
            </div>
        </div>
    )
}
