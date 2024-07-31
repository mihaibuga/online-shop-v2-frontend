import React from "react";

type Props = {
    isLogIn: boolean | undefined;
};

const LogInSignUpButton = ({isLogIn}: Props) => {
    return (
        <button
            type="submit"
            className="w-full py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 hover:bg-blue-200 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-400 text-center disabled:opacity-50 disabled:pointer-events-none shadow-md transition duration-300"
        >
            {isLogIn ? "Log in" : "Sign up"}
        </button>
    );
};

export default LogInSignUpButton;
