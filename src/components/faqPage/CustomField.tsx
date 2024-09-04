import { ErrorMessage, Field } from "formik";
import { useState } from "react";

interface CustomFieldProps {
    value: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    isError: boolean;
    autoFocus: boolean;

    handleBlur: (e: unknown) => void;
}

export const CustomField = ({
    value,
    name,
    label,
    type,
    placeholder,
    isError,
    autoFocus,
    handleBlur,
}: CustomFieldProps) => {
    const [isLabelUp, setIsLabelUp] = useState(false);
    const onFocusField = () => {
        !isLabelUp && setIsLabelUp(true);
    };

    const onBlur = (e: unknown) => {
        handleBlur(e);
        value === "" && setIsLabelUp(false);
    };

    return (
        <label className="block relative w-full appearance-non pb-[12px] outline-none text-base font-normal">
            <p
                className={`relative transition-[top] h-[20px] duration-300 ease-out ${isLabelUp ? "top-0 text-xxs" : "top-[20px]  text-base"}`}
            >
                {label}
            </p>

            <Field
                as={type === "textarea" ? "textarea" : "input"}
                autoFocus={autoFocus}
                name={name}
                type={"text"}
                autoComplete="on"
                placeholder={isLabelUp ? placeholder : ""}
                onFocus={onFocusField}
                onBlur={onBlur}
                className={`block w-full bg-transparent py-1 outline-none border-b-[1px] ${type === "textarea" ? "h-[76px] pc:h-[68px]" : "h-[28px]"} ${isError ? "border-error" : value === "" ? "border-purple-strokeLight dark:border-purple-stroke" : "border-grey"} ${isError ? "focus:border-error text-error" : "focus:border-grey text-inherit"} font-caviar text-baseb placeholder-purple-strokeFormLebelLight dark:placeholder-purple-strokeFormLebel resize-none scroll`}
            ></Field>
            <ErrorMessage
                name={name}
                component="p"
                className="absolute bottom-[-2px] right-0 text-xxs text-error text-right"
            ></ErrorMessage>
        </label>
    );
};
