import { Table } from '@tanstack/react-table'
import { Button } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardDoubleArrowLefttIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'

type FooterProps<TData> = {
    table: Table<TData>
}
const Footer = <TData,>({ table }: FooterProps<TData>) => {
    return (
        <div
            style={{
                marginTop: 5,
            }}
        >
            <div>
                <Button
                    disabled={!table.getCanPreviousPage()}
                    onClick={() => table.previousPage()}
                    sx={{ color: 'darkcyan' }}
                >
                    <KeyboardDoubleArrowLefttIcon fontSize='large' />
                </Button>
                <Button
                    disabled={!table.getCanNextPage()}
                    onClick={() => table.nextPage()}
                    sx={{ color: 'darkcyan' }}
                >
                    <KeyboardDoubleArrowRightIcon fontSize='large' />
                </Button>
            </div>
            <div
                style={{
                    display: 'flex',
                    fontSize: '16px',
                    color: 'gray',
                    marginLeft: 20,
                }}
            >
                {table.getFilteredSelectedRowModel().rows.length} of{' '}
                {table.getFilteredRowModel().rows.length} row('s) selected
            </div>
        </div>
    )
}

export default Footer
