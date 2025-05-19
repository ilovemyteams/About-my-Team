import { Select, SelectItem } from "@heroui/react";
import { useField } from "formik";

interface CustomSelectProps {
    defaultValue: string;
    options: { key: string; label: string }[];
    name: string;
    label: string;
}

export const CustomSelect = ({
    defaultValue,
    name,
    options,
    label,
}: CustomSelectProps) => {
    const [field] = useField(name);

    return (
        <label className="w-full flex flex-col pb-3">
            <span className="text-xxs leading-none -mb-[2px]">{label}</span>
            <Select
                {...field}
                defaultSelectedKeys={[defaultValue]}
                aria-label={label}
                classNames={{
                    selectorIcon: "text-red size-8 end-2",
                    value: "font-caviar text-base font-bold capitalize -ml-1  -mb-2",

                    popoverContent:
                        "[background-color:#1F0033] bg-selectOptionsGradientDark rounded-none p-0 py-3 border-[1px] border-purple-stroke",
                    listbox: "p-0 gap-0",
                    trigger:
                        "group border-b-[1px] border-purple-stroke hover:border-b-[1px] hover:border-purple-stroke after:h-[0px] active:border-grey data-[open=true]:border-grey data-[open=true]:hover:border-grey ",
                }}
                radius="none"
                id={field.name}
                variant="underlined"
                popoverProps={{ offset: 0 }}
            >
                {options.map(item => (
                    <SelectItem
                        key={item.key}
                        hideSelectedIcon
                        shouldHighlightOnFocus={false}
                        classNames={{
                            title: "capitalize group-data-[hover=true]:underline group-data-[selected=true]:underline text-base",
                            base: "rounded-none data-[selected=true]:text-white-200 data-[hover=true]:bg-transparent data-[hover=true]:text-white-200 px-4 py-[6px] data-[selectable=true]:focus:bg-transparent",
                        }}
                    >
                        {item.label}
                    </SelectItem>
                ))}
            </Select>
        </label>
    );
};
