import * as yup from "yup";

const emailRegex =
    /^([a-zA-Z0-9]+){1}([a-zA-Z0-9?'"`#$%&*+-_./|^{}~]+){1}@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,3})$/;

export const writeUsFormValidationSchema = () => {
    return yup.object().shape({
        name: yup.string().min(2, "").max(30, "").required(""),
        email: yup.string().matches(emailRegex, "").required(""),
        telegram: yup.string(),
        linkedin: yup.string(),
        instagram: yup.string(),
        facebook: yup.string(),
        message: yup.string().min(10, "").max(30, ""),
    });
};
