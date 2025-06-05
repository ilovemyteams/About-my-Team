import { Field, FieldProps } from "formik";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { IconCheckbox } from "../Icons/IconCheckbox";

interface CustomCheckboxProps {
    name: string;
}

export const CustomCheckbox = ({
    name,
    children,
}: PropsWithChildren<CustomCheckboxProps>) => {
    return (
        <Field type="checkbox" name={name}>
            {({ field }: FieldProps<string>) => {
                const value = field.value;
                return (
                    <>
                        <label className="flex gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                className="hidden"
                                {...field}
                            />
                            <IconCheckbox
                                className={twMerge(
                                    "size-3 md:size-4  border-[1px] transition-colors duration-300 mt-[2px]",
                                    value
                                        ? "border-transparent dark:border-transparent text-white-200 bg-purple-100"
                                        : "text-disabledLight dark:text-purple-stroke border-disabledLight dark:border-purple-stroke bg-transparent "
                                )}
                            />

                            {children}
                        </label>
                    </>
                );
            }}
        </Field>
    );
};
