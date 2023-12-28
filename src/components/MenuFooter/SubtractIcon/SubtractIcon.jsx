import { RiSubtractFill } from "react-icons/ri";

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
import { useRef } from 'react'

// Import del Input de Material UI
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';

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
    // Variable encargada de enviar el nuevo dato de resta al LocalStorage / Creada como un objeto
    const importeRef = useRef()
    const calificacionRef = useRef()


    const datoSubtract_LocalStorage = {
        importe: importeRef,
        calificacion: calificacionRef,
    }




    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            <TextField id="standard-basic" label="$" variant="standard" type="number" ref={importeRef} />
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Calificación"
                                defaultValue=""
                                helperText="Marque la calificación de su gasto"
                                sx={{
                                    width: '100%',
                                }}
                                ref={calificacionRef}
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
                            <RemoveIcon onClick={() => console.log(datoSubtract_LocalStorage)} />
                            {/* Icono Cerrar */}
                            <CloseIcon />
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
