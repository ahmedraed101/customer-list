import { Table } from '@tanstack/react-table'
import {
    MenuItem,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
} from '@mui/material'
import Popup from './Popup'

type FilterColumnsProps<TData> = {
    table: Table<TData>
}

const FilterColumns = <TData,>({ table }: FilterColumnsProps<TData>) => {
    return (
        <Popup inButton='COLUMNS'>
            <FormControl component='fieldset'>
                <FormLabel component='legend' sx={{ textAlign: 'center' }}>
                    Select Columns
                </FormLabel>
                <FormGroup aria-label='position'>
                    {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                            return (
                                <MenuItem key={column.id}>
                                    <FormControlLabel
                                        value={column.id}
                                        control={
                                            <Checkbox
                                                checked={column.getIsVisible()}
                                                onChange={(value) => {
                                                    column.toggleVisibility(
                                                        value.target.checked
                                                    )
                                                }}
                                            />
                                        }
                                        label={column.id}
                                        labelPlacement='end'
                                    />
                                </MenuItem>
                            )
                        })}
                </FormGroup>
            </FormControl>
        </Popup>
    )
}

export default FilterColumns
