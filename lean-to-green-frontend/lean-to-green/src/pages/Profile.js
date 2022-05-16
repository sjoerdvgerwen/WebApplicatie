import React from "react";
import ProfileSettings from "../components/ProfileSettings/ProfileSettings";

const Profile = ({ name }) => {

    return (
        <div>
            {name ? 'Welcome back :' + name : 'You are not logged in'}
            <ProfileSettings />
        </div>
    );
};


export default Profile;