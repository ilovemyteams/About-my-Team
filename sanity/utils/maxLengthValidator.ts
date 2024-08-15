import { calculateTotalLength } from "./calculateTotalLength";

export const maxLengthValidator =
    (maxLength: number) =>
    (value: any): true | string => {
        if (Array.isArray(value)) {
            const length = calculateTotalLength(value);
            return (
                length <= maxLength || `Must be ${maxLength} characters or less`
            );
        }
        return true; // If not an array, validation passes
    };
