import './App.css'
import DataTable from './components/DataTable'
import { columns } from './components/Columns'

function App() {
    const data = [
        {
            id: 1,
            first_name: 'Abbey',
            last_name: 'Tibbits',
            email: 'atibbits0@symantec.com',
            gender: 'M',
            date_of_birth: '1987-09-05T14:43:23Z',
            country: 'China',
        },
        {
            id: 2,
            first_name: 'Teddy',
            last_name: 'Geane',
            email: 'tgeane1@ucsd.edu',
            gender: 'F',
            date_of_birth: '1965-11-10T13:07:22Z',
            country: 'Philippines',
        },
        {
            id: 3,
            first_name: 'Rolf',
            last_name: 'Golby',
            email: 'rgolby2@com.com',
            gender: 'M',
            date_of_birth: '2000-04-21T01:53:22Z',
            country: 'Portugal',
        },
        {
            id: 4,
            first_name: 'Riley',
            last_name: 'Landrieu',
            email: 'rlandrieu3@yahoo.co.jp',
            gender: 'M',
            date_of_birth: '2004-09-20T02:56:00Z',
            country: 'Yemen',
        },
        {
            id: 5,
            first_name: 'Milt',
            last_name: 'Dobey',
            email: 'mdobey4@google.cn',
            gender: 'M',
            date_of_birth: '2002-07-24T17:54:05Z',
            country: 'Costa Rica',
        },
        {
            id: 6,
            first_name: 'Stacey',
            last_name: 'Shercliff',
            email: 'sshercliff5@nymag.com',
            gender: 'F',
            date_of_birth: '1995-04-05T18:44:17Z',
            country: 'France',
        },
        {
            id: 7,
            first_name: 'Ikey',
            last_name: 'De Filippi',
            email: 'idefilippi6@tumblr.com',
            gender: 'M',
            date_of_birth: '1996-05-05T02:25:30Z',
            country: 'Ireland',
        },
        {
            id: 8,
            first_name: 'Maurie',
            last_name: 'Housden',
            email: 'mhousden7@statcounter.com',
            gender: 'M',
            date_of_birth: '1964-10-10T12:05:43Z',
            country: 'Thailand',
        },
        {
            id: 9,
            first_name: 'Lilla',
            last_name: 'Claffey',
            email: 'lclaffey8@paginegialle.it',
            gender: 'F',
            date_of_birth: '1991-04-08T02:18:14Z',
            country: 'Jamaica',
        },
        {
            id: 10,
            first_name: 'Lilith',
            last_name: 'Orford',
            email: 'lorford9@wsj.com',
            gender: 'F',
            date_of_birth: '2022-08-31T11:48:21Z',
            country: 'Malaysia',
        },
        {
            id: 11,
            first_name: 'Ginelle',
            last_name: 'Jeanel',
            email: 'gjeanela@webeden.co.uk',
            gender: 'F',
            date_of_birth: '2015-07-15T01:31:54Z',
            country: 'Nigeria',
        },
        {
            id: 12,
            first_name: 'Trueman',
            last_name: 'Gitthouse',
            email: 'tgitthouseb@addtoany.com',
            gender: 'M',
            date_of_birth: '1990-10-31T09:37:09Z',
            country: 'Mexico',
        },
        {
            id: 13,
            first_name: 'Leslie',
            last_name: 'Lecointe',
            email: 'llecointec@army.mil',
            gender: 'M',
            date_of_birth: '2011-07-28T01:01:14Z',
            country: 'Thailand',
        },
        {
            id: 14,
            first_name: 'Orin',
            last_name: 'McHaffy',
            email: 'omchaffyd@facebook.com',
            gender: 'M',
            date_of_birth: '1996-12-12T22:43:57Z',
            country: 'Ethiopia',
        },
        {
            id: 15,
            first_name: 'Dorey',
            last_name: 'Ripley',
            email: 'dripleye@stumbleupon.com',
            gender: 'M',
            date_of_birth: '2002-07-12T08:56:08Z',
            country: 'Chad',
        },
        {
            id: 16,
            first_name: 'Elfrida',
            last_name: 'Pristnor',
            email: 'epristnorf@dedecms.com',
            gender: 'F',
            date_of_birth: '1982-12-29T00:18:33Z',
            country: 'Poland',
        },
        {
            id: 17,
            first_name: 'Nani',
            last_name: 'Halston',
            email: 'nhalstong@fema.gov',
            gender: 'F',
            date_of_birth: '2009-02-14T03:39:31Z',
            country: 'China',
        },
        {
            id: 18,
            first_name: 'Bentlee',
            last_name: 'Fairley',
            email: 'bfairleyh@intel.com',
            gender: 'M',
            date_of_birth: '1978-04-16T13:29:00Z',
            country: 'China',
        },
        {
            id: 19,
            first_name: 'Curt',
            last_name: 'Roseveare',
            email: 'crosevearei@google.com.au',
            gender: 'M',
            date_of_birth: '1975-12-14T03:47:48Z',
            country: 'Poland',
        },
        {
            id: 20,
            first_name: 'Hana',
            last_name: 'Mithon',
            email: 'hmithonj@macromedia.com',
            gender: 'F',
            date_of_birth: '2012-06-24T14:38:26Z',
            country: 'Indonesia',
        },
    ]
    return (
        <>
            <h1
                style={{
                    color: 'black',
                }}
            >
                My Customers List
            </h1>
            <DataTable columns={columns} data={data}></DataTable>
        </>
    )
}

export default App
