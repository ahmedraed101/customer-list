import './App.css'
import DataTable from './components/DataTable'
import { columns } from './components/Columns'
import FormModal from './components/FormModal'
import { useQuery } from '@tanstack/react-query'
import { getAllCustomers } from './utils/Customers'

function App() {
    const { isLoading, data, isError } = useQuery({
        queryKey: ['customers'],
        queryFn: getAllCustomers,
    })
    if (isLoading) {
        return <h3>Loading Customers Data ....</h3>
    }
    if (isError) {
        return <h3 style={{ color: 'red' }}>Error Happend</h3>
    }
    return (
        <>
            <div style={{ position: 'relative' }}>
                <h1
                    style={{
                        color: 'black',
                    }}
                >
                    My Customers List
                </h1>
                <DataTable columns={columns} data={data}></DataTable>
                <FormModal></FormModal>
            </div>
        </>
    )
}

export default App
