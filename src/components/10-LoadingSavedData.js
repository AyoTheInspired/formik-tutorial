import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

// PICK UP FROM LESSON 22

// ##############################################
const initialValues = {
	name: "",
	email: "",
	channel: "",
	comments: "",
	address: "",
	social: {
		facebook: "",
		twitter: "",
	},
	phNumbers: [""],
};

const savedValues = {
	name: "Ayo",
	email: "ayo@gmail.com",
	channel: "Inspired channel",
	comments: "Welcome here",
	address: "",
	social: {
		facebook: "",
		twitter: "",
	},
	phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
	console.log("onSubmitProps", onSubmitProps);
	// Make API call for submission here
	onSubmitProps.setSubmitting(false);
};
// ##############################################

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email format").required("Required"),
	channel: Yup.string().required("Required"),
});

function LoadingSavedData() {
	const [formValues, setFormValues] = useState(null);

	return (
		<Formik
			initialValues={formValues || initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			enableReinitialize
			validateOnMount>
			{(formik) => {
				return (
					<Form>
						<div className="form-control">
							<label htmlFor="name">Name</label>
							<Field type="text" name="name" id="name" />
							<ErrorMessage name="name" component={TextError} />
						</div>

						<div className="form-control">
							<label htmlFor="email">Email</label>
							<Field type="email" name="email" id="email" />
							<ErrorMessage name="email" />
						</div>

						<div className="form-control">
							<label htmlFor="channel">Channel</label>
							<Field type="text" name="channel" id="channel" />
							<ErrorMessage name="channel">
								{(errorMsg) => <div className="error">{errorMsg}</div>}
							</ErrorMessage>
						</div>

						<div className="form-control">
							<label htmlFor="comments">Comments</label>
							<Field as="textarea" id="comments" name="comments" />
						</div>

						<div className="form-control">
							<label htmlFor="address">Address</label>
							<Field type="text" name="address">
								{(props) => {
									const { field, form, meta } = props;
									return (
										<div>
											<input type="text" id="address" {...field} />
											{meta.touched && meta.error && <div>{meta.error}</div>}
										</div>
									);
								}}
							</Field>
						</div>

						<div className="form-control">
							<label htmlFor="facebook">Facebook</label>
							<Field id="facebook" name="social.facebook" />
						</div>

						<div className="form-control">
							<label htmlFor="twitter">Twitter</label>
							<Field id="twitter" name="social.twitter" />
						</div>

						<div className="form-control">
							<label htmlFor="twitter">List of Phone Numbers</label>
							<FieldArray name="social.twitter" name="phNumbers">
								{(fieldArrayProps) => {
									return <div>Field Array</div>;
								}}
							</FieldArray>
						</div>

						<button type="button" onClick={() => setFormValues(savedValues)}>
							Load Saved Data
						</button>

						<button type="submit" disabled={!formik.isValid}>
							Submit
						</button>
					</Form>
				);
			}}
		</Formik>
	);
}

export default LoadingSavedData;
