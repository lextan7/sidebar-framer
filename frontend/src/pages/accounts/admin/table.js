import React, { useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { useFetch } from '../../../shared/components/Hook/http_hook';
// import { useTable } from '../../../shared/components/Hook/table_hook';

import './main.css';


const Table = props => {
    const {reload} = props;

    // hooks
    const { sendRequest } = useFetch();
    // const tableHook = useTable();


    // ulitities
    const [loggedMessage, setLoggeedMessage] = useState();
    const [isLoading, setLoading] = useState(false)

    // DATA
    const [data, setData] = useState();
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([]);

    const getHandler = async() => {
        try{
            setLoading(true);
            const result = await sendRequest('/g/admin', 'GET');
            setLoading(false);
            if(result && result.error) return setLoggeedMessage({error: result.error});
            setData(result)
        }catch(e){
            setLoading(false);
            console.log(e)
            setLoggeedMessage({error: e.message})
        }
    }

    useEffect(() => {
        getHandler();
    }, [])

    const tableHandler = () => {
        try{
            const column = [
                { header: 'First Name', accessorKey: 'firstName' },
                { header: 'last Name', accessorKey: 'lastName' },
                { header: 'Contact Number', accessorKey: 'contact' },
                { header: 'Email address', accessorKey: 'email' },
                { header: 'Username', accessorKey: 'username', enableEditing: false },
                { header: 'Registration Date', accessorKey: 'dateCreated' },
            ];
            let row = [];
            data.forEach(x => {
                row.push({
                    firstName: x.firstName,
                    lastName: x.lastName,
                    contact: x.contact,
                    email: x.email,
                    username: x.username,
                    dateCreated: x.dateCreated,
                    id: x._id
                })
            })
            setColumns(column)
            setRows(row)

        }catch(e){
            console.log(e)
        }
    }

    useEffect(() => {
        if(!data || data.length === 0) return;
        tableHandler();
    }, [data])


    const editHandler = async(val) => {
        const values = val.values
        try{
            setLoading(true);
            const details = {
                firstName: values.firstName,
                lastName: values.lastName,
                contact: values.contact,
                email: values.email,
                username: values.username
            }
            const result = await sendRequest('/u/admin', 'POST', details);
            setLoading(false);
            if(result && result.error) return setLoggeedMessage({error: result.error});
            getHandler();
        }catch(e){
            setLoading(false);
            setLoggeedMessage({error: e.message})
        }
    }


    return (
        <>
            <MaterialReactTable 
                columns={columns}
                data={rows}
                title='LIST OF ADMIN ACCOUNTS'
                editingMode='modal'
                enableEditing={true}
                onEditingRowSave={editHandler}
                // icons={tableHook}
            />
        
        </>
    )
}

export default Table