import { sendGTMEvent } from "@next/third-parties/google";
import axios from "axios";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";

import { CustomField } from "@/src/components/shared/FormElements/CustomField";
import { PolicyLabel } from "@/src/components/shared/FormElements/PolicyLabel";
import { SubmitButton } from "@/src/components/shared/FormElements/SubmitButton";
import { ConfirmDiscountValidation } from "@/src/schemas/confirmFormValidation";
import { FormInModalProps } from "@/types/FormInModalProps";

interface FormValues {
    name: string;
    email: string;
}

export const ConfirmForm = ({ notificationHandler }: FormInModalProps) => {
    const getTranslation = useTranslations("CustomerForm");
    const getValentinesTranslation = useTranslations("Valentines");

    const validationSchema = ConfirmDiscountValidation();

    const initialValue: FormValues = {
        name: "",
        email: "",
    };

    const onSubmit = async (values: FormValues) => {
        const onSendData = async () => {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
            };
            await axios({
                method: "post",
                url: "/api/christmasLanding",
                data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        };
        try {
            await notificationHandler(onSendData);
            sendGTMEvent({
                event: "get_certificate",
            });
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
                        <p className="text-base tab:w-[85%] mx-auto text-center mb-4 pc:mb-12">
                            {getValentinesTranslation("confirmationText")}
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
