import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const EditUser = (props) => {
    return (
        <div>
            <Edit title='Edit Station' {...props}>
                <SimpleForm>
                <TextInput disabled source ='id'/>
                <TextInput source='username' />
                <TextInput source='email' />
                <TextInput source='password' />
                </SimpleForm>
            </Edit>
        </div>
    )
}

export default EditUser
