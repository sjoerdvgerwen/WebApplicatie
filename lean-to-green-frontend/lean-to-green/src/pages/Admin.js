import React from 'react';
import { Admin, Resource } from 'react-admin';
import UserList from '../components/UserList/UserList';
import simpleRestProvider from 'ra-data-simple-rest';
import CreateStation from '../components/CreateStation/CreateStation';
import StationList from '../components/StationList/StationList';
import EditStation from '../components/EditStation/EditStation';
import ForbiddenAccess from '../components/ForbiddenAccess/ForbiddenAccess'
import CreateUser from '../components/Admin/User/CreateUser';
import EditUser from '../components/Admin/User/EditUser';

function FillAdminData(data) {

    const dataProvider = simpleRestProvider('https://localhost:5001');

    return (
        <div>
            {typeof data.admin !== 'undefined' && <Admin dataProvider={dataProvider}>
                <Resource name="api/hydrogen"
                    list={StationList}
                    create={CreateStation}
                    edit={EditStation} />

                <Resource name="api/User"
                    list={UserList}
                    create={CreateUser}
                    edit={EditUser} />

                <Resource name="api/electric"
                    list={StationList}
                    create={CreateStation}
                    edit={EditStation} />
            </Admin>}
            {typeof data.admin === 'undefined' && <ForbiddenAccess />}
        </div>
    );
}

export default FillAdminData
