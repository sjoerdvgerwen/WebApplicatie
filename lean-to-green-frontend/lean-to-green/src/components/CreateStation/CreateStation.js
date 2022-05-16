import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const CreateStation = (props) => {
    return (
        <Create title='Create a new station' {...props}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='latitude'/>
                <TextInput source='longitude'/>
                <TextInput source='address'/>
                <TextInput source='zipcode'/>
                <TextInput source='city'/>
                <TextInput source='isActive'/>
                <TextInput source='price'/>
                <TextInput source='photo'/>
            </SimpleForm>
        </Create>
    )
}

export default CreateStation
