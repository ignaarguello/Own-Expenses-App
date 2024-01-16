import Swal from 'sweetalert2'

export const sweetAlertRestart = () => {
    Swal.fire({
        text: "¿Deseas reiniciar el importe?",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                text: "Exitoso!",
                icon: "success"
            });
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        }
    });
}