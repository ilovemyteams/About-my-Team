import { ErrorMessage, Field } from "formik";
import { FocusEvent, useState } from "react";

interface CustomFieldProps {
    value: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    isError: boolean;
    autoFocus: boolean;
    handleBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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

    const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleBlur(e);
        value === "" && setIsLabelUp(false);
    };

    const heightStyles =
        type === "textarea" ? "h-[76px] pc:h-[68px]" : "h-[28px]";

    const borderStyles = isError
        ? "border-error focus:border-error text-error"
        : value === ""
          ? "border-purple-strokeLight dark:border-purple-stroke focus:border-greyLight dark:focus:border-grey text-inherit"
          : "border-greyLight dark:border-grey focus:border-greyLight dark:focus:border-grey text-inherit";

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
                className={`block w-full bg-transparent py-1 outline-none border-b-[1px] ${heightStyles}  ${borderStyles} font-caviar text-baseb placeholder-purple-strokeLight dark:placeholder-purple-stroke resize-none scroll`}
            ></Field>
            <ErrorMessage
                name={name}
                component="p"
                className="absolute bottom-[-2px] right-0 text-xxs text-error text-right"
            ></ErrorMessage>
        </label>
    );
};
