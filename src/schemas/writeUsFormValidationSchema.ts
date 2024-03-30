import * as yup from "yup";
import { useTranslations } from "next-intl";

const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

export const WriteUsValidation = () => {
    const getTranslation = useTranslations("Errors");

    const writeUsFormValidationSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, getTranslation("nameMinMaxSymbols"))
            .max(30, getTranslation("nameMinMaxSymbols"))
            .required(getTranslation("required")),
        email: yup
            .string()
            .matches(emailRegex, getTranslation("wrongEmail"))
            .required(getTranslation("required")),
        telegram: yup.string(),
        linkedin: yup.string(),
        instagram: yup.string(),
        facebook: yup.string(),
        message: yup
            .string()
            .min(10, getTranslation("messageMinMaxSymbols"))
            .max(30, getTranslation("messageMinMaxSymbols"))
            .required(getTranslation("required")),
    });

    return writeUsFormValidationSchema;
};
