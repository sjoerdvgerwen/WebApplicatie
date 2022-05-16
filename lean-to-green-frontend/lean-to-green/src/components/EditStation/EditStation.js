import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const EditStation = (props) => {
    return (
        <Edit title='Edit Station' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='latitude' />
                <TextInput source='longitude' />
                <TextInput source='address' />
                <TextInput source='zipcode' />
                <TextInput source='city' />
                <TextInput source='isActive' />
                <TextInput source='price' />
                <TextInput source='photo' />
            </SimpleForm>
        </Edit>
    )
}

export default EditStation
 