import { InternationalizedArrayString } from "@/types/sanity.types";

import { SUPPORTED_LANGUAGES } from "../constants";

export const validateIsRequired = (value: InternationalizedArrayString) => {
    if (!value) {
        return "Дане поле обо'язкове до заповнення";
    }

    const hasAllLocales = SUPPORTED_LANGUAGES.every(language =>
        value.some(item => item._key === language.id)
    );

    if (!hasAllLocales) {
        return "Дане поле обо'язкове до заповнення на всіх мовах";
    }

    const hasEmptyFields = value.find(item => !item.value);

    if (hasEmptyFields) {
        return "Дане поле не може мати пусте значення";
    }

    return true;
};
