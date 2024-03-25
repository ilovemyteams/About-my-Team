import { ErrorMessage, Field, Form, Formik } from "formik";

export const CustomerForm = () => {
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
                    <label htmlFor="name"></label>
                    <Field name="name" type="text" autoComplete="on"></Field>
                    <ErrorMessage name="name" component="p"></ErrorMessage>
                    <label htmlFor="email"></label>
                    <Field name="email" type="text" autoComplete="on"></Field>
                    <ErrorMessage name="email" component="p"></ErrorMessage>
                    <label htmlFor="telegram"></label>
                    <Field
                        name="telegram"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="telegram" component="p"></ErrorMessage>
                    <label htmlFor="linkedin"></label>
                    <Field
                        name="linkedin"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="linkedin" component="p"></ErrorMessage>
                    <label htmlFor="instagram"></label>
                    <Field
                        name="instagram"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="instagram" component="p"></ErrorMessage>
                    <label htmlFor="facebook"></label>
                    <Field
                        name="facebook"
                        type="text"
                        autoComplete="on"
                    ></Field>
                    <ErrorMessage name="facebook" component="p"></ErrorMessage>
                    <label htmlFor="message"></label>
                    <Field name="message" type="text" autoComplete="on"></Field>
                    <ErrorMessage name="message" component="p"></ErrorMessage>
                    <button
                        type="submit"
                        disabled={!(dirty && isValid)}
                    ></button>
                </Form>
            )}
        </Formik>
    );
};
