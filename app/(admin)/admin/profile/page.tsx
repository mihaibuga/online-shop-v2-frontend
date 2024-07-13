import React from "react";

type Props = {};

const ProfilePage = (props: Props) => {
    return (
        <div>
            <h1>Profile</h1>
            <hr />
            <h2>Name</h2>
            <div>
                <label>Username</label><br />
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

            <h2>Contact Info</h2>
            <div>
                <label>Email</label><br />
                <input type="text" />
            </div>

            <hr />

            <h2>About Yourself</h2>
            <div>
                <label>Profile Picture</label><br />
                <input type="text" />
            </div>

            <hr />

            <h2>Account Management</h2>
            <div>
                <label>New Password</label><br />
                <input type="text" />
            </div>

            <hr />

            <button type="submit">Update Profile</button>
        </div>
    );
};

export default ProfilePage;
