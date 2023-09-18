import { Dialog, DialogTitle, Button, MenuItem } from '@mui/material'
import { Customer } from '../utils/Customers'
import WarningIcon from '@mui/icons-material/Warning'
import Popup from './Popup'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCustomer } from '../utils/Customers'

type RowCellActionProps = { row: Customer }
export const RowCellAction = ({ row }: RowCellActionProps) => {
    const [open, setOpen] = useState(false)
    const queryClient = useQueryClient()
    const deleteMutation = useMutation({
        mutationKey: ['customers', 'delete'],
        mutationFn: deleteCustomer,
        onSuccess: () => queryClient.refetchQueries(),
    })
    return (
        <Popup
            inButton={
                <MoreHorizIcon sx={{ color: 'darkcyan' }}></MoreHorizIcon>
            }
        >
            <MenuItem onClick={() => alert('open edit modal')} disabled>
                Edit Customer
            </MenuItem>
            <MenuItem onClick={() => setOpen(true)}>Delete Customer</MenuItem>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle
                    sx={{
                        color: 'tomato',
                        backgroundColor: 'lightblack',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <WarningIcon sx={{ fontSize: '50px', marginRight: 5 }} />
                    <span>
                        Are you Sure you want to remove Customer from Database
                    </span>
                </DialogTitle>
                <Button
                    variant='contained'
                    color='warning'
                    sx={{ fontSize: '20px' }}
                    onClick={() => {
                        deleteMutation.mutate(row.id!)
                        setOpen(false)
                    }}
                >
                    Confirm
                </Button>
            </Dialog>
            <MenuItem
                onClick={() =>
                    navigator.clipboard.writeText(
                        `${row.first_name}, ${row.last_name}`
                    )
                }
            >
                Copy Full Name
            </MenuItem>
            <MenuItem onClick={() => navigator.clipboard.writeText(row.email)}>
                Copy Email
            </MenuItem>
            <MenuItem
                onClick={() => {
                    navigator.clipboard.writeText(
                        JSON.stringify({
                            ...row,
                            date_of_birth: new Date(
                                row.date_of_birth
                            ).toLocaleDateString(),
                        })
                    )
                }}
            >
                Copy Customer object
            </MenuItem>
        </Popup>
    )
}
