import { useTranslations } from "next-intl";
import * as yup from "yup";

const nameRegex =
    /^(?=(.*\S.*\S))[^\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\s\u02BC\u2019]+$/;

export const NameValidation = () => {
    const getTranslation = useTranslations("Errors");

    return yup
        .string()
        .min(2, getTranslation("nameMinMaxSymbols"))
        .max(30, getTranslation("nameMinMaxSymbols"))
        .matches(nameRegex, getTranslation("nameAllowedSymbols"))
        .required(getTranslation("required"));
};
