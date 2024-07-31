import { handlePagination } from "@/app/(private)/_helpers/PaginationHandler";

import GoToFirstPageButton from "@/app/(private)/_components/Buttons/GoToFirstPageButton";
import GoToPreviousPageButton from "@/app/(private)/_components/Buttons/GoToPreviousPageButton";
import GoToNextPageButton from "@/app/(private)/_components/Buttons/GoToNextPageButton";
import GoToLastPageButton from "@/app/(private)/_components/Buttons/GoToLastPageButton";

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

    const pages = handlePagination(currentPage, totalPages, maxPagesToDisplay);

    const handleFirstButtonClick = () => {
        if (currentPage > 1) onPageChange(1);
    };

    const handlePrevButtonClick = () => {
        if (isPrevEnabled) onPageChange(currentPage - 1);
    };

    const handleNextButtonClick = () => {
        if (isNextEnabled) onPageChange(currentPage + 1);
    };

    const handleLastButtonClick = () => {
        if (currentPage < totalPages) onPageChange(totalPages);
    };

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
                            <GoToFirstPageButton currentPage={currentPage} clickHandler={handleFirstButtonClick} />
                        )}

                        <div className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <GoToPreviousPageButton
                                isPrevEnabled={isPrevEnabled}
                                clickHandler={handlePrevButtonClick}
                            />

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

                            <GoToNextPageButton isNextEnabled={isNextEnabled} clickHandler={handleNextButtonClick} />
                        </div>
                        {currentPage <= totalPages && totalPages >= 5 && (
                            <GoToLastPageButton
                                currentPage={currentPage}
                                totalPages={totalPages}
                                clickHandler={handleLastButtonClick}
                            />
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default PaginationSection;
