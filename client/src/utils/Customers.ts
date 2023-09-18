import axios from 'axios'
import xlsx, { IJsonSheet } from 'json-as-xlsx'
import { faker } from '@faker-js/faker'

export type Customer = {
    id?: number
    first_name: string
    last_name: string
    email: string
    gender: string
    date_of_birth: string
    country: string
}

export const getAllCustomers = async (): Promise<Customer[]> => {
    const res = await axios.get('http://localhost:3000/customers')
    return res.data
}
export const createNewCustomer = async (
    newCustomer: Customer
): Promise<void> => {
    await axios.post('http://localhost:3000/customers', newCustomer)
}
export const updateCustomer = async (customer: Customer): Promise<void> => {
    await axios.patch(
        `http://localhost:3000/customers/${customer.id}`,
        customer
    )
}
export const deleteCustomer = async (customerId: number): Promise<void> => {
    await axios.delete(`http://localhost:3000/customers/${customerId}`)
}

export const calcAge = (date: string): number => {
    const age = new Date().getTime() - new Date(date).getTime()
    return Math.floor(age / (365 * 24 * 60 * 60 * 1000))
}

export const createFakeCustomer = (): Customer => {
    const gender = faker.person.sex()
    const first_name = faker.person.firstName(gender as 'male' | 'female')
    const last_name = faker.person.lastName()
    return {
        first_name,
        last_name,
        email: faker.internet.email({
            firstName: first_name,
            lastName: last_name,
        }),
        gender: gender[0].toUpperCase(),
        date_of_birth: faker.date.birthdate().toISOString(),
        country: faker.location.country(),
    }
}

export const downloadExcel = (data: Customer[]) => {
    const sheets: IJsonSheet[] = [
        {
            sheet: 'customers',
            columns: [
                { label: 'ID', value: 'id' },
                { label: 'First Name', value: 'first_name' },
                { label: 'Last Name', value: 'last_name' },
                { label: 'Email', value: 'email' },
                { label: 'Gender', value: 'gender' },
                {
                    label: 'Date of Birth',
                    value: (row) =>
                        new Date(
                            row.date_of_birth as string
                        ).toLocaleDateString(),
                },
                {
                    label: 'Age',
                    value: (row) => calcAge(row.data_of_birth as string),
                },
                { label: 'Country', value: 'country' },
            ],
            content: data,
        },
    ]
    const settings = {
        fileName: 'Customer Data',
    }
    xlsx(sheets, settings)
}
