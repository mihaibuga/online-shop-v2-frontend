import React from "react";

import { AiOutlineDelete } from "react-icons/ai";
import { FaSort } from "react-icons/fa6";

import { IUser } from "@/app/_utils/interfaces";
import ProfileImage from "../../(common)/ProfileImage";
import { deleteUser } from "@/app/_services/UserService";
import { useStoredUser } from "@/app/_hooks/useStoredUser";
import { toast } from "react-toastify";

type Props = {
    users: IUser[];
    onUserDelete: (id: string) => void;
};

const UsersTable = ({ users, onUserDelete }: Props) => {
    const user = useStoredUser();

    const handleUserDelete = async (id: string | undefined) => {
        if (id !== undefined && user?.token) {
            const deletionResult = await deleteUser(id, user.token);

            if (deletionResult.status && deletionResult.status === 204) {
                onUserDelete(id);
            }
        } else {
            toast.warning("There is a problem deleting the user!");
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/* Select Checkbox */}
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        {/* Username */}
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Username
                                <a href="#">
                                    <FaSort size={"100%"} className="w-2.5 h-2.5 ms-1.5" />
                                </a>
                            </div>
                        </th>
                        {/* Email */}
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Email
                                <a href="#">
                                    <FaSort size={"100%"} className="w-2.5 h-2.5 ms-1.5" />
                                </a>
                            </div>
                        </th>
                        {/* Edit */}
                        <th scope="col" className="px-6 py-3">
                            Edit
                        </th>
                        {/* Delete */}
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users &&
                        users.map((user, index) => (
                            <tr
                                key={index}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                {/* Select Checkbox */}
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input
                                            id="checkbox-table-search-1"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">
                                            checkbox
                                        </label>
                                    </div>
                                </td>
                                {/* Profile + Username + Email */}
                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <ProfileImage imgSrc={user.profileImage} width={6} height={6} />
                                    <div className="ps-3">
                                        <div className="font-normal text-gray-500">{user.userName}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                                <td className="px-6 py-4">
                                    <button
                                        type="button"
                                        className="group flex items-center px-4 py-2 cursor-pointer outline-none text-sm text-black dark:text-white"
                                        onClick={() => {
                                            handleUserDelete(user.id);
                                        }}
                                    >
                                        <div className="w-5 h-5 group-hover:scale-110 text-red-600 dark:text-red-500">
                                            <AiOutlineDelete size={"100%"} />
                                        </div>
                                        <label htmlFor="checkbox-all-search" className="sr-only">
                                            Delete
                                        </label>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;
