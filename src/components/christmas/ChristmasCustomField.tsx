import { ErrorMessage, Field } from "formik";

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
    status,
    setStatus,
}: CustomFieldProps) => {
    const onFocusField = () => {
        setStatus(name);
    };

    const heightStyles =
        type === "textarea" ? "h-[76px] pc:h-[68px]" : "h-[28px]";

    const borderAndColorStyles = isError
        ? "border-error focus:border-error text-error"
        : `text-purple-200 dark:text-grey focus:border-greyLight dark:focus:border-grey ${value === "" ? "border-purple-strokeLight dark:border-purple-stroke" : "border-greyLight dark:border-grey"}`;

    return (
        <label className="block relative w-full pb-[12px] text-base font-normal">
            <p className="">{label}</p>

            <Field
                as={type === "textarea" ? "textarea" : "input"}
                name={name}
                type={"text"}
                autoComplete="on"
                placeholder={status === name ? "" : placeholder}
                onFocus={onFocusField}
                className={`block appearance-none w-full bg-transparent py-1 outline-none border-b-[1px] rounded-none  ${heightStyles}  ${borderAndColorStyles} font-caviar text-baseb placeholder-purple-strokeFormLabelLight dark:placeholder-purple-strokeFormLabel resize-none scroll transition-color duration-300 ease-out`}
            ></Field>

            <ErrorMessage
                name={name}
                component="p"
                className="absolute bottom-[-2px] right-0 text-xxs text-right text-error"
            ></ErrorMessage>
        </label>
    );
};
