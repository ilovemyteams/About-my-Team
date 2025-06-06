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
                        <label className="flex gap-[16px] tab:gap-2 cursor-pointer items-start md:items-center">
                            <input
                                type="checkbox"
                                className="hidden"
                                {...field}
                            />
                            <IconCheckbox
                                className={twMerge(
                                    "shrink-0 size-4 tab:size-[17px]  border-[1px] transition-colors duration-300  border-purple-100",
                                    value
                                        ? "text-white-200 bg-purple-100 "
                                        : "text-transparent"
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
