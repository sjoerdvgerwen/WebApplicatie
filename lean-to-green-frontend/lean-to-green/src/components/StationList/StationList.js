import React from 'react'
import {List, Datagrid, TextField, EditButton, DeleteButton} from 'react-admin'

function StationList(props) {
    return (
        <List {... props}>
            <Datagrid>
                <TextField source='name'/>
                <TextField source='latitude'/>
                <TextField source='longitude'/>
                <TextField source='address'/>
                <TextField source='zipcode'/>
                <TextField source='city'/>
                <TextField source='isActive'/>
                <TextField source='price'/>
                <TextField source='photo'/>
                <EditButton basePath=''/>
                <DeleteButton basePath=''/>
            </Datagrid>
        </List>
    )
}

export default StationList
