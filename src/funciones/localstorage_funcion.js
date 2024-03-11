import { sweetAlertDenied } from './sweetAlert_denied'
import { sweetAlertRestart } from './sweetAlert_restart'

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
        sweetAlertDenied()
        setTimeout(() => {
            window.location.reload()
        }, 5000)
    }
}

export function reiniciar_local_storage() {
    let capital_localstorage = localStorage.getItem('dinero_total');
    localStorage.removeItem("dinero_total");
    let arrayToLocalStorage = [];
    arrayToLocalStorage.push(0)
    localStorage.setItem('dinero_total', JSON.stringify(arrayToLocalStorage))
    sweetAlertRestart()
    localStorage.setItem('last_movement', 'No hay movimientos previos')
}

