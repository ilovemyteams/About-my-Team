import { useTranslations } from "next-intl";
import * as yup from "yup";

import {
    emailRegex,
    nameRegex,
    wrongRuEmailsRegex,
} from "./writeUsFormValidationSchema";

export const FaqWriteQuestionValidation = () => {
    const getTranslation = useTranslations("Errors");
    return yup.object().shape({
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
        message: yup
            .string()
            .trim()
            .min(10, getTranslation("messageMinMaxSymbols"))
            .max(300, getTranslation("messageMinMaxSymbols"))
            .required(getTranslation("required")),
    });
};
