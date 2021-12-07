import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const radioOptions = [
	{ key: "Option 1", value: "option1" },
	{ key: "Option 2", value: "option2" },
	{ key: "Option 3", value: "option3" },
];

const drodownOptions = [
	{ key: "Select an option", value: "" },
	{ key: "Option 1", value: "option1" },
	{ key: "Option 2", value: "option2" },
	{ key: "Option 3", value: "option3" },
];

const checkboxOptions = [
	{ key: "Option 1", value: "C option1" },
	{ key: "Option 2", value: "C option2" },
	{ key: "Option 3", value: "C option3" },
];

function FormikContainer() {
	const initialValues = {
		email: "",
		description: "",
		selectOption: "",
		radioOption: "",
		checkboxOption: [],
		birthDate: null,
	};
	const validationSchema = Yup.object({
		email: Yup.string().email("Invalid email format").required("Required"),
		description: Yup.string().required("Required"),
		selectOption: Yup.string().required("Required"),
		radioOption: Yup.string().required("Required"),
		checkboxOption: Yup.array().required("Required by checkbox"),
		birthDate: Yup.date().required("Required").nullable(),
	});
	const onSubmit = (values) => console.log("vals are", values);

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formik) => (
				<Form>
					<FormikControl
						control="input"
						type="email"
						label="Email"
						name="email"
					/>

					<FormikControl
						control="textarea"
						label="Description"
						name="description"
					/>

					<FormikControl
						control="select"
						label="Select a Topic"
						name="selectOption"
						options={drodownOptions}
					/>

					<FormikControl
						control="radio"
						label="Radio Topic"
						name="radioOption"
						options={radioOptions}
					/>

					<FormikControl
						control="checkbox"
						label="Checkbox Topics"
						name="checkboxOption"
						options={checkboxOptions}
					/>

					<FormikControl control="date" label="Pick a date" name="birthDate" />

					<button type="submit">Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default FormikContainer;
