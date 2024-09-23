import { useTranslations } from "next-intl";
import * as yup from "yup";

const emailRegex =
    /^(?!.*\.\.)(?!.*[.-]@)(?!@.*[.-]$)([a-zA-Z0-9._%+\-'"#$&*/|^{}~]+(?<!\.)@(?=[a-zA-Z0-9.-]{1,63}\.[a-zA-Z]{2,}$)(?![.-])[a-zA-Z0-9.-]+(?<![.-]))$/;

const wrongRuEmailsRegex =
    /^([a-zA-Z0-9._%+\-'"#$&*/|^{}~]+(?<!\.)@([a-zA-Z0-9_\-.]+)(?!.*\.(ru|рф|su)$)([.][a-zA-Z]{2,}))$/;

export const EmailValidation = () => {
    const getTranslation = useTranslations("Errors");

    return yup
        .string()
        .matches(emailRegex, getTranslation("wrongEmail"))
        .matches(wrongRuEmailsRegex, getTranslation("russianEmails"))
        .required(getTranslation("required"));
};
