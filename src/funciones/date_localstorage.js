export function setDateLastMovement() {
    const date = new Date();
    // Dia
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    // Hora
    const hour = date.getHours()
    const minutes = date.getMinutes()

    const last_movement = `Ultimo Movimiento: ${day}/${month}/${year} - ${hour}:${minutes}`

    localStorage.setItem('last_movement', (last_movement))
}