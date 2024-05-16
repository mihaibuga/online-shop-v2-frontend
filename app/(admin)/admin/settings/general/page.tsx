import React from "react";

type Props = {};

const GeneralSettingsPage = (props: Props) => {
    return (
        <div>
            <h1>General Settings</h1>
            <hr />
            <div>
                <label>Site Title</label><br />
                <input type="text" />
            </div>
            <div>
                <label>Administration Email Address</label><br />
                <input type="text" />
            </div>

            <hr />

            <button type="submit">Save Changes</button>
        </div>
    );
};

export default GeneralSettingsPage;
