"use client";
import { useState } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useTranslations } from "next-intl";
import { WriteUsValidation } from "@/src/schemas/writeUsFormValidationSchema";
import { Button } from "../Button";
import { appendToSheet } from "@/src/api/appendToSheetData";
import { IconLoader } from "../Icons/IconLoader";

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
    "relative appearance-none w-full h-[60px] py-[12px] outline-none text-base";
const labelTextAreaStyles =
    "relative w-full h-[122px] pb-[12px] outline-none text-base";
const textLabelStyles = "absolute transition-translate duration-300 ease-out";
const fieldStyles =
    "block appearance-none w-full h-full py-[7px] bg-transparent outline-none font-caviar text-baseb placeholder-purple-strokeLight dark:placeholder-purple-stroke border-b-[1px] text-base transition-color duration-300 ease-out";
const textAreaStyles =
    "block appearance-none w-full h-[80px] mt-[20px] pr-[5px] bg-transparent outline-none font-caviar text-baseb placeholder-purple-strokeLight dark:placeholder-purple-stroke text-base transition-color duration-300 ease-out scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-grey scrollbar-track-transparent";
const errorStyles =
    "absolute bottom-[-2px] right-0 text-xxs text-error text-right";

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
                <Form className="flex flex-col items-center pt-[12px] border-t-[1px] border-purple-strokeLight dark:border-purple-stroke">
                    <label className={`${labelStyles}`}>
                        <p
                            className={`${textLabelStyles} ${values.name || status === "name" ? "top-0 text-xxs" : "top-[20px] text-base"}`}
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
                            className={`${fieldStyles} ${touched.name && errors.name ? "border-error text-error" : values.name || status === "name" ? "border-purple-200 text-purple-200 dark:border-grey dark:text-grey" : "border-purple-strokeLight dark:border-purple-stroke"}`}
                        ></Field>
                        <ErrorMessage
                            name="name"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label className={`${labelStyles}`}>
                        <p
                            className={`${textLabelStyles} ${values.email || status === "email" ? "top-0 text-xxs" : "top-[20px] text-base"}`}
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
                            className={`${fieldStyles} ${touched.email && errors.email ? "border-error text-error" : values.email || status === "email" ? "border-purple-200 text-purple-200 dark:border-grey dark:text-grey" : "border-purple-strokeLight dark:border-purple-stroke"}`}
                        ></Field>
                        <ErrorMessage
                            name="email"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label className={`${labelStyles}`}>
                        <p
                            className={`${textLabelStyles} ${values.telegram || status === "telegram" ? "top-0 text-xxs" : "top-[20px] text-base"}`}
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
                            className={`${fieldStyles} ${touched.telegram && errors.telegram ? "border-error text-error" : values.telegram || status === "telegram" ? "border-purple-200 text-purple-200 dark:border-grey dark:text-grey" : "border-purple-strokeLight dark:border-purple-stroke"}`}
                        ></Field>
                        <ErrorMessage
                            name="telegram"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label className={`${labelStyles}`}>
                        <p
                            className={`${textLabelStyles} ${values.linkedin || status === "linkedin" ? "top-0 text-xxs" : "top-[20px] text-base"}`}
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
                            className={`${fieldStyles}  ${touched.linkedin && errors.linkedin ? "border-error text-error" : values.linkedin || status === "linkedin" ? "border-purple-200 text-purple-200 dark:border-grey dark:text-grey" : "border-purple-strokeLight dark:border-purple-stroke"}`}
                        ></Field>
                        <ErrorMessage
                            name="linkedin"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label className={`${labelStyles}`}>
                        <p
                            className={`${textLabelStyles} ${values.instagram || status === "instagram" ? "top-0 text-xxs" : "top-[20px] text-base"}`}
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
                            className={`${fieldStyles}  ${touched.instagram && errors.instagram ? "border-error text-error" : values.instagram || status === "instagram" ? "border-purple-200 text-purple-200 dark:border-grey dark:text-grey" : "border-purple-strokeLight dark:border-purple-stroke"}`}
                        ></Field>
                        <ErrorMessage
                            name="instagram"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label className={`${labelStyles}`}>
                        <p
                            className={`${textLabelStyles} ${values.facebook || status === "facebook" ? "top-0 text-xxs" : "top-[20px] text-base"}`}
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
                            className={`${fieldStyles}  ${touched.facebook && errors.facebook ? "border-error text-error" : values.facebook || status === "facebook" ? "border-purple-200 text-purple-200 dark:border-grey dark:text-grey" : "border-purple-strokeLight dark:border-purple-stroke"}`}
                        ></Field>
                        <ErrorMessage
                            name="facebook"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <label className={`${labelTextAreaStyles}`}>
                        <p
                            className={`${textLabelStyles} ${values.message || status === "message" ? "top-0 text-xxs" : "top-[20px] text-base"}`}
                        >
                            {getTranslation("messageLabel")}
                        </p>
                        <div
                            className={`pb-[7px] border-b-[1px] ${touched.message && errors.message ? "border-error" : values.message || status === "message" ? "border-purple-200  dark:border-grey " : "border-purple-strokeLight dark:border-purple-stroke"}`}
                        >
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
                                className={`${textAreaStyles} resize-none ${touched.message && errors.message ? "text-error" : "text-purple-200 dark:text-grey"}`}
                            ></Field>
                        </div>
                        <ErrorMessage
                            name="message"
                            component="p"
                            className={errorStyles}
                        ></ErrorMessage>
                    </label>
                    <div className="w-full mt-[32px] pc:mt-[20px] mb-[32px] pc:mb-[40px]">
                        <p
                            className={`max-w-[372px] mb-2 text-xs tab:text-sm ${(touched.name && errors.name) || (touched.email && errors.email) || (touched.message && errors.message) ? "text-error" : "text-purple-200 dark:text-grey"}`}
                        >
                            {getTranslation("requiredField")}
                        </p>
                        <p className="max-w-[372px] text-xs tab:text-sm">
                            {getTranslation("informedAgreement")}
                            <a
                                href="/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-130 dark:text-purple-50"
                            >
                                {getTranslation("rulesLink")}
                            </a>
                        </p>
                    </div>
                    <div className="relative">
                        <Button
                            type="submit"
                            disabled={!(dirty && isValid) || isLoading}
                            color="grey"
                        >
                            {getTranslation("submitButton")}
                        </Button>
                        <IconLoader
                            className={`${isLoading ? "block" : "hidden"} absolute top-[4px] left-[4px] tab:top-[8px]
                             tab:left-[8px] w-[40px] h-[40px] animate-rotation`}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};
