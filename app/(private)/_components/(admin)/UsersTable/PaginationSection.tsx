import { getPaginationItems } from "@/app/(private)/_helpers/PaginationLogic";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IProps {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    isNextEnabled: boolean;
    isPrevEnabled: boolean;
    maxPagesToDisplay: number;
}

const PaginationSection = ({
    currentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    onPageChange,
    isNextEnabled,
    isPrevEnabled,
    maxPagesToDisplay,
}: IProps) => {
    if (totalPages === 1) return null;

    const pages = getPaginationItems(currentPage, totalPages, maxPagesToDisplay);

    return (
        <div className="w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="w-full flex-column space-y-4 sm:space-y-0 sm:flex sm:flex-1 sm:items-center justify-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span>-
                        <span className="font-medium">
                            {currentPage * itemsPerPage > totalItems ? totalItems : currentPage * itemsPerPage}
                        </span>{" "}
                        of <span className="font-medium">{totalItems}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex space-x-2 rounded-md shadow-sm" aria-label="Pagination">
                        {currentPage >= 3 && (
                            <button
                                className={`relative inline-flex items-center rounded-md px-2 py-2 text-gray-500 ring-1 ring-inset ring-gray-300 ${
                                    currentPage !== 1 ? "hover:bg-gray-50 " : "cursor-not-allowed opacity-50 "
                                }focus:z-20 focus:outline-offset-0`}
                                disabled={currentPage === 1}
                                onClick={() => {
                                    if (currentPage > 1) onPageChange(1);
                                }}
                            >
                                First
                            </button>
                        )}
                        <div className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <button
                                className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                                    isPrevEnabled ? "hover:bg-gray-50 " : "cursor-not-allowed opacity-50 "
                                }focus:z-20 focus:outline-offset-0`}
                                disabled={isPrevEnabled === false}
                                onClick={() => {
                                    if (isPrevEnabled) onPageChange(currentPage - 1);
                                }}
                            >
                                <span className="sr-only">Previous</span>
                                <IoIosArrowBack className="w-2.5 h-2.5" />
                            </button>

                            {pages.map((page) => (
                                <a
                                    key={page}
                                    className={`cursor-pointer duration-300 relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                                        page === currentPage ? "z-10 bg-blue-600 " : ""
                                    }${
                                        page === currentPage ? "text-white" : "text-gray-900"
                                    } ring-1 ring-inset ring-gray-300 ${
                                        page === currentPage ? "hover:bg-blue-700" : "hover:bg-gray-100"
                                    } focus:z-20 focus:outline-offset-0${
                                        page === currentPage
                                            ? " focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            : ""
                                    }`}
                                    onClick={() => {
                                        if (!isNaN(page)) onPageChange(page);
                                    }}
                                >
                                    {!isNaN(page) ? page : "..."}
                                </a>
                            ))}

                            <button
                                className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 ${
                                    isNextEnabled ? "hover:bg-gray-50 " : "cursor-not-allowed opacity-50 "
                                }focus:z-20 focus:outline-offset-0`}
                                disabled={isNextEnabled === false}
                                onClick={() => {
                                    if (isNextEnabled) onPageChange(currentPage + 1);
                                }}
                            >
                                <span className="sr-only">Next</span>
                                <IoIosArrowForward className="w-2.5 h-2.5" />
                            </button>
                        </div>
                        {currentPage <= totalPages && totalPages >= 5 && (
                            <button
                                className={`relative inline-flex items-center rounded-md px-2 py-2 text-gray-500 ring-1 ring-inset ring-gray-300 ${
                                    currentPage < totalPages ? "hover:bg-gray-50 " : "cursor-not-allowed opacity-50 "
                                }focus:z-20 focus:outline-offset-0`}
                                disabled={currentPage === totalPages}
                                onClick={() => {
                                    if (currentPage < totalPages) onPageChange(totalPages);
                                }}
                            >
                                Last
                            </button>
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PaginationSection;
