import axios from "axios";
import { Form, Formik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

import { FaqWriteQuestionValidation } from "@/src/schemas/faqWriteQuestionValidationSchema";
import { selectedLink } from "@/src/utils/selectedLink";

import { Button } from "../shared/Button";
import { IconLoader } from "../shared/Icons/IconLoader";
import { CustomField } from "./CustomField";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

export type StatusType = null | string;
interface FaqCtaFormProps {
    onClose: () => void;
    setIsError: Dispatch<SetStateAction<boolean>>;
    setIsNotification: Dispatch<SetStateAction<boolean>>;
}

export const FaqCtaForm = ({
    onClose,
    setIsError,
    setIsNotification,
}: FaqCtaFormProps) => {
    const getTranslation = useTranslations("CustomerForm");

    const validationSchema = FaqWriteQuestionValidation();

    const initialValue: FormValues = {
        name: "",
        email: "",
        message: "",
    };

    const initialStatus: StatusType = null;

    const locale = useLocale();
    const policyURL = selectedLink(locale);

    const onSubmit = async (values: FormValues) => {
        try {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                message: values.message.trim(),
            };
            await axios({
                method: "post",
                url: "/api/sendQuestion",
                data,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            onClose();
        } catch (error) {
            setIsError(true);
            return error;
        } finally {
            setIsNotification(true);
        }
    };

    return (
        <Formik
            initialValues={initialValue}
            initialStatus={initialStatus}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                handleBlur,
                isValid,
                dirty,
                status,
                setStatus,
                isSubmitting,
            }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col ">
                    <div className="w-full h-[1px] bg-purple-strokeLight dark:bg-purple-stroke mb-3"></div>
                    <CustomField
                        name="name"
                        label={getTranslation("nameLabel")}
                        value={values.name}
                        type="text"
                        placeholder={getTranslation("namePlaceholder")}
                        isError={!!(errors.name && touched.name)}
                        autoFocus={true}
                        handleBlur={handleBlur}
                        status={status}
                        setStatus={setStatus}
                    />
                    <CustomField
                        name="email"
                        label={getTranslation("emailLabel")}
                        value={values.email}
                        type="email"
                        placeholder={getTranslation("emailPlaceholder")}
                        isError={!!(errors.email && touched.email)}
                        autoFocus={false}
                        handleBlur={handleBlur}
                        status={status}
                        setStatus={setStatus}
                    />
                    <CustomField
                        name="message"
                        label={getTranslation("questionLabel")}
                        value={values.message}
                        type="textarea"
                        placeholder={getTranslation("questionLabel")}
                        isError={!!(errors.message && touched.message)}
                        autoFocus={false}
                        handleBlur={handleBlur}
                        status={status}
                        setStatus={setStatus}
                    />
                    <div className="my-[32px] pc:mt-5 pc:mb-10 text-xs tab:text-sm flex flex-col gap-2">
                        <p
                            className={
                                (errors.name && touched.name) ||
                                (errors.email && touched.email) ||
                                (errors.message && touched.message)
                                    ? "text-error"
                                    : "text-inherit"
                            }
                        >
                            {getTranslation("requiredField")}
                        </p>
                        <p className="max-w-[65%]">
                            {getTranslation("informedAgreement")}
                            <a
                                href={policyURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-130 dark:text-purple-50"
                            >
                                {getTranslation("rulesLink")}
                            </a>
                        </p>
                    </div>
                    <div className="relative mx-auto">
                        <Button
                            type="submit"
                            color="grey"
                            className="mx-auto"
                            disabled={!dirty || !isValid}
                        >
                            {getTranslation("submitButton")}
                        </Button>
                        <IconLoader
                            className={`${isSubmitting ? "block" : "hidden"} absolute top-[4px] left-[4px] tab:top-[8px]
                             tab:left-[8px] w-[40px] h-[40px] animate-rotation`}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};
