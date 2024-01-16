export function obtener_data_localstorage(data) {
    
    let localstorage_data = localStorage.getItem('movimientos')

    let dataFrom_localstorage = JSON.parse(localstorage_data)

    dataFrom_localstorage.push(data)

    localStorage.setItem('movimientos', JSON.stringify(dataFrom_localstorage))
}

export function modificar_capital_localstorage(data) {
    let localstorage_data = localStorage.getItem('dinero_total')

    let dataFrom_localstorage = JSON.parse(localstorage_data)

    dataFrom_localstorage.push(data)

    localStorage.setItem('dinero_total', JSON.stringify(dataFrom_localstorage))
}

