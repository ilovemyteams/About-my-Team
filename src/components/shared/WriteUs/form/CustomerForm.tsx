"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import axios from "axios";
import { Form, Formik } from "formik";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { usePathname } from "@/src/i18n/routing";
import { WriteUsValidation } from "@/src/schemas/writeUsFormValidationSchema";
import { FormInModalProps } from "@/types/FormInModalProps";

import { CustomField } from "../../FormElements/CustomField";
import { PolicyLabel } from "../../FormElements/PolicyLabel";
import { SubmitButton } from "../../FormElements/SubmitButton";

export interface ValuesWriteUsFormType {
    name: string;
    email: string;
    telegram: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    message: string;
    source: string;
}

export const CustomerForm = ({ notificationHandler }: FormInModalProps) => {
    const getTranslation = useTranslations("CustomerForm");
    const searchParams = useSearchParams();

    const path = usePathname();

    const validationSchema = WriteUsValidation();

    const initialValues = {
        name: "",
        email: "",
        telegram: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        message: "",
        source: searchParams.get("source") || "direct",
    };

    const initialStatus = "name";

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
                source: values.source,
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
            sendGTMEvent({
                event: "generate_lead",
                page_location: path,
            });
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
                return (
                    <Form className="flex flex-col items-center pt-[12px] border-t-[1px] border-purple-strokeLight dark:border-purple-stroke">
                        <h1 className="font-caviar text-purple-200 dark:text-white-200 text-3xl tab:text-4xl pc:text-5xl self-start mb-[10px]">
                            {getTranslation("customerFormTitle")}
                        </h1>
                        <CustomField
                            name="name"
                            value={values.name}
                            label={getTranslation("nameLabel")}
                            placeholder={getTranslation("namePlaceholder")}
                            type="text"
                            isError={!!(touched.name && errors.name)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="email"
                            value={values.email}
                            label={getTranslation("emailLabel")}
                            placeholder={getTranslation("emailPlaceholder")}
                            type="text"
                            isError={!!(touched.email && errors.email)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="telegram"
                            value={values.telegram}
                            label={getTranslation("telegramLabel")}
                            placeholder={getTranslation("telegramPlaceholder")}
                            type="text"
                            isError={!!(touched.telegram && errors.telegram)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="linkedin"
                            value={values.linkedin}
                            label={getTranslation("linkedinLabel")}
                            placeholder={getTranslation("linkedinPlaceholder")}
                            type="text"
                            isError={!!(touched.linkedin && errors.linkedin)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="instagram"
                            value={values.instagram}
                            label={getTranslation("instagramLabel")}
                            placeholder={getTranslation("instagramPlaceholder")}
                            type="text"
                            isError={!!(touched.instagram && errors.instagram)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="facebook"
                            value={values.facebook}
                            label={getTranslation("facebookLabel")}
                            placeholder={getTranslation("facebookPlaceholder")}
                            type="text"
                            isError={!!(touched.facebook && errors.facebook)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="message"
                            value={values.message}
                            label={getTranslation("messageLabel")}
                            placeholder={getTranslation("messagePlaceholder")}
                            type="textarea"
                            isError={!!(touched.message && errors.message)}
                            setStatus={setStatus}
                            status={status}
                        />

                        <div className="w-full mt-[32px] pc:mt-[20px] mb-[32px] pc:mb-[40px]">
                            <p
                                className={`max-w-[372px] mb-2 text-xs tab:text-sm ${(touched.name && errors.name) || (touched.email && errors.email) || (touched.message && errors.message) ? "text-error" : "text-greyLight dark:text-grey"}`}
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
