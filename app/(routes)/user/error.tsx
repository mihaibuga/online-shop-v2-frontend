"use client";

import { URL_PATHS } from "@/app/(private)/_utils/constants";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="bg-gray-100 px-2 text-center">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-8xl font-extrabold text-red-500">Woops!</h1>
                <p className="text-2xl md:text-4xl font-medium text-gray-800">Something went wrong!</p>
                <p className="text-xl text-gray-800 mt-4">
                    We apologize for the inconvenience. Please try again later.
                </p>

                <button
                    onClick={() => reset()}
                    className="my-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                >
                    Try again
                </button>
                <p>OR</p>
                <Link
                    href={URL_PATHS.HOME.path}
                    className="my-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}
