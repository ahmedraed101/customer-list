import { useState } from 'react'
import { Table, flexRender } from '@tanstack/react-table'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FilterColumns from './FilterColumns'

type TableFiltersProps<TData> = {
    table: Table<TData>
}

const TableFilters = <TData,>({ table }: TableFiltersProps<TData>) => {
    const [filter, setFilter] = useState('first_name')

    console.log(table)
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    display: 'felx',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 4,
                }}
            >
                <TextField
                    sx={{ minWidth: 300 }}
                    id='Filter By'
                    label={`Filter By ${filter}`}
                    placeholder={`${filter}`}
                    value={
                        (table.getColumn(filter)?.getFilterValue() as string) ||
                        ''
                    }
                    onChange={(e) => {
                        table.getColumn(filter)?.setFilterValue(e.target.value)
                        table.setPageIndex(0)
                    }}
                    size='medium'
                ></TextField>
                <FormControl
                    variant='filled'
                    sx={{ marginBottom: 1, minWidth: 120, marginLeft: 2 }}
                >
                    <InputLabel id={'Filters'}>Filters</InputLabel>
                    <Select
                        value={filter}
                        labelId='Filters'
                        id='Select Filter'
                        onChange={(e: SelectChangeEvent) => {
                            table.getColumn(filter)?.setFilterValue('')
                            setFilter(e.target.value)
                        }}
                    >
                        {table.getHeaderGroups().map((headerGroup) =>
                            headerGroup.headers
                                .filter(
                                    (header) =>
                                        header.id?.toLowerCase() !== 'age' &&
                                        header.id?.toLowerCase() !== 'id'
                                )
                                .map(
                                    (header) =>
                                        !header.isPlaceholder && (
                                            <MenuItem
                                                key={header.id}
                                                value={header.id}
                                            >
                                                {flexRender(
                                                    header.column.columnDef
                                                        .header,
                                                    header.getContext()
                                                )}
                                            </MenuItem>
                                        )
                                )
                        )}
                    </Select>
                </FormControl>
            </div>
            <FilterColumns table={table} />
        </div>
    )
}

export default TableFilters
