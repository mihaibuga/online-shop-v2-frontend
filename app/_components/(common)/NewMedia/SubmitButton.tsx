import React, { useEffect, useState } from "react";

type Props = {
    isDisabled: boolean;
    clickHandler: React.MouseEventHandler<HTMLButtonElement> | undefined;
    isSubmitting: boolean;
    defaultText?: string;
    textWhileSubmitting?: string;
};

const SubmitButton = ({ isDisabled, clickHandler, isSubmitting, defaultText, textWhileSubmitting }: Props) => {
    const [defaultTextToDisplay, setDefaultTextToDisplay] = useState<string>("Submit");
    const [textToDisplayWhileSubmitting, setTextToDisplayWhileSubmitting] = useState<string>("Submitting");

    useEffect(() => {
        if (defaultText) {
            setDefaultTextToDisplay(defaultText);
        }

        if (textWhileSubmitting) {
            setTextToDisplayWhileSubmitting(textWhileSubmitting);
        }
    }, [defaultText, textWhileSubmitting]);

    return (
        <button
            disabled={isDisabled}
            onClick={clickHandler}
            type="button"
            className="bg-gray-300 enabled:hover:bg-blue-700 enabled:bg-blue-800 text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
        >
            {isSubmitting ? textToDisplayWhileSubmitting : defaultTextToDisplay}
        </button>
    );
};

export default SubmitButton;
