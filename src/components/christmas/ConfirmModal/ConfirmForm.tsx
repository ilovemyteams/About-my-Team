import axios from "axios";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { ConfirmDiscountValidation } from "@/src/schemas/confirmFormValidation";
import { FormInModalProps } from "@/types/FormInModalProps";

import { CustomField } from "../../shared/FormElements/CustomField";
import { PolicyLabel } from "../../shared/FormElements/PolicyLabel";
import { SubmitButton } from "../../shared/FormElements/SubmitButton";

export interface ValuesWriteUsFormType {
    name: string;
    email: string;
    telegram: string;
    linkedin: string;
    instagram: string;
    facebook: string;
    message: string;
}

interface ConfirmFormProps extends FormInModalProps {
    discount: number | null;
}

export const ConfirmForm = ({
    notificationHandler,
    discount,
}: ConfirmFormProps) => {
    const getFormTranslation = useTranslations("CustomerForm");
    const getTextTranslation = useTranslations("Christmas");

    const validationSchema = ConfirmDiscountValidation();

    const initialValues = {
        name: "",
        email: "",
        telegram: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        message: "",
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
                discount,
            };
            await axios({
                method: "post",
                url: "/api/confirmDiscount",
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
                return (
                    <>
                        <div className="mb-4">
                            <h2 className="text-purple-200 dark:text-white-200 font-caviar text-3xl tab:text-4xl pc:text-5xl mb-2">
                                {getTextTranslation("confirmTitle") +
                                    ` ${discount}%`}
                            </h2>
                            <p className="text-base">
                                {getTextTranslation("confirmText")}
                            </p>
                            <p className="text-base text-purple-50">
                                {getTextTranslation("confirmCaption")}
                            </p>
                        </div>
                        <Form className="flex flex-col items-center pt-[12px]">
                            <CustomField
                                name="name"
                                value={values.name}
                                label={getFormTranslation("nameLabel")}
                                placeholder={getFormTranslation(
                                    "namePlaceholder"
                                )}
                                type="text"
                                isError={!!(touched.name && errors.name)}
                                setStatus={setStatus}
                                status={status}
                            />
                            <CustomField
                                name="email"
                                value={values.email}
                                label={getFormTranslation("emailLabel")}
                                placeholder={getFormTranslation(
                                    "emailPlaceholder"
                                )}
                                type="text"
                                isError={!!(touched.email && errors.email)}
                                setStatus={setStatus}
                                status={status}
                            />
                            <CustomField
                                name="telegram"
                                value={values.telegram}
                                label={getFormTranslation("telegramLabel")}
                                placeholder={getFormTranslation(
                                    "telegramPlaceholder"
                                )}
                                type="text"
                                isError={
                                    !!(touched.telegram && errors.telegram)
                                }
                                setStatus={setStatus}
                                status={status}
                            />
                            <CustomField
                                name="linkedin"
                                value={values.linkedin}
                                label={getFormTranslation("linkedinLabel")}
                                placeholder={getFormTranslation(
                                    "linkedinPlaceholder"
                                )}
                                type="text"
                                isError={
                                    !!(touched.linkedin && errors.linkedin)
                                }
                                setStatus={setStatus}
                                status={status}
                            />
                            <CustomField
                                name="instagram"
                                value={values.instagram}
                                label={getFormTranslation("instagramLabel")}
                                placeholder={getFormTranslation(
                                    "instagramPlaceholder"
                                )}
                                type="text"
                                isError={
                                    !!(touched.instagram && errors.instagram)
                                }
                                setStatus={setStatus}
                                status={status}
                            />
                            <CustomField
                                name="facebook"
                                value={values.facebook}
                                label={getFormTranslation("facebookLabel")}
                                placeholder={getFormTranslation(
                                    "facebookPlaceholder"
                                )}
                                type="text"
                                isError={
                                    !!(touched.facebook && errors.facebook)
                                }
                                setStatus={setStatus}
                                status={status}
                            />
                            <CustomField
                                name="message"
                                value={values.message}
                                label={getFormTranslation("messageNotReqLabel")}
                                placeholder={getFormTranslation(
                                    "messagePlaceholder"
                                )}
                                type="textarea"
                                isError={!!(touched.message && errors.message)}
                                setStatus={setStatus}
                                status={status}
                            />

                            <div className="w-full mt-[32px] pc:mt-[20px] mb-[32px] pc:mb-[40px]">
                                <p
                                    className={`max-w-[372px] mb-2 text-xs tab:text-sm ${(touched.name && errors.name) || (touched.email && errors.email) || (touched.message && errors.message) ? "text-error" : "text-greyLight dark:text-grey"}`}
                                >
                                    {getFormTranslation("requiredField")}
                                </p>
                                <PolicyLabel />
                            </div>
                            <SubmitButton
                                isActiveLoader={isSubmitting}
                                isDisabled={!(dirty && isValid) || isSubmitting}
                                title={getFormTranslation("submitButton")}
                            />
                        </Form>
                    </>
                );
            }}
        </Formik>
    );
};
