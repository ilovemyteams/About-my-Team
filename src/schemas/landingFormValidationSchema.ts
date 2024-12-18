import * as yup from "yup";

import { EmailValidation } from "./shared/emailValidation";
import { MessageValidation } from "./shared/messageValidation";
import { NameValidation } from "./shared/nameValidation";

export const LandingFormValidation = () => {
    const nameValidation = NameValidation();
    const emailValidation = EmailValidation();
    const messageValidation = MessageValidation();

    return yup.object().shape({
        name: nameValidation,
        email: emailValidation,
        socialMediaLink: messageValidation,
        productOrService: messageValidation,
        whyLanding: messageValidation,
        mostImportant: messageValidation,
    });
};
