import { Table, flexRender } from '@tanstack/react-table'
import { TableCell, TableHead, TableRow } from '@mui/material'
type Props<TData> = {
    table: Table<TData>
}

const TableHeader = <TData,>({ table }: Props<TData>) => {
    return (
        <TableHead
            sx={{
                '& th': {
                    color: 'white',
                    backgroundColor: 'darkcyan',
                    fontWeight: 'bold',
                },
                '& tr': {
                    backgroundColor: 'darkcyan',
                },
            }}
        >
            {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <TableCell key={header.id}>
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableHead>
    )
}

export default TableHeader
