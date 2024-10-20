import { useTranslations } from "next-intl";
import * as yup from "yup";

const nameRegex =
    /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'\u2018\u2019"`\s-]+$/;

export const NameValidation = () => {
    const getTranslation = useTranslations("Errors");

    return yup
        .string()
        .min(2, getTranslation("nameMinMaxSymbols"))
        .max(30, getTranslation("nameMinMaxSymbols"))
        .matches(nameRegex, getTranslation("nameAllowedSymbols"))
        .required(getTranslation("required"));
};
