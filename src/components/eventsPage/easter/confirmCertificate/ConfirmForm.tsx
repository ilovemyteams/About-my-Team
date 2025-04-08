import axios from "axios";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { CustomField } from "@/src/components/shared/FormElements/CustomField";
import { PolicyLabel } from "@/src/components/shared/FormElements/PolicyLabel";
import { SubmitButton } from "@/src/components/shared/FormElements/SubmitButton";
import { ConfirmDiscountValidation } from "@/src/schemas/confirmDisountValidationSchema";
import { FormInModalProps } from "@/types/FormInModalProps";

interface FormValues {
    name: string;
    email: string;
    comment: string;
}

export const ConfirmForm = ({ notificationHandler }: FormInModalProps) => {
    const getTranslation = useTranslations("CustomerForm");
    const easterTranslation = useTranslations("EasterEvent");

    const validationSchema = ConfirmDiscountValidation();

    const initialValue: FormValues = {
        name: "",
        email: "",
        comment: "",
    };

    const onSubmit = async (values: FormValues) => {
        const onSendData = async () => {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                comment: values.comment.trim(),
            };

            await axios({
                method: "post",
                url: "/api/confirmDiscount",
                data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            localStorage.setItem("easter_sertificate", "true");
            window.dispatchEvent(new Event("easter-sertificate-obtained"));
        };
        try {
            await notificationHandler(onSendData);
            // sendGTMEvent({
            //     event: "get_certificate",
            // });
        } catch (error) {
            return error;
        }
    };

    return (
        <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            initialStatus={"name"}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                isValid,
                dirty,
                status,
                setStatus,
                isSubmitting,
            }) => {
                return (
                    <Form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center"
                    >
                        <p className="text-base tab:w-[95%] text-purple-200 dark:text-grey mx-auto text-center mb-6 tab:text-lg25 pc:mb-12">
                            {easterTranslation("confirmFormText")}
                        </p>

                        <CustomField
                            name="name"
                            label={getTranslation("nameLabel")}
                            value={values.name}
                            type="text"
                            placeholder={getTranslation("namePlaceholder")}
                            isError={!!(touched.name && errors.name)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="email"
                            label={getTranslation("emailLabel")}
                            value={values.email}
                            type="email"
                            placeholder={getTranslation("emailPlaceholder")}
                            isError={!!(errors.email && touched.email)}
                            setStatus={setStatus}
                            status={status}
                        />

                        <CustomField
                            name="comment"
                            label={easterTranslation("comment")}
                            value={values.email}
                            type="text"
                            placeholder={easterTranslation("comment")}
                            isError={false}
                            setStatus={setStatus}
                            status={status}
                        />

                        <div className="my-[32px] pc:mt-5 pc:mb-10 text-xs tab:text-sm flex flex-col gap-2 self-start">
                            <p
                                className={
                                    (errors.name && touched.name) ||
                                    (errors.email && touched.email)
                                        ? "text-error"
                                        : "text-inherit"
                                }
                            >
                                {getTranslation("requiredField")}
                            </p>
                            <PolicyLabel />
                            <p className="text-xxs tab:text-xs">
                                {easterTranslation("confirmFormCaption")}
                            </p>
                        </div>
                        <SubmitButton
                            isActiveLoader={isSubmitting}
                            isDisabled={!dirty || !isValid || isSubmitting}
                            title={getTranslation("submitButton")}
                        />
                    </Form>
                );
            }}
        </Formik>
    );
};
