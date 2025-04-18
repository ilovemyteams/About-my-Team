import { sendGTMEvent } from "@next/third-parties/google";
import axios from "axios";
import { Form, Formik } from "formik";
import { useLocale, useTranslations } from "next-intl";

import { CustomField } from "@/src/components/shared/FormElements/CustomField";
import { SubmitButton } from "@/src/components/shared/FormElements/SubmitButton";
import { Link } from "@/src/i18n/routing";
import { LandingFormValidation } from "@/src/schemas/landingFormValidationSchema";
import { selectedLink } from "@/src/utils/selectedLink";
import { FormInModalProps } from "@/types/FormInModalProps";

interface FormValues {
    name: string;
    email: string;
    media: string;
    whyLanding: string;
}

export const LandingForm = ({ notificationHandler }: FormInModalProps) => {
    const getTranslation = useTranslations("EventsPage.Easter");
    const customFormTranslation = useTranslations("CustomerForm");
    const locale = useLocale();
    const policyURL = selectedLink(locale);

    const validationSchema = LandingFormValidation();

    const initialValue: FormValues = {
        name: "",
        email: "",
        media: "",
        whyLanding: "",
    };

    const onSubmit = async (values: FormValues) => {
        const onSendData = async () => {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                media: values.media.trim(),
                whyLanding: values.whyLanding.trim(),
            };

            await axios({
                method: "post",
                url: "/api/landing",
                data,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            localStorage.setItem("easter_participated", "true");
        };
        try {
            await notificationHandler(onSendData);
            sendGTMEvent({
                event: "easter_landing_submit",
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
                        <CustomField
                            name="name"
                            label={customFormTranslation("nameLabel")}
                            value={values.name}
                            type="text"
                            placeholder={customFormTranslation(
                                "namePlaceholder"
                            )}
                            isError={!!(touched.name && errors.name)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="email"
                            label={customFormTranslation("emailLabel")}
                            value={values.email}
                            type="email"
                            placeholder={customFormTranslation(
                                "emailPlaceholder"
                            )}
                            isError={!!(errors.email && touched.email)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="media"
                            label={getTranslation("landingFormMedia")}
                            value={values.media}
                            type="textarea"
                            placeholder={getTranslation("mediaPlaceholder")}
                            isError={!!(errors.media && touched.media)}
                            setStatus={setStatus}
                            status={status}
                            className="pt-3 tab:pt-1"
                        />
                        <CustomField
                            name="whyLanding"
                            label={getTranslation("landingFormComment")}
                            value={values.whyLanding}
                            type="textarea"
                            placeholder={customFormTranslation("messageLabel")}
                            isError={
                                !!(errors.whyLanding && touched.whyLanding)
                            }
                            setStatus={setStatus}
                            status={status}
                        />

                        <div className="my-[32px] pc:mt-5 pc:mb-10 text-xs tab:text-sm flex flex-col gap-2 self-start">
                            <p
                                className={
                                    (errors.name && touched.name) ||
                                    (errors.email && touched.email) ||
                                    (errors.media && touched.media) ||
                                    (errors.whyLanding && touched.whyLanding)
                                        ? "text-error"
                                        : "text-inherit"
                                }
                            >
                                {customFormTranslation("requiredField")}
                            </p>
                            <p>
                                {getTranslation.rich("landingFormTerms", {
                                    policyLink: chunk => (
                                        <a
                                            href={policyURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-130 dark:text-purple-50 "
                                        >
                                            {chunk}
                                        </a>
                                    ),
                                    rules: chunk => (
                                        <Link
                                            href="/events#condition"
                                            onClick={() =>
                                                sendGTMEvent({
                                                    event: "easter_read_rules",
                                                })
                                            }
                                            target="_blank"
                                            className="text-purple-130 dark:text-purple-50 "
                                        >
                                            {chunk}
                                        </Link>
                                    ),
                                })}
                            </p>
                        </div>
                        <SubmitButton
                            isActiveLoader={isSubmitting}
                            isDisabled={!dirty || !isValid || isSubmitting}
                            title={customFormTranslation("submitButton")}
                        />
                    </Form>
                );
            }}
        </Formik>
    );
};
