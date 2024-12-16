"use client";
import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";

import { LandingFormValidation } from "@/src/schemas/landingFormValidationSchema";
import { FormInModalProps } from "@/types/FormInModalProps";

import { CustomField } from "../shared/FormElements/CustomField";
import { SubmitButton } from "../shared/FormElements/SubmitButton";
import { ChristmasCustomField } from "./ChristmasCustomField";
import { PolicyLabelEvent } from "./PolicyLabelEvent";

export interface ValuesChristmasFormType {
    name: string;
    email: string;
    socialMediaLink: string;
    productOrService: string;
    whyLanding: string;
    mostImportant: string;
}

export const ChristmasForm = ({ notificationHandler }: FormInModalProps) => {
    const getTranslation = useTranslations();

    const validationSchema = LandingFormValidation();

    const initialValues = {
        name: "",
        email: "",
        socialMediaLink: "",
        productOrService: "",
        whyLanding: "",
        mostImportant: "",
    };

    const initialStatus = "name";

    const submitForm = async (
        values: ValuesChristmasFormType,
        { resetForm }: FormikHelpers<ValuesChristmasFormType>
    ) => {
        const onSendData = async () => {
            const data = {
                name: values.name.trim(),
                email: values.email.toLowerCase().trim(),
                socialMediaLink: values.socialMediaLink.trim(),
                productOrService: values.productOrService.trim(),
                whyLanding: values.whyLanding.trim(),
                mostImportant: values.mostImportant.trim(),
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
            resetForm();
        } catch (error) {
            return error;
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => submitForm(values, actions)}
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
                        <CustomField
                            name="name"
                            value={values.name}
                            label={getTranslation("CustomerForm.nameLabel")}
                            placeholder={getTranslation(
                                "CustomerForm.namePlaceholder"
                            )}
                            type="text"
                            isError={!!(touched.name && errors.name)}
                            setStatus={setStatus}
                            status={status}
                        />
                        <CustomField
                            name="email"
                            value={values.email}
                            label={getTranslation("CustomerForm.emailLabel")}
                            placeholder={getTranslation(
                                "CustomerForm.emailPlaceholder"
                            )}
                            type="text"
                            isError={!!(touched.email && errors.email)}
                            setStatus={setStatus}
                            status={status}
                        />

                        <ChristmasCustomField
                            name="socialMediaLink"
                            value={values.socialMediaLink}
                            label={getTranslation("Christmas.socialMediaLink")}
                            placeholder={getTranslation(
                                "Christmas.placeholder"
                            )}
                            type="textarea"
                            isError={
                                !!(
                                    touched.socialMediaLink &&
                                    errors.socialMediaLink
                                )
                            }
                            setStatus={setStatus}
                            status={status}
                        />

                        <ChristmasCustomField
                            name="productOrService"
                            value={values.productOrService}
                            label={getTranslation("Christmas.productOrService")}
                            placeholder={getTranslation(
                                "Christmas.placeholder"
                            )}
                            type="textarea"
                            isError={
                                !!(
                                    touched.productOrService &&
                                    errors.productOrService
                                )
                            }
                            setStatus={setStatus}
                            status={status}
                        />
                        <ChristmasCustomField
                            name="whyLanding"
                            value={values.whyLanding}
                            label={getTranslation("Christmas.whyLanding")}
                            placeholder={getTranslation(
                                "Christmas.placeholder"
                            )}
                            type="textarea"
                            isError={
                                !!(touched.whyLanding && errors.whyLanding)
                            }
                            setStatus={setStatus}
                            status={status}
                        />
                        <ChristmasCustomField
                            name="mostImportant"
                            value={values.mostImportant}
                            label={getTranslation("Christmas.mostImportant")}
                            placeholder={getTranslation(
                                "Christmas.placeholder"
                            )}
                            type="textarea"
                            isError={
                                !!(
                                    touched.mostImportant &&
                                    errors.mostImportant
                                )
                            }
                            setStatus={setStatus}
                            status={status}
                        />

                        <div className="w-full mt-[32px] pc:mt-[20px] mb-[32px] pc:mb-[40px]">
                            <p
                                className={`max-w-[372px] mb-2 text-xs tab:text-sm ${
                                    (touched.name && errors.name) ||
                                    (touched.email && errors.email) ||
                                    (touched.socialMediaLink &&
                                        errors.socialMediaLink) ||
                                    (touched.productOrService &&
                                        errors.productOrService) ||
                                    (touched.whyLanding && errors.whyLanding) ||
                                    (touched.mostImportant &&
                                        errors.mostImportant)
                                        ? "text-error"
                                        : "text-purple-200 "
                                }`}
                            >
                                {getTranslation("CustomerForm.requiredField")}
                            </p>
                            <PolicyLabelEvent />
                        </div>
                        <SubmitButton
                            isActiveLoader={isSubmitting}
                            isDisabled={!(dirty && isValid) || isSubmitting}
                            title={getTranslation("Christmas.submitBtn")}
                        />
                    </Form>
                );
            }}
        </Formik>
    );
};