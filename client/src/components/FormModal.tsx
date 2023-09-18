import { Button, Modal, Box, Fade, Backdrop, Typography } from '@mui/material'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { createFakeCustomer } from '../utils/Customers'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNewCustomer } from './../utils/Customers'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #55e4d8',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
}

const FormModal = () => {
    const [open, setOpen] = useState(false)
    const queryClient = useQueryClient()
    const createMutation = useMutation({
        mutationKey: ['customers', 'post'],
        mutationFn: createNewCustomer,
        onSuccess: () => queryClient.refetchQueries(),
    })
    return (
        <div>
            <Fab
                color='primary'
                aria-label='add'
                sx={{ position: 'fixed', right: '1%', top: '90%' }}
                onClick={() => setOpen(true)}
            >
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                aria-labelledby='Modal-Form'
                aria-describedby='modal-form-description'
                onClose={() => setOpen(false)}
                slots={{ backdrop: Backdrop }}
                closeAfterTransition
                slotProps={{
                    backdrop: { timeout: 500 },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id='Modal-Form' variant='h6' component='h2'>
                            Add New Customer
                        </Typography>
                        <h2>Form</h2>
                        <Button
                            onClick={() => {
                                createMutation.mutate(createFakeCustomer())
                                setOpen(false)
                            }}
                            variant='outlined'
                        >
                            create Fake Customer
                        </Button>
                        <Button
                            onClick={() => setOpen(false)}
                            variant='contained'
                            disabled
                        >
                            Save
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default FormModal
