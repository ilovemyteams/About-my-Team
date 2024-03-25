"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";
import { Button } from "./Button";

export const CustomerForm = () => {
    const getTranslation = useTranslations("CustomerForm");

    const initialValues = {
        name: "",
        email: "",
        telegram: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        message: "",
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ dirty, isValid }) => (
                <Form>
                    <label htmlFor="name">
                        {getTranslation("namePlaceholder")}
                    </label>
                    <Field name="name" type="text" autoComplete="on"></Field>
                    <ErrorMessage name="name" component="p"></ErrorMessage>
                    <label htmlFor="email">
                        {getTranslation("emailPlaceholder")}
                    </label>
                    <Field name="email" type="text" autoComplete="on"></Field>
                    <ErrorMessage name="email" component="p"></ErrorMessage>
                    <label htmlFor="telegram">
                        {getTranslation("telegramPlaceholder")}
                    </label>
                    <Field
                        name="telegram"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="telegram" component="p"></ErrorMessage>
                    <label htmlFor="linkedin">
                        {getTranslation("linkedinPlaceholder")}
                    </label>
                    <Field
                        name="linkedin"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="linkedin" component="p"></ErrorMessage>
                    <label htmlFor="instagram">
                        {getTranslation("instagramPlaceholder")}
                    </label>
                    <Field
                        name="instagram"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="instagram" component="p"></ErrorMessage>
                    <label htmlFor="facebook">
                        {getTranslation("facebookPlaceholder")}
                    </label>
                    <Field
                        name="facebook"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="facebook" component="p"></ErrorMessage>
                    <label htmlFor="message">
                        {getTranslation("messagePlaceholder")}
                    </label>
                    <Field name="message" type="text" autoComplete="on"></Field>
                    <ErrorMessage name="message" component="p"></ErrorMessage>
                    <p>{getTranslation("requiredField")}</p>
                    <p>
                        {getTranslation("informedAgreement")}{" "}
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            {getTranslation("rulesLink")}
                        </a>
                    </p>
                    <Button type="submit" disabled={!(dirty && isValid)}>
                        {getTranslation("submitButton")}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
