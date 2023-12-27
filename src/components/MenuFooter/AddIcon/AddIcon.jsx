import './AddIcon.css'
import { IoMdAdd } from "react-icons/io";

//Importaciones del modal de Material UI 
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

//Import del Input de Material UI
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 310,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};


export default function AddIcon() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IoMdAdd className='icono-rest-add__MenuFooter' onClick={handleOpen} />
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
                            Ingreso de Importe
                        </Typography>
                        {/* Box del input del Modal */}
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="standard-basic" label="Importe" variant="standard" />
                        </Box>
                    </Box>
                    {/* Box del Input del Modal */}
                </Fade>
            </Modal>
        </>
    )
}
