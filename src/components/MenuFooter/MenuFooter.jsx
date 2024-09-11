import React from 'react'
import './MenuFooter.css'


//Importamos los iconos
import SubtractIcon from './SubtractIcon/SubtractIcon';
import AddIcon from './AddIcon/AddIcon';

export default function MenuFooter() {
    return (
        <div id='contenedor-general_MenuFooter'>
            <div id='subcontenedor-botones__MenuFooter'>
                <div className="contenedores-botones_MenuFooter">
                    <AddIcon />
                    <h5 className='Texto_Icono_MF'>Add</h5>
                </div>
                <div className="contenedores-botones_MenuFooter">
                    <SubtractIcon />
                    <h5 className='Texto_Icono_MF'>Subtract</h5>
                </div>
            </div>
        </div>
    )
}
