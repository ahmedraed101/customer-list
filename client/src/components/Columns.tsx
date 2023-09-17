import { ColumnDef } from '@tanstack/react-table'
import { Customer } from './../utils/Customers'
import { Button, Checkbox, MenuItem } from '@mui/material'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined'
import DownloadingOutlinedIcon from '@mui/icons-material/DownloadingOutlined'
import Popup from './Popup'
import { calcAge, downloadExcel } from './../utils/Customers'
import { RowCellAction } from './RowCellAction'

export const columns: ColumnDef<Customer>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllRowsSelected()}
                onChange={(value) =>
                    table.toggleAllRowsSelected(value.target.checked)
                }
            ></Checkbox>
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onChange={(value) => row.toggleSelected(value.target.checked)}
            ></Checkbox>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    { accessorKey: 'id', header: 'id' },
    {
        header: 'First Name',
        accessorKey: 'first_name',
    },
    { header: 'Last Name', accessorKey: 'last_name' },
    { header: 'Email', accessorKey: 'email' },
    { header: 'Gender', accessorKey: 'gender' },
    { header: 'Country', accessorKey: 'country' },
    {
        id: 'Age',
        accessorKey: 'Age',
        accessorFn: (row) => calcAge(row.date_of_birth as string),
        header: ({ column }) => {
            return (
                <Button
                    sx={{ color: 'white' }}
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === 'asc')
                    }}
                >
                    <SwapVertIcon />
                    {column.id}
                </Button>
            )
        },
    },
    {
        id: 'actions',
        header: ({ table }) => (
            <Popup
                inButton={
                    <MoreHorizIcon sx={{ color: 'white' }}></MoreHorizIcon>
                }
            >
                <MenuItem
                    onClick={() => {
                        downloadExcel(
                            table
                                .getCoreRowModel()
                                .rows.map((row) => row.original)
                        )
                    }}
                >
                    <DownloadForOfflineOutlinedIcon sx={{ marginRight: 3 }} />
                    All Table to Excel
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        downloadExcel(
                            table
                                .getSelectedRowModel()
                                .rows.map((row) => row.original)
                        )
                    }}
                    disabled={!table.getSelectedRowModel().rows.length}
                >
                    <DownloadingOutlinedIcon sx={{ marginRight: 3 }} />
                    Selected Data to Excel
                </MenuItem>
            </Popup>
        ),
        cell: ({ row }) => {
            return <RowCellAction row={row.original} />
        },
        enableSorting: false,
        enableHiding: false,
    },
]
