import Swal from 'sweetalert2'

export const sweetAlertDenied = () => {
    Swal.fire({
        text: "Error. El valor a restar es mayor al capital!",
        icon: "error",
    });
}

