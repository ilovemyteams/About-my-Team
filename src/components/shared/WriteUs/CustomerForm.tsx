"use client";
import axios from "axios";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { WriteUsValidation } from "@/src/schemas/writeUsFormValidationSchema";
import { FormInModalProps } from "@/types/FormInModalProps";

import { CustomField } from "../FormElements/CustomField";
import { PolicyLabel } from "../FormElements/PolicyLabel";
import { SubmitButton } from "../FormElements/SubmitButton";

export interface ValuesWriteUsFormType {
    name: string;
    email: string;
    telegram: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    message: string;
}

interface StatusType {
    activeField: string | null;
    isFormChanged: boolean;
}

export const CustomerForm = ({ notificationHandler }: FormInModalProps) => {
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

    const initialStatus: StatusType = {
        activeField: "",
        isFormChanged: false,
    };

    const submitForm = async (values: ValuesWriteUsFormType) => {
        const onSendData = async () => {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                telegram: values.telegram.trim(),
                linkedin: values.linkedin.trim(),
                instagram: values.instagram.trim(),
                facebook: values.facebook.trim(),
                message: values.message.trim(),
            };
            await axios({
                method: "post",
                url: "/api/sendCustomerData",
                data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        };

        try {
            await notificationHandler(onSendData);
        } catch (error) {
            return error;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={submitForm}
            validationSchema={validationSchema}
            initialStatus={initialStatus}
        >
            {({
                values,
                status,
                setStatus,
                dirty,
                isValid,
                errors,
                touched,
                isSubmitting,
            }) => {
                const onFocusField = (fieldName: string) => {
                    if (fieldName !== "name" && !status.isFormChanged) {
                        setStatus({
                            activeField: fieldName,
                            isFormChanged: true,
                        });
                        return;
                    }

                    setStatus({
                        activeField: fieldName,
                        isFormChanged: status.isFormChanged,
                    });
                };

                return (
                    <Form className="flex flex-col items-center pt-[12px] border-t-[1px] border-purple-strokeLight dark:border-purple-stroke">
                        <CustomField
                            name="name"
                            value={values.name}
                            label={getTranslation("nameLabel")}
                            placeholder={getTranslation("namePlaceholder")}
                            type="text"
                            autoFocus={true}
                            isError={
                                !!(
                                    status.isFormChanged &&
                                    touched.name &&
                                    errors.name
                                )
                            }
                            onFocus={onFocusField}
                            status={status.activeField}
                        />
                        <CustomField
                            name="email"
                            value={values.email}
                            label={getTranslation("emailLabel")}
                            placeholder={getTranslation("emailPlaceholder")}
                            type="text"
                            autoFocus={false}
                            isError={!!(touched.email && errors.email)}
                            onFocus={onFocusField}
                            status={status.activeField}
                        />
                        <CustomField
                            name="telegram"
                            value={values.telegram}
                            label={getTranslation("telegramLabel")}
                            placeholder={getTranslation("telegramPlaceholder")}
                            type="text"
                            autoFocus={false}
                            isError={!!(touched.telegram && errors.telegram)}
                            onFocus={onFocusField}
                            status={status.activeField}
                        />
                        <CustomField
                            name="linkedin"
                            value={values.linkedin}
                            label={getTranslation("linkedinLabel")}
                            placeholder={getTranslation("linkedinPlaceholder")}
                            type="text"
                            autoFocus={false}
                            isError={!!(touched.linkedin && errors.linkedin)}
                            onFocus={onFocusField}
                            status={status.activeField}
                        />
                        <CustomField
                            name="instagram"
                            value={values.instagram}
                            label={getTranslation("instagramLabel")}
                            placeholder={getTranslation("instagramPlaceholder")}
                            type="text"
                            autoFocus={false}
                            isError={!!(touched.instagram && errors.instagram)}
                            onFocus={onFocusField}
                            status={status.activeField}
                        />
                        <CustomField
                            name="facebook"
                            value={values.facebook}
                            label={getTranslation("facebookLabel")}
                            placeholder={getTranslation("facebookPlaceholder")}
                            type="text"
                            autoFocus={false}
                            isError={!!(touched.facebook && errors.facebook)}
                            onFocus={onFocusField}
                            status={status.activeField}
                        />
                        <CustomField
                            name="message"
                            value={values.message}
                            label={getTranslation("messageLabel")}
                            placeholder={getTranslation("messagePlaceholder")}
                            type="textarea"
                            autoFocus={false}
                            isError={!!(touched.message && errors.message)}
                            onFocus={onFocusField}
                            status={status.activeField}
                        />

                        <div className="w-full mt-[32px] pc:mt-[20px] mb-[32px] pc:mb-[40px]">
                            <p
                                className={`max-w-[372px] mb-2 text-xs tab:text-sm ${(status.isFormChanged && touched.name && errors.name) || (touched.email && errors.email) || (touched.message && errors.message) ? "text-error" : "text-purple-200 dark:text-grey"}`}
                            >
                                {getTranslation("requiredField")}
                            </p>
                            <PolicyLabel />
                        </div>
                        <SubmitButton
                            isActiveLoader={isSubmitting}
                            isDisabled={!(dirty && isValid) || isSubmitting}
                            title={getTranslation("submitButton")}
                        />
                    </Form>
                );
            }}
        </Formik>
    );
};
