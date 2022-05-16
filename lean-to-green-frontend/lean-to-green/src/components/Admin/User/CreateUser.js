import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const CreateUser = (props) => {
    return (
        <Create title='Create a new user' {...props}>
            <SimpleForm>
                <TextInput source='username' />
                <TextInput source='email' />
                <TextInput source='password' />
            </SimpleForm>
        </Create>
    )
}

export default CreateUser


