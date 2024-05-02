import Link from "next/link";
import { IoMdSend } from "react-icons/io";
import { URL_PATHS } from "./_utils/constants";

const NotFound = async () => {
    return (
        <div className="bg-gray-100 px-2 text-center">
            <div className="h-screen flex flex-col justify-center items-center">
                <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
                <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
                <div className="animate-bounce">
                    <div className="mx-auto h-16 w-16 text-red-500">
                        <IoMdSend size={"100%"} style={{ transform: "rotate(-90deg)" }} />
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Let's get you back{" "}
                    <Link href={URL_PATHS.HOME.path} className="text-blue-500">
                        home
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default NotFound;
