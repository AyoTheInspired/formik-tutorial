import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// THIS FURTHER REDUCES BOILER PLATE CODE BY USING FORMIK'S COMPONENTS SUCH AS IMPORTED ABOVE. WHAT'S MORE, READABILITY IS GREATLY IMPROVED, AND CODE LINES GREATLY REDUCED

// ##############################################
const initialValues = {
	name: "",
	email: "",
	channel: "",
};

const onSubmit = (values) => {
	console.log("values", values);
};
// ##############################################

const validationSchema = Yup.object({
	name: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email format").required("Required"),
	channel: Yup.string().required("Required"),
});

function FormikComponents() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			<Form>
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<Field type="text" name="name" id="name" />
					<ErrorMessage name="name" />
				</div>

				<div className="form-control">
					<label htmlFor="email">Email</label>
					<Field type="email" name="email" id="email" />
					<ErrorMessage name="email" />
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<Field type="text" name="channel" id="channel" />
					<ErrorMessage name="channel" />
				</div>

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
}

export default FormikComponents;
