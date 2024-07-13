import React from "react";

type Props = {
    labelText: string;
    inputValue: string | number | readonly string[] | undefined;
    inputType: string;
    changeHandler: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const InputField = ({ labelText, inputValue, inputType, changeHandler }: Props) => {
    return (
        <>
            <label className="text-md font-medium ">{labelText}</label>
            <input
                type={inputType}
                value={inputValue}
                onChange={changeHandler}
                className="rounded outline-none text-md border-2 border-gray-200 p-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
            />
        </>
    );
};

export default InputField;
