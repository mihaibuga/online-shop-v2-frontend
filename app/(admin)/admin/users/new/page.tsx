import React from "react";

type Props = {};

const NewUserPage = (props: Props) => {
    return (
        <div>
            <h1>Add New User</h1>
            <p>Create a brand new user and add them to this site.</p>
            <hr />
            <div>
                <label>Username</label><br />
                <input type="text" />
            </div>
            <div>
                <label>Password</label><br />
                <input type="text" />
            </div>
            <div>
                <label>Email</label><br />
                <input type="text" />
            </div>
            <div>
                <label>Role</label><br />
                <input type="text" />
            </div>

            <div>
                <label>First Name</label><br />
                <input type="text" />
            </div>
            <div>
                <label>Last Name</label><br />
                <input type="text" />
            </div>
            <hr />
            <button type="submit">Add New User</button>
        </div>
    );
};

export default NewUserPage;
