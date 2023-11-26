import React from 'react';

const Profile = ({ user }) => {
    return(
        <div className ="profile">
            <>
            <h2> User Profile </h2>
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p>Team: {user.team}</p>
            </>
        </div>
    );
};

export default Profile;