import { useTranslations } from "next-intl";
import * as yup from "yup";

import { EmailValidation } from "./shared/emailValidation";
import { MessageValidation } from "./shared/messageValidation";
import { NameValidation } from "./shared/nameValidation";

const telegramRegex = /(t\.me|@)/;

export const LandingFormValidation = () => {
    const getTranslation = useTranslations("Errors");

    const nameValidation = NameValidation();
    const emailValidation = EmailValidation();
    const messageValidation = MessageValidation();

    return yup.object().shape({
        name: nameValidation,
        email: emailValidation,
        socialMediaLink: yup
            .string()
            .trim()
            .min(10, getTranslation("messageMinMaxSymbols"))
            .max(300, getTranslation("messageMinMaxSymbols")),
        productOrService: messageValidation,
        whyLanding: messageValidation,
        mostImportant: messageValidation,
        telegram: yup
            .string()
            .matches(telegramRegex, getTranslation("wrongTelegram")),
    });
};
