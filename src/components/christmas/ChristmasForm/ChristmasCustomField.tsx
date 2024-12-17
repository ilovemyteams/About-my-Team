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
    setStatus,
}: CustomFieldProps) => {
    const onFocusField = () => {
        setStatus(name);
    };

    const heightStyles =
        type === "textarea" ? "h-[48px] pc:h-[68px] pt-5" : "h-[28px] pt-1";

    const borderAndColorStyles = isError
        ? "border-error focus:border-error text-error"
        : `text-purple-200 focus:border-greyLight  ${value === "" ? "border-purple-strokeLight" : "border-greyLight"}`;

    return (
        <label className="block relative w-full pb-5 text-base font-normal">
            <p className="mb-2">{label}</p>

            <Field
                as={type === "textarea" ? "textarea" : "input"}
                name={name}
                type={"text"}
                autoComplete="on"
                placeholder={placeholder}
                onFocus={onFocusField}
                className={`block focus:placeholder-transparent appearance-none w-full bg-transparent pb-1 text-purple-stroke outline-none border-b-[1px] rounded-none  ${heightStyles}  ${borderAndColorStyles} font-caviar text-baseb placeholder-purple-strokeFormLabel resize-none scroll transition-color duration-300 ease-out`}
            ></Field>

            <ErrorMessage
                name={name}
                component="p"
                className="absolute bottom-[-2px] right-0 text-xxs text-right text-error"
            ></ErrorMessage>
        </label>
    );
};