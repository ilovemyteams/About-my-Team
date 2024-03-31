"use client";
import { Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";
import { WriteUsValidation } from "@/src/schemas/writeUsFormValidationSchema";
import { Button } from "./Button";

interface CustomerFormProps {
    onClose?: () => void;
}

const labelStyles =
    "relative w-full h-[32px] my-3 border-b-[1px] text-base tansition-color duration-300 ease-out";
const labelTextAreaStyles =
    "relative w-full h-[108px] my-8 border-b-[1px] text-base tansition-color duration-300 ease-out";
const textLabelStyles = "absolute tansition-transform duration-300 ease-out";
const fieldStyles =
    "block appearance-none w-full h-full bg-transparent focus:outline-none font-caviar text-baseb placeholder-purple-stroke";
const errorStyles =
    "absolute bottom-[-20px] right-0 text-xxs text-error text-right";

export const CustomerForm = ({ onClose }: CustomerFormProps) => {
    const getTranslation = useTranslations("CustomerForm");
    const validationSchema = WriteUsValidation();

    const initialValues = {
        name: "",
        email: "",
        telegram: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        message: "",
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
            initialStatus="name"
            validationSchema={validationSchema}
        >
            {({ values, status, setStatus, dirty, isValid, errors }) => (
                <Form className="flex flex-col items-center pt-[16px] border-t-[1px] border-purple-stroke">
                    <label
                        className={`${labelStyles}  ${errors.name ? "border-error" : values.name || status === "name" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.name || status === "name" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("namePlaceholder")}
                        </p>
                        <Field
                            name="name"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "name"
                                    ? getTranslation("namePlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("name")}
                            onBlur={() => setStatus("")}
                            className={`${fieldStyles} ${errors.name ? "text-error" : "text-grey"}`}
                        ></Field>
                        <p className={errorStyles}>{errors.name}</p>
                    </label>
                    <label
                        className={`${labelStyles} ${errors.email ? "border-error" : values.email || status === "email" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.email || status === "email" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("emailPlaceholder")}
                        </p>
                        <Field
                            name="email"
                            type="email"
                            autoComplete="on"
                            placeholder={
                                status === "email"
                                    ? getTranslation("emailPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("email")}
                            onBlur={() => setStatus("")}
                            className={`${fieldStyles} ${errors.email ? "text-error" : "text-grey"}`}
                        ></Field>
                        <p className={errorStyles}>{errors.email}</p>
                    </label>
                    <label
                        className={`${labelStyles} ${errors.telegram ? "border-error" : values.telegram || status === "telegram" ? "border-grey" : "border-purple-stroke"} `}
                    >
                        <p
                            className={`${textLabelStyles} ${values.telegram || status === "telegram" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("telegramPlaceholder")}
                        </p>
                        <Field
                            name="telegram"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "telegram"
                                    ? getTranslation("telegramPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("telegram")}
                            onBlur={() => setStatus("")}
                            className={`${fieldStyles} ${errors.telegram ? "text-error" : "text-grey"}`}
                        ></Field>
                        <p className={errorStyles}>{errors.telegram}</p>
                    </label>
                    <label
                        className={`${labelStyles} ${errors.linkedin ? "border-error" : values.linkedin || status === "linkedin" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.linkedin || status === "linkedin" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("linkedinPlaceholder")}
                        </p>
                        <Field
                            name="linkedin"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "linkedin"
                                    ? getTranslation("linkedinPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("linkedin")}
                            onBlur={() => setStatus("")}
                            className={`${fieldStyles} ${errors.linkedin ? "text-error" : "text-grey"}`}
                        ></Field>
                        <p className={errorStyles}>{errors.linkedin}</p>
                    </label>
                    <label
                        className={`${labelStyles} ${errors.instagram ? "border-error" : values.instagram || status === "instagram" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.instagram || status === "instagram" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("instagramPlaceholder")}
                        </p>
                        <Field
                            name="instagram"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "instagram"
                                    ? getTranslation("instagramPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("instagram")}
                            onBlur={() => setStatus("")}
                            className={`${fieldStyles} ${errors.instagram ? "text-error" : "text-grey"}`}
                        ></Field>
                        <p className={errorStyles}>{errors.instagram}</p>
                    </label>
                    <label
                        className={`${labelStyles} ${errors.facebook ? "border-error" : values.facebook || status === "facebook" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.facebook || status === "facebook" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("facebookPlaceholder")}
                        </p>
                        <Field
                            name="facebook"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "facebook"
                                    ? getTranslation("facebookPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("facebook")}
                            onBlur={() => setStatus("")}
                            className={`${fieldStyles} ${errors.facebook ? "text-error" : "text-grey"}`}
                        ></Field>
                        <p className={errorStyles}>{errors.facebook}</p>
                    </label>
                    <label
                        className={`${labelTextAreaStyles} ${errors.message ? "border-error" : values.message || status === "message" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.message || status === "message" ? "top-[0%] text-xxs" : "top-[20%] text-base"}`}
                        >
                            {getTranslation("messagePlaceholder")}
                        </p>
                        <Field
                            as="textarea"
                            name="message"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "message"
                                    ? getTranslation("messagePlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("message")}
                            onBlur={() => setStatus("")}
                            className={`${fieldStyles} pt-6 ${errors.message ? "text-error" : "text-grey"}`}
                        ></Field>
                        <p className={errorStyles}>{errors.message}</p>
                    </label>
                    <div className="w-full">
                        <p
                            className={`max-w-[372px] mb-2 text-xs tab:text-sm ${errors.name || errors.email || errors.message ? "text-error" : "text-grey"}`}
                        >
                            {getTranslation("requiredField")}
                        </p>
                        <p className="max-w-[372px] mb-8 text-xs tab:text-sm">
                            {getTranslation("informedAgreement")}{" "}
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-50"
                            >
                                {getTranslation("rulesLink")}
                            </a>
                        </p>
                    </div>
                    <Button
                        type="submit"
                        disabled={!(dirty && isValid)}
                        onClick={onClose}
                        color="grey"
                    >
                        {getTranslation("submitButton")}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
