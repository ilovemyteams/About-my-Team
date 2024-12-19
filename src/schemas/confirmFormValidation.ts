import { useTranslations } from "next-intl";
import * as yup from "yup";

import { EmailValidation } from "./shared/emailValidation";
import { NameValidation } from "./shared/nameValidation";

const telegramRegex = /(t\.me|@)/;

const linkedinRegex = /linkedin\.com/;

const instagramRegex = /instagram\.com/;

const facebookRegex = /facebook\.com/;

export const ConfirmDiscountValidation = () => {
    const getTranslation = useTranslations("Errors");
    const nameValidation = NameValidation();
    const emailValidation = EmailValidation();

    const confirmDiscountFormValidationSchema = yup.object().shape({
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
        message: yup
            .string()
            .trim()
            .max(300, getTranslation("messageMinMaxSymbols")),
    });

    return confirmDiscountFormValidationSchema;
};
