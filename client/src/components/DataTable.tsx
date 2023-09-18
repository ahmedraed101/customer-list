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
