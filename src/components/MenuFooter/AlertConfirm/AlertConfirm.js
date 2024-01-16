import Swal from 'sweetalert2'

const alert_notification = (title, icon, callback, callback2) => {
    Swal.fire({
        text: title,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                text: "Operacion Realizada con Exito",
                icon: "success"
            });
            callback()
            setTimeout(() => {
                window.location.reload();
            }, 3000)
        }
        else {
            callback2()
        }
    });
}

export default alert_notification