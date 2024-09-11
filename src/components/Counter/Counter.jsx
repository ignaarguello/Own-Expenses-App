import React from 'react'
import { useEffect, useState } from 'react'
import './Counter.css'

export default function Counter() {
  let capital_localstorage = JSON.parse(localStorage.getItem('dinero_total'));
  let [valorCounter, setValorCounter] = useState(0)

  useEffect(() => {
    if (capital_localstorage) {
      let resultadoReduce = capital_localstorage.reduce((acc, valor) => acc + Number(valor), 0);
      let resultadoFormateado = resultadoReduce.toLocaleString();
      setValorCounter(resultadoFormateado)
    }
  }, [])

  return (
    <div id='contenedor-general-counter'>
      <h4 id='texto-counter'>${valorCounter}</h4>
    </div>
  )
}
