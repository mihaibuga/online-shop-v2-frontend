import { ClipLoader } from "react-spinners";
import "@/app/(private)/_components/Others/Spinner/Spinner.css";

interface Props {
    isLoading?: boolean;
}

const Spinner = ({ isLoading = true }: Props) => {
    return (
        <div id="loading-spinner">
            <ClipLoader
                color="#36d7b7"
                loading={isLoading}
                size={35}
                aria-label="Loading Spinner"
                data-test-id="loader"
            />
        </div>
    );
};

export default Spinner;
