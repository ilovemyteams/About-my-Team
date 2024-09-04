import { useTranslations } from "next-intl";
import * as yup from "yup";

export const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\s-]+$/;

export const emailRegex =
    /^(?!.*\.\.)(?!.*[.-]@)(?!@.*[.-]$)([a-zA-Z0-9._%+\-'"#$&*/|^{}~]+(?<!\.)@(?=[a-zA-Z0-9.-]{1,63}\.[a-zA-Z]{2,}$)(?![.-])[a-zA-Z0-9.-]+(?<![.-]))$/;

export const wrongRuEmailsRegex =
    /^([a-zA-Z0-9._%+\-'"#$&*/|^{}~]+(?<!\.)@([a-zA-Z0-9_\-.]+)(?!.*\.(ru|рф|su)$)([.][a-zA-Z]{2,}))$/;

const telegramRegex = /(t\.me|@)/;

const linkedinRegex = /linkedin\.com/;

const instagramRegex = /instagram\.com/;

const facebookRegex = /facebook\.com/;

export const WriteUsValidation = () => {
    const getTranslation = useTranslations("Errors");

    const writeUsFormValidationSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, getTranslation("nameMinMaxSymbols"))
            .max(30, getTranslation("nameMinMaxSymbols"))
            .matches(nameRegex, getTranslation("nameAllowedSymbols"))
            .required(getTranslation("required")),
        email: yup
            .string()
            .matches(emailRegex, getTranslation("wrongEmail"))
            .matches(wrongRuEmailsRegex, getTranslation("russianEmails"))
            .required(getTranslation("required")),
        telegram: yup
            .string()
            .matches(telegramRegex, getTranslation("wrongTelegram")),
        linkedin: yup
            .string()
            .matches(linkedinRegex, getTranslation("wrongLinkedin")),
        instagram: yup
            .string()
            .matches(instagramRegex, getTranslation("wrongInstagram")),
        facebook: yup
            .string()
            .matches(facebookRegex, getTranslation("wrongFacebook")),
        message: yup
            .string()
            .trim()
            .min(10, getTranslation("messageMinMaxSymbols"))
            .max(300, getTranslation("messageMinMaxSymbols"))
            .required(getTranslation("required")),
    });

    return writeUsFormValidationSchema;
};
