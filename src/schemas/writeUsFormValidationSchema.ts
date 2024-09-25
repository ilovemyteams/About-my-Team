import { useTranslations } from "next-intl";
import * as yup from "yup";

import { EmailValidation } from "./shared/emailValidation";
import { MessageValidation } from "./shared/messageValidation";
import { NameValidation } from "./shared/nameValidation";

const telegramRegex = /(t\.me|@)/;

const linkedinRegex = /linkedin\.com/;

const instagramRegex = /instagram\.com/;

const facebookRegex = /facebook\.com/;

export const WriteUsValidation = () => {
    const getTranslation = useTranslations("Errors");
    const nameValidation = NameValidation();
    const emailValidation = EmailValidation();
    const messageValidation = MessageValidation();

    const writeUsFormValidationSchema = yup.object().shape({
        name: nameValidation,
        email: emailValidation,
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
        message: messageValidation,
    });

    return writeUsFormValidationSchema;
};
