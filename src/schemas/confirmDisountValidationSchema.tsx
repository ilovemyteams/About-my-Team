import { useTranslations } from "next-intl";
import * as yup from "yup";

import { EmailValidation } from "./shared/emailValidation";
import { NameValidation } from "./shared/nameValidation";

export const ConfirmDiscountValidation = () => {
    const getTranslation = useTranslations("Errors");
    const nameValidation = NameValidation();
    const emailValidation = EmailValidation();

    return yup.object().shape({
        name: nameValidation,
        email: emailValidation,
        comment: yup
            .string()
            .optional()
            .max(300, getTranslation("messageMinMaxSymbols")),
    });
};
