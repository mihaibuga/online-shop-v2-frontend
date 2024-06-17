import React from "react";

type Props = {};

const GeneralSettingsPage = (props: Props) => {
    return (
        <div>
            <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
                General Settings
            </h2>
            <div>
                <label>Site Title</label>
                <br />
                <input type="text" />
            </div>
            <div>
                <label>Administration Email Address</label>
                <br />
                <input type="text" />
            </div>

            <button type="submit">Save Changes</button>
        </div>
    );
};

export default GeneralSettingsPage;
