import { useTranslations } from "next-intl";
import * as yup from "yup";

import { MediaTypeKeys } from "../components/shared/WriteUs/form/CustomerForm";
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

    const writeUsFormValidationSchema = yup.object({
        name: nameValidation,
        email: emailValidation,
        mediaType: yup.string().required(),
        mediaLink: yup
            .string()
            .required()
            .when("mediaType", ([mediaType], schema) => {
                if (mediaType === MediaTypeKeys.linkedin) {
                    return schema.matches(
                        linkedinRegex,
                        getTranslation("wrongLinkedin")
                    );
                }
                if (mediaType === MediaTypeKeys.telegram) {
                    return schema.matches(
                        telegramRegex,
                        getTranslation("wrongTelegram")
                    );
                }
                if (mediaType === MediaTypeKeys.facebook) {
                    return schema.matches(
                        facebookRegex,
                        getTranslation("wrongFacebook")
                    );
                }
                if (mediaType === MediaTypeKeys.instagram) {
                    return schema.matches(
                        instagramRegex,
                        getTranslation("wrongInstagram")
                    );
                }

                return schema;
            }),
        message: messageValidation,
    });

    return writeUsFormValidationSchema;
};
