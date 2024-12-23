import { sendGTMEvent } from "@next/third-parties/google";
import { ErrorMessage, Field, useFormikContext } from "formik";
import React from "react";

interface CustomFieldProps {
    value: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    isError: boolean;
    status: string;
    setStatus: (status: string | null) => void;
}

export const ChristmasCustomField = ({
    value,
    name,
    label,
    type,
    placeholder,
    isError,
    setStatus,
}: CustomFieldProps) => {
    const { handleBlur } = useFormikContext();

    const onFocusField = () => {
        setStatus(name);
    };

    const onBlurField = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        handleBlur(e);
        sendGTMEvent({
            event: `landing_form_${name}_field_filled`,
            data: value,
        });
    };

    const heightStyles =
        type === "textarea"
            ? "h-[48px] pc:h-[68px] pt-[26px] pc:pt-[46px]"
            : "h-[28px] pt-[6px] ";

    const borderAndColorStyles = isError
        ? "border-error focus:border-error text-error"
        : `text-purple-200 focus:border-greyLight  ${value === "" ? "border-purple-strokeLight" : "border-greyLight"}`;

    return (
        <label className="block relative w-full mb-5 tab:mb-7 text-base font-normal">
            <p className="mb-2">{label}</p>

            <Field
                as={type === "textarea" ? "textarea" : "input"}
                name={name}
                type={"text"}
                autoComplete="on"
                placeholder={placeholder}
                onFocus={onFocusField}
                onBlur={onBlurField}
                className={`custom-autofill block focus:placeholder-transparent appearance-none w-full !bg-transparent text-purple-stroke outline-none border-b-[1px] rounded-none  ${heightStyles}  ${borderAndColorStyles} font-caviar text-baseb placeholder-purple-strokeFormLabel resize-none scroll transition-color duration-300 ease-out`}
            ></Field>

            <ErrorMessage
                name={name}
                component="p"
                className="absolute bottom-[-14px] right-0 text-xxs text-right text-error"
            ></ErrorMessage>
        </label>
    );
};
