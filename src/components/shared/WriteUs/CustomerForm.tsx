"use client";
import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useTranslations } from "next-intl";
import { WriteUsValidation } from "@/src/schemas/writeUsFormValidationSchema";
import { Button } from "../Button";
import { appendToSheet } from "@/src/api/appendToSheetData";

interface CustomerFormProps {
    onClose?: () => void;
    setIsError: (value: boolean | ((prev: boolean) => boolean)) => void;
    setIsNotificationShawn: (
        value: boolean | ((prev: boolean) => boolean)
    ) => void;
}

export interface ValuesWriteUsFormType {
    name: string;
    email: string;
    telegram: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    message: string;
}

const labelStyles =
    "relative w-full h-[32px] my-3 border-b-[1px] text-base transition-color duration-300 ease-out";
const labelTextAreaStyles =
    "relative w-full h-[108px] my-8 border-b-[1px] text-base transition-color duration-300 ease-out";
const textLabelStyles = "absolute tansition-transform duration-300 ease-out";
const fieldStyles =
    "block appearance-none w-full h-full bg-transparent focus:outline-none font-caviar text-baseb placeholder-purple-stroke";
const errorStyles =
    "absolute bottom-[-20px] right-0 text-xxs text-error text-right";

export const CustomerForm = ({
    onClose,
    setIsError,
    setIsNotificationShawn,
}: CustomerFormProps) => {
    const [isLoading, setIsLoading] = useState(false);

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

    const submitForm = async (values: ValuesWriteUsFormType) => {
        try {
            setIsLoading(true);
            const newRow = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                telegram: values.telegram.trim(),
                linkedin: values.linkedin.trim(),
                instagram: values.instagram.trim(),
                facebook: values.facebook.trim(),
                message: values.message.trim(),
            };
            await appendToSheet(newRow);
            onClose?.();
        } catch (error) {
            setIsError(true);
            return error;
        } finally {
            setIsLoading(false);
                 setIsNotificationShawn(true);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            initialStatus="name"
            validationSchema={validationSchema}
        >
            {({
                values,
                status,
                setStatus,
                dirty,
                isValid,
                errors,
                touched,
                handleBlur,
            }) => (
                <Form className="flex flex-col items-center pt-[16px] border-t-[1px] border-purple-stroke">
                    <label
                        className={`${labelStyles}  ${touched.name && errors.name ? "border-error" : values.name || status === "name" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.name || status === "name" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("nameLabel")}
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
                            onBlur={handleBlur}
                            className={`${fieldStyles} ${touched.name && errors.name ? "text-error" : "text-grey"}`}
                        ></Field>
                        <ErrorMessage
                            name="name"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${touched.email && errors.email ? "border-error" : values.email || status === "email" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.email || status === "email" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("emailLabel")}
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
                            onBlur={handleBlur}
                            className={`${fieldStyles} ${touched.email && errors.email ? "text-error" : "text-grey"}`}
                        ></Field>
                        <ErrorMessage
                            name="email"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${touched.telegram && errors.telegram ? "border-error" : values.telegram || status === "telegram" ? "border-grey" : "border-purple-stroke"} `}
                    >
                        <p
                            className={`${textLabelStyles} ${values.telegram || status === "telegram" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("telegramLabel")}
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
                            onBlur={handleBlur}
                            className={`${fieldStyles} ${touched.telegram && errors.telegram ? "text-error" : "text-grey"}`}
                        ></Field>
                        <ErrorMessage
                            name="telegram"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${touched.linkedin && errors.linkedin ? "border-error" : values.linkedin || status === "linkedin" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.linkedin || status === "linkedin" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("linkedinLabel")}
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
                            onBlur={handleBlur}
                            className={`${fieldStyles} ${touched.linkedin && errors.linkedin ? "text-error" : "text-grey"}`}
                        ></Field>
                        <ErrorMessage
                            name="linkedin"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${touched.instagram && errors.instagram ? "border-error" : values.instagram || status === "instagram" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.instagram || status === "instagram" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("instagramLabel")}
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
                            onBlur={handleBlur}
                            className={`${fieldStyles} ${touched.instagram && errors.instagram ? "text-error" : "text-grey"}`}
                        ></Field>
                        <ErrorMessage
                            name="instagram"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${touched.facebook && errors.facebook ? "border-error" : values.facebook || status === "facebook" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.facebook || status === "facebook" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("facebookLabel")}
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
                            onBlur={handleBlur}
                            className={`${fieldStyles} ${touched.facebook && errors.facebook ? "text-error" : "text-grey"}`}
                        ></Field>
                        <ErrorMessage
                            name="facebook"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelTextAreaStyles} ${touched.message && errors.message ? "border-error" : values.message || status === "message" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.message || status === "message" ? "top-[0%] text-xxs" : "top-[20%] text-base"}`}
                        >
                            {getTranslation("messageLabel")}
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
                            onBlur={handleBlur}
                            className={`${fieldStyles} pt-6 ${touched.message && errors.message ? "text-error" : "text-grey"}`}
                        ></Field>
                        <ErrorMessage
                            name="message"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <div className="w-full">
                        <p
                            className={`max-w-[372px] mb-2 text-xs tab:text-sm ${(touched.name && errors.name) || (touched.email && errors.email) || (touched.message && errors.message) ? "text-error" : "text-grey"}`}
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
                        disabled={!(dirty && isValid) || isLoading}
                        color="grey"
                    >
                        {getTranslation("submitButton")}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
