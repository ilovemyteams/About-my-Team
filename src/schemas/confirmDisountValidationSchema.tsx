import * as yup from "yup";

import { EmailValidation } from "./shared/emailValidation";
import { NameValidation } from "./shared/nameValidation";

export const ConfirmDiscountValidation = () => {
    const nameValidation = NameValidation();
    const emailValidation = EmailValidation();

    return yup.object().shape({
        name: nameValidation,
        email: emailValidation,
    });
};
