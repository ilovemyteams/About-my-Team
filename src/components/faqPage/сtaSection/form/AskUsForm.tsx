import axios from "axios";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { CustomField } from "@/src/components/shared/FormElements/CustomField";
import { PolicyLabel } from "@/src/components/shared/FormElements/PolicyLabel";
import { SubmitButton } from "@/src/components/shared/FormElements/SubmitButton";
import { FaqWriteQuestionValidation } from "@/src/schemas/faqWriteQuestionValidationSchema";
import { FormInModalProps } from "@/types/FormInModalProps";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

export const FaqCtaForm = ({ notificationHandler }: FormInModalProps) => {
    const getTranslation = useTranslations("CustomerForm");

    const validationSchema = FaqWriteQuestionValidation();

    const initialValue: FormValues = {
        name: "",
        email: "",
        message: "",
    };

    const onSubmit = async (values: FormValues) => {
        const onSendData = async () => {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                message: values.message.trim(),
            };
            await axios({
                method: "post",
                url: "/api/sendQuestionData",
                data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        };

        await notificationHandler(onSendData);
    };

    return (
        <Formik
            initialValues={initialValue}
            initialStatus={"name"}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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
            }) => (
                <Form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center"
                >
                    <div className="w-full h-[1px] bg-purple-strokeLight dark:bg-purple-stroke mb-3"></div>
                    <CustomField
                        name="name"
                        label={getTranslation("nameLabel")}
                        value={values.name}
                        type="text"
                        placeholder={getTranslation("namePlaceholder")}
                        isError={!!(errors.name && touched.name)}
                        autoFocus={true}
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
                        <PolicyLabel />
                    </div>
                    <SubmitButton
                        isActiveLoader={isSubmitting}
                        isDisabled={!dirty || !isValid || isSubmitting}
                        title={getTranslation("submitButton")}
                    />
                </Form>
            )}
        </Formik>
    );
};
