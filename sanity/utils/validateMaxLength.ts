import {
    InternationalizedArrayString,
    InternationalizedArrayText,
} from "@/types/sanity.types";

export const validateMaxLength =
    (maxLength: number) =>
    (value: InternationalizedArrayString | InternationalizedArrayText) => {
        if (value?.some(item => item.value)) {
            const invalidItems = value.filter(
                item => item?.value && item.value.length > maxLength
            );

            if (invalidItems.length) {
                return `Must be ${maxLength} characters or less`;
            }
        }

        return true;
    };
