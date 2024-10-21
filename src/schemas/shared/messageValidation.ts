import { useTranslations } from "next-intl";
import * as yup from "yup";

export const MessageValidation = () => {
    const getTranslation = useTranslations("Errors");

    return yup
        .string()
        .trim()
        .min(1, getTranslation("messageMinMaxSymbols"))
        .max(300, getTranslation("messageMinMaxSymbols"))
        .required(getTranslation("required"));
};
