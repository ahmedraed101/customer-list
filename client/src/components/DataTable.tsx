import { Table } from '@mui/material'
import {
    getCoreRowModel,
    useReactTable,
    ColumnDef,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    ColumnFiltersState,
    VisibilityState,
    SortingState,
    RowSelectionState,
} from '@tanstack/react-table'
import DataTableBody from './TableBody'
import TableHeader from './TableHeader'
import TableFilters from './TableFilters'
import Footer from './Footer'
import { useState } from 'react'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

const DataTable = <TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
        {}
    )
    const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
    const table = useReactTable({
        data,
        columns,
        autoResetPageIndex: false,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        onRowSelectionChange: setRowSelection,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        state: {
            sorting,
            rowSelection,
            columnFilters,
            columnVisibility,
        },
        debugTable: true,
        debugHeaders: true,
        debugColumns: false,
    })
    return (
        <div>
            <TableFilters table={table} />
            <Table stickyHeader={true}>
                <DataTableBody table={table} />
                <TableHeader table={table} />
            </Table>
            <Footer table={table} />
        </div>
    )
}

export default DataTable

// return (
//     <div>
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <div
//                 style={{
//                     display: 'felx',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginBottom: 4,
//                 }}
//             >
//                 <TextField
//                     sx={{ minWidth: 280 }}
//                     id='Filter By'
//                     label={`Filter By ${filter}`}
//                     placeholder={`${filter}`}
//                     value={
//                         (table
//                             .getColumn('first_name')
//                             ?.getFilterValue() as string) || ''
//                     }
//                     onChange={(e) => {
//                         table
//                             .getColumn('first_name')
//                             ?.setFilterValue(e.target.value)
//                     }}
//                     size='medium'
//                 ></TextField>
//                 <FormControl
//                     variant='filled'
//                     sx={{ marginBottom: 1, minWidth: 120, marginLeft: 2 }}
//                 >
//                     <InputLabel id={'Filters'}>Filters</InputLabel>
//                     <Select
//                         value={filter}
//                         labelId='Filters'
//                         id='Select Filter'
//                         onChange={(e: SelectChangeEvent) =>
//                             setFilter(e.target.value)
//                         }
//                     >
//                         {table.getHeaderGroups().map((headerGroup) =>
//                             headerGroup.headers.map(
//                                 (header) =>
//                                     !header.isPlaceholder && (
//                                         <MenuItem
//                                             key={header.id}
//                                             value={header.id}
//                                         >
//                                             {flexRender(
//                                                 header.column.columnDef
//                                                     .header,
//                                                 header.getContext()
//                                             )}
//                                         </MenuItem>
//                                     )
//                             )
//                         )}
//                     </Select>
//                 </FormControl>
//             </div>
//         </div>
//         <Table stickyHeader={true}>
//             <TableHead
//                 sx={{
//                     '& th': {
//                         color: 'white',
//                         backgroundColor: 'darkcyan',
//                         fontWeight: 'bold',
//                     },
//                     '& tr': {
//                         backgroundColor: 'darkcyan',
//                     },
//                 }}
//             >
//                 {table.getHeaderGroups().map((headerGroup) => (
//                     <TableRow key={headerGroup.id}>
//                         {headerGroup.headers.map((header) => (
//                             <TableCell key={header.id}>
//                                 {flexRender(
//                                     header.column.columnDef.header,
//                                     header.getContext()
//                                 )}
//                             </TableCell>
//                         ))}
//                     </TableRow>
//                 ))}
//             </TableHead>
//             <TableBody>
//                 {table.getRowModel().rows.map((row) => (
//                     <TableRow key={row.id}>
//                         {row.getVisibleCells().map((cell) => (
//                             <TableCell key={cell.id}>
//                                 {flexRender(
//                                     cell.column.columnDef.cell,
//                                     cell.getContext()
//                                 )}
//                             </TableCell>
//                         ))}
//                     </TableRow>
//                 ))}
//             </TableBody>
//         </Table>
//     </div>
// )
