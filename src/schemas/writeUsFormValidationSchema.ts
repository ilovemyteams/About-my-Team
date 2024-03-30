import * as yup from "yup";
import { useTranslations } from "next-intl";

const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

const wrongRuEmailsRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|^{}~]+){1}@((?!.*\.(ru|рф|su)$)[a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

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
            .min(10, getTranslation("messageMinMaxSymbols"))
            .max(30, getTranslation("messageMinMaxSymbols"))
            .required(getTranslation("required")),
    });

    return writeUsFormValidationSchema;
};
