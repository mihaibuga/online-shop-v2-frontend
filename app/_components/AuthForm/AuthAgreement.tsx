import { STORE_NAME, URL_PATHS } from "@/app/_utils/constants";
import Link from "next/link";
import React from "react";

type Props = {};

const AuthAgreement = (props: Props) => {
    return (
        <div className="auth-agreement flex items-center justify-center px-2 md:px-10 py-[30px]">
            <p className="text-sm w-full text-center text-gray-600">
                By continuing, you agree to {STORE_NAME}’s{" "}
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={URL_PATHS.TERMS_OF_SERVICE.path}
                    className="text-blue-700"
                >
                    {URL_PATHS.TERMS_OF_SERVICE.label}
                </Link>{" "}
                and confirm that you have read {STORE_NAME}’s{" "}
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={URL_PATHS.PRIVACY_POLICY.path}
                    className="text-blue-700"
                >
                    {URL_PATHS.PRIVACY_POLICY.label}
                </Link>
                .
            </p>
        </div>
    );
};

export default AuthAgreement;
