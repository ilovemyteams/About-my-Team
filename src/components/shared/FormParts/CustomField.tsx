import { ErrorMessage, Field } from "formik";

interface CustomFieldProps {
    value: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    isError: boolean;
    autoFocus: boolean;
    status: null | string;
    setStatus: (status: null | string) => void;
}

export const CustomField = ({
    value,
    name,
    label,
    type,
    placeholder,
    isError,
    autoFocus,
    status,
    setStatus,
}: CustomFieldProps) => {
    const onFocusField = () => {
        setStatus(name);
    };

    const onBlurField = () => {
        setStatus(null);
    };

    const heightStyles =
        type === "textarea" ? "h-[76px] pc:h-[68px]" : "h-[28px]";

    const borderStyles = isError
        ? "border-error focus:border-error text-error"
        : value === ""
          ? "border-purple-strokeLight dark:border-purple-stroke focus:border-greyLight dark:focus:border-grey text-inherit"
          : "border-greyLight dark:border-grey focus:border-greyLight dark:focus:border-grey text-inherit";

    const isActiveEmptyField = status === name || value !== "";

    return (
        <label className="block relative w-full appearance-non pb-[12px] outline-none text-base font-normal">
            <p
                className={`relative transition-[top] h-[20px] duration-300 ease-out ${isActiveEmptyField ? "top-0 text-xxs" : "top-[20px]  text-base"}`}
            >
                {label}
            </p>

            <Field
                as={type === "textarea" ? "textarea" : "input"}
                autoFocus={autoFocus}
                name={name}
                type={"text"}
                autoComplete="on"
                placeholder={isActiveEmptyField ? placeholder : ""}
                onFocus={onFocusField}
                onBlur={onBlurField}
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
