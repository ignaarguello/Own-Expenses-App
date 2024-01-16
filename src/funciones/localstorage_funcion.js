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

export function restar_capital_localstorage(value) {
    let capital_localstorage = localStorage.getItem('dinero_total');
    let dataFrom_localstorage = JSON.parse(capital_localstorage)
    let data_reduce = dataFrom_localstorage.reduce((acc, val) => acc + Number(val), 0)

    if (data_reduce > 0 && value <= data_reduce) {
        let valor_subtract = data_reduce - value;
        let arrayToLocalStorage = [];
        arrayToLocalStorage.push(String(valor_subtract));
        localStorage.setItem('dinero_total', JSON.stringify(arrayToLocalStorage));
    } else {
        alert('Valor a restar mayor al capital neto o el capital neto es igual o menor a cero. No se puede realizar esta acción.');
    }
}

