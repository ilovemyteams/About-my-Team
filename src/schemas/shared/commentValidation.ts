import { useTranslations } from "next-intl";
import * as yup from "yup";

export const CommentValidation = () => {
    const getTranslation = useTranslations("Errors");

    return yup
        .string()
        .trim()
        .min(4, getTranslation("messageMinMax100Symbols"))
        .max(100, getTranslation("messageMinMax100Symbols"))
        .required(getTranslation("required"));
};
