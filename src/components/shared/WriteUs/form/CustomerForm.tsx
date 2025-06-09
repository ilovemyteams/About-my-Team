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
import { CustomSelect } from "../../FormElements/CustomSelect";
import { PolicyLabel } from "../../FormElements/PolicyLabel";
import { SubmitButton } from "../../FormElements/SubmitButton";

export enum MediaTypeKeys {
    linkedin = "linkedin",
    telegram = "telegram",
    facebook = "facebook",
    instagram = "instagram",
}

export type MediaType = keyof typeof MediaTypeKeys;

export interface ValuesWriteUsFormType {
    name: string;
    email: string;
    mediaType: MediaTypeKeys;
    mediaLink: string;

    message: string;
    source: string;
    confirm: boolean;
}

export const CustomerForm = ({ notificationHandler }: FormInModalProps) => {
    const getTranslation = useTranslations("CustomerForm");
    const searchParams = useSearchParams();

    const path = usePathname();

    const validationSchema = WriteUsValidation();

    const initialValues = {
        name: "",
        email: "",
        mediaType: MediaTypeKeys.linkedin,
        mediaLink: "",
        message: "",
        source: searchParams.get("source") || "direct",
        confirm: false,
    };

    const initialStatus = "name";
    const options = Object.values(MediaTypeKeys).map(item => ({
        key: item,
        label: getTranslation(`${item}Label`),
    }));

    const submitForm = async (values: ValuesWriteUsFormType) => {
        const onSendData = async () => {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                mediaType: values.mediaType,
                mediaLink: values.mediaLink.trim(),
                message: values.message.trim(),
                source: values.source,
                confirm: values.confirm,
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
                    <Form className="flex flex-col items-center pt-[12px] border-t-[1px] border-purple-strokeLight dark:border-purple-stroke text-purple-200 dark:text-grey">
                        <h1 className="self-start text-purple-200 dark:text-white-200 font-caviar text-3xl tab:text-4xl pc:text-5xl mb-3">
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
                        <div className="w-full tab:grid tab:grid-cols-[288px,_auto] gap-3">
                            <CustomSelect
                                name="mediaType"
                                defaultValue={MediaTypeKeys.linkedin}
                                options={options}
                                label={getTranslation("mediaTypeLabel")}
                            />
                            <CustomField
                                name="mediaLink"
                                value={values.mediaLink}
                                label={getTranslation(`mediaLinkLabel`)}
                                placeholder={getTranslation(
                                    `${values.mediaType}Placeholder`
                                )}
                                type="text"
                                isError={
                                    !!(touched.mediaLink && errors.mediaLink)
                                }
                                setStatus={setStatus}
                                status={status}
                            />
                        </div>

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
                            <PolicyLabel name="confirm" />
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
