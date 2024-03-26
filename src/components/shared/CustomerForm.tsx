"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useTranslations } from "next-intl";
import { Button } from "./Button";

const labelStyles =
    "relative w-full h-[32px] my-3 border-b-[1px] text-baseb tansition-color duration-300 ease-out";
const textLabelStyles = "absolute tansition-transform duration-300 ease-out";
const fieldStyles =
    "block appearance-none w-full h-full bg-transparent focus:outline-none font-caviar text-baseb placeholder-purple-stroke";

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
            {({ values, status, setStatus, dirty, isValid }) => (
                <Form className="flex flex-col items-center mt-[16px]">
                    <label
                        className={`${labelStyles} ${values.name || status === "name" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.name || status === "name" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("namePlaceholder")}
                        </p>
                        <Field
                            name="name"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "name"
                                    ? getTranslation("namePlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("name")}
                            onBlur={() => setStatus("")}
                            className={fieldStyles}
                        ></Field>
                        <ErrorMessage name="name" component="p"></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${values.email || status === "email" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.email || status === "email" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("emailPlaceholder")}
                        </p>
                        <Field
                            name="email"
                            type="email"
                            autoComplete="on"
                            placeholder={
                                status === "email"
                                    ? getTranslation("emailPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("email")}
                            onBlur={() => setStatus("")}
                            className={fieldStyles}
                        ></Field>
                        <ErrorMessage name="email" component="p"></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${values.telegram || status === "telegram" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.telegram || status === "telegram" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("telegramPlaceholder")}
                        </p>
                        <Field
                            name="telegram"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "telegram"
                                    ? getTranslation("telegramPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("telegram")}
                            onBlur={() => setStatus("")}
                            className={fieldStyles}
                        ></Field>
                        <ErrorMessage
                            name="telegram"
                            component="p"
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${values.linkedin || status === "linkedin" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.linkedin || status === "linkedin" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("linkedinPlaceholder")}
                        </p>
                        <Field
                            name="linkedin"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "linkedin"
                                    ? getTranslation("linkedinPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("linkedin")}
                            onBlur={() => setStatus("")}
                            className={fieldStyles}
                        ></Field>
                        <ErrorMessage
                            name="linkedin"
                            component="p"
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${values.instagram || status === "instagram" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.instagram || status === "instagram" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("instagramPlaceholder")}
                        </p>
                        <Field
                            name="instagram"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "instagram"
                                    ? getTranslation("instagramPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("instagram")}
                            onBlur={() => setStatus("")}
                            className={fieldStyles}
                        ></Field>
                        <ErrorMessage
                            name="instagram"
                            component="p"
                        ></ErrorMessage>
                    </label>
                    <label
                        className={`${labelStyles} ${values.facebook || status === "facebook" ? "border-grey" : "border-purple-stroke"}`}
                    >
                        <p
                            className={`${textLabelStyles} ${values.facebook || status === "facebook" ? "top-[-55%] text-xxs" : "top-[10%] text-base"}`}
                        >
                            {getTranslation("facebookPlaceholder")}
                        </p>
                        <Field
                            name="facebook"
                            type="text"
                            autoComplete="on"
                            placeholder={
                                status === "facebook"
                                    ? getTranslation("facebookPlaceholder")
                                    : ""
                            }
                            onFocus={() => setStatus("facebook")}
                            onBlur={() => setStatus("")}
                            className={fieldStyles}
                        ></Field>
                        <ErrorMessage
                            name="facebook"
                            component="p"
                        ></ErrorMessage>
                    </label>
                    <Field
                        as="textarea"
                        name="message"
                        type="text"
                        autoComplete="on"
                        placeholder={getTranslation("messagePlaceholder")}
                        className="block appearance-none w-full h-[96px] mb-8 bg-transparent focus:outline-none border-b-[1px]
                         border-purple-stroke font-caviar text-baseb placeholder:text-caviar placeholder-purple-stroke"
                    ></Field>
                    <ErrorMessage name="message" component="p"></ErrorMessage>
                    <p className="mb-2 text-xs">
                        {getTranslation("requiredField")}
                    </p>
                    <p className="mb-8 text-xs">
                        {getTranslation("informedAgreement")}{" "}
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-50"
                        >
                            {getTranslation("rulesLink")}
                        </a>
                    </p>
                    <Button
                        type="submit"
                        disabled={!(dirty && isValid)}
                        color="grey"
                    >
                        {getTranslation("submitButton")}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
