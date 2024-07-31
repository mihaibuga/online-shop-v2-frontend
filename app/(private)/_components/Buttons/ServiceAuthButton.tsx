import React from "react";
import { OverridableTokenClientConfig } from "@react-oauth/google";

type Props = {
    handleLogin: (overrideConfig?: OverridableTokenClientConfig | undefined) => void;
    icon: React.ReactNode;
    serviceName: string;
};

const ServiceAuthButton = ({handleLogin, icon, serviceName}: Props) => {
    return (
        <button
            type="button"
            onClick={() => handleLogin()}
            className="w-full px-4 py-2 border flex gap-2 hover:bg-gray-100 rounded-lg text-slate-700 hover:text-slate-900 shadow-md transition duration-300"
        >
            <div className="left min-w-[30px]">
                {icon}
            </div>
            <div className="right flex w-full justify-center text-md lg:text-lg whitespace-nowrap text-gray-600 font-bold">
                Continue with {serviceName}
            </div>
        </button>
    );
};

export default ServiceAuthButton;
