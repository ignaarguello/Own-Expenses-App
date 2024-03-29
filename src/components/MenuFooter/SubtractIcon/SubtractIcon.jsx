import { RiSubtractFill } from "react-icons/ri";

// Iconos de Restar y Cerrar - Modal
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';

// Importaciones del modal de Material UI 
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

// Hooks
import { useState } from 'react'

// Import del Input de Material UI
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

//Import del Alert de SweetAlert
import alert_notification from '../AlertConfirm/AlertConfirm'

// Importacion de funcion encargada de enviar datos a localstorage
import { obtener_data_localstorage, modificar_capital_localstorage, restar_capital_localstorage } from "../../../funciones/localstorage_funcion";

// Variable de estilos del modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

//Variable de estilos de icono de Resta y Close - Modal
const estilos_icono_resta = {
    color: 'red',
    fontSize: '2rem'
}

const estilos_icono_close = {
    fontSize: '2rem'
}

// Variable con los datos para el select
const Items_Select = [
    {
        value: 'Combustible',
        label: 'Combustible',
    },
    {
        value: 'Salidas',
        label: 'Salidas',
    },
    {
        value: 'Mercado',
        label: 'Mercado',
    },
    {
        value: 'Inversiones',
        label: 'Inversiones',
    },
]



export default function SubtractIcon() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Logica del componente
    const [valueImporte, setValueImporte] = useState("")
    const [valueCalificacion, setValueCalificacion] = useState("")

    let dataInputs = {
        importe: valueImporte,
        calificacion: valueCalificacion,
    }

    const callbackReset = () => {
        setValueImporte("")
        setValueCalificacion("")
        obtener_data_localstorage(dataInputs)
        restar_capital_localstorage(dataInputs.importe)

        /* Aca modificar el estado global con redux o context */
    }

    const subtractFunction = () => {
        handleClose()
        alert_notification('¿Confirmar Operación?', 'success', callbackReset, handleOpen)
    }

    return (
        <>
            <RiSubtractFill className='icono-rest-add__MenuFooter' onClick={handleOpen} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 900,
                    },
                }}
            >
                {/* Box SubGeneral del Modal */}
                <Fade in={open}>
                    {/* Box del contenido del Modal */}
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" align='center'>
                            Importe a Restar
                        </Typography>
                        {/* Box del Input del Modal */}
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="standard-basic" label="$" variant="standard" type="number" onChange={(e) => setValueImporte(e.target.value)} value={valueImporte} />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label={valueCalificacion || 'Calificación'}
                                defaultValue=""
                                helperText="Marque la calificación de su gasto"
                                sx={{
                                    width: '100%',
                                }}
                                onBlur={(e) => setValueCalificacion(e.target.value)}
                            >
                                {Items_Select.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                        {/* Box de los Botones */}
                        <Stack direction="row" spacing={8} justifyContent='center' sx={{ mt: '2rem' }}>
                            {/* Icono Subtract */}
                            <RemoveIcon onClick={subtractFunction} style={estilos_icono_resta} />
                            {/* Icono Cerrar */}
                            <CloseIcon style={estilos_icono_close} />
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
