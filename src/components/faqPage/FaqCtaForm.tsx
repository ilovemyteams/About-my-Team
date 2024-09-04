import { Form, Formik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

import { FaqWriteQuestionValidation } from "@/src/schemas/faqWriteQuestionValidationSchema";
import { selectedLink } from "@/src/utils/selectedLink";

import { Button } from "../shared/Button";
import { IconCloseX } from "../shared/Icons/IconCloseX";
import { IconLoader } from "../shared/Icons/IconLoader";
import { CustomField } from "./CustomField";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

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
    const [isLoading, setIsLoading] = useState(false);

    const getTranslation = useTranslations("CustomerForm");

    const validationSchema = FaqWriteQuestionValidation();

    const initialValue: FormValues = {
        name: "",
        email: "",
        message: "",
    };

    const locale = useLocale();
    const policyURL = selectedLink(locale);

    const onSubmit = async (values: FormValues) => {
        setIsLoading(true);
        try {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                message: values.message.trim(),
            };
            console.log(data);

            onClose();
        } catch (error) {
            setIsError(true);
            return error;
        } finally {
            setIsLoading(false);
            setIsNotification(true);
        }
    };

    return (
        <>
            <button
                aria-label="close modal"
                onClick={onClose}
                className="absolute top-2 pc:top-3 right-4 tab:right-6 pc:right-4 w-[48px] h-[48px] cursor-pointer bg-transparent flex items-center justify-center rounded-full dark:hover:bg-purple-stroke03 dark:focus:bg-purple-stroke03 "
            >
                <IconCloseX />
            </button>
            <Formik
                initialValues={initialValue}
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
                        />
                        <CustomField
                            name="message"
                            label={"Ваше запитання*"}
                            value={values.message}
                            type="textarea"
                            placeholder={"Ваше запитання*"}
                            isError={!!(errors.message && touched.message)}
                            autoFocus={false}
                            handleBlur={handleBlur}
                        />
                        <div className="my-[32px] pc:mt-5 pc:mb-10 text-xs tab:text-sm flex flex-col gap-2">
                            <p
                                className={
                                    isValid ? "text-inherit" : "text-error"
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
                                disabled={
                                    !isValid ||
                                    !Object.values(touched).find(item => item)
                                }
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
        </>
    );
};
