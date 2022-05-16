import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

function UserList(props) {
    return (
        <List {... props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='username'/>
                <TextField source='email'/>
                <TextField source='password'/>
                <EditButton basePath=''/>
                <DeleteButton basePath=''/>
            </Datagrid>
        </List>
    )
}

export default UserList
