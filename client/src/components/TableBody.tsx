import { Table, flexRender } from '@tanstack/react-table'
import { TableBody, TableCell, TableRow } from '@mui/material'

type TableBodyProps<TData> = {
    table: Table<TData>
}

const DataTableBody = <TData,>({ table }: TableBodyProps<TData>) => {
    return (
        <TableBody>
            {table.getRowModel().rows.map((row) => (
                <TableRow
                    key={row.id}
                    hover={true}
                    selected={row.getIsSelected()}
                >
                    {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} sx={{ textAlign: 'center' }}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    )
}

export default DataTableBody
