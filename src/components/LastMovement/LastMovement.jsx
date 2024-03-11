import React from 'react'
import './LastMovement.css'
import { useEffect, useState } from 'react'

export default function LastMovement() {
    let lastMovement_localStorage = localStorage.getItem('last_movement');
    let [lastMovementState, setMovementState] = useState(lastMovement_localStorage)

    useEffect(() => {
        if (lastMovement_localStorage === null) {
            localStorage.setItem('last_movement', 'No hay movimientos previos.')
            setMovementState(lastMovement_localStorage)
        }
    }, [])


    return (
        <div id='contenedor-lastMovement__Home'>
            <div id='contenedor-titulo__lastMovement'>
                <h2 id='titulo_lastMovement'>{lastMovementState}</h2>
            </div>
        </div>
    )
}
