import { ErrorMessage, Field } from "formik";

interface CustomFieldProps {
    value: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    isError: boolean;
    status: string;
    className?: string;
    setStatus: (status: string | null) => void;
}

export const CustomField = ({
    value,
    name,
    label,
    type,
    placeholder,
    isError,
    status,
    setStatus,
    className,
}: CustomFieldProps) => {
    const onFocusField = () => {
        setStatus(name);
    };

    const heightStyles =
        type === "textarea" ? "h-[76px] pc:h-[68px]" : "h-[28px]";

    const borderAndColorStyles = isError
        ? "border-error focus:border-error text-error"
        : `text-purple-200 dark:text-grey focus:border-greyLight dark:focus:border-grey ${value === "" ? "border-purple-strokeLight dark:border-purple-stroke" : "border-greyLight dark:border-grey"}`;

    const isActiveEmptyField = status === name || value !== "";

    return (
        <label className="block relative w-full appearance-none pb-[12px] outline-none text-base font-normal text-purple-200 dark:text-grey">
            <p
                className={`relative transition-[top] h-[20px] duration-300 ease-out ${isActiveEmptyField ? "top-0 text-xxs" : "top-[20px]  text-base"}`}
            >
                {label}
            </p>

            <Field
                as={type === "textarea" ? "textarea" : "input"}
                name={name}
                type={"text"}
                autoComplete="on"
                placeholder={isActiveEmptyField ? placeholder : ""}
                onFocus={onFocusField}
                className={`block [--text-color:var(--autofill-text-color-light)]  dark:[--text-color:var(--autofill-text-color-dark)] custom-autofill-default appearance-none w-full bg-transparent py-1 outline-none border-b-[1px] rounded-none  ${heightStyles}  ${borderAndColorStyles} font-caviar text-baseb placeholder-purple-strokeFormLabelLight dark:placeholder-purple-strokeFormLabel resize-none scroll transition-color duration-300 ease-out ${className}`}
            ></Field>

            <ErrorMessage
                name={name}
                component="p"
                className="absolute bottom-[-2px] right-0 text-xxs text-right text-error"
            ></ErrorMessage>
        </label>
    );
};
