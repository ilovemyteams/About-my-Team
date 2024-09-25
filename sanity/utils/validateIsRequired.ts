import { SUPPORTED_LANGUAGES } from "../constants";
import { InternationalizedArrayString } from "@/types/sanity.types";

export const validateIsRequired = (value: InternationalizedArrayString) => {
    if (!value) {
        return "Field is required";
    }

    const hasAllLocales = SUPPORTED_LANGUAGES.every(language =>
        value.some(item => item._key === language.id)
    );

    if (!hasAllLocales) {
        return "Field is required in all languages";
    }

    const hasEmptyFields = value.find(item => !item.value);

    if (hasEmptyFields) {
        return "Field can’t be empty";
    }

    return true;
};
