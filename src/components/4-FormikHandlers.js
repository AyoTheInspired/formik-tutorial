import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// THIS HELPS WITH REMOVING BOILER PLATE CODE SUCH AS THE ONBLUR, ONCHANGE, AND VALUE PROPS PASSED TO EACH INPUT

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

function FormikHandlers() {
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
		// validate,
	});
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						{...formik.getFieldProps("name")}
					/>
					{formik.errors.name && formik.touched.name && (
						<div className="error">{formik.errors.name}</div>
					)}
				</div>

				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						htmlFor="email"
						id="email"
						{...formik.getFieldProps("email")}
					/>
					{formik.errors.email && formik.touched.email && (
						<div className="error">{formik.errors.email}</div>
					)}
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						name="channel"
						id="channel"
						{...formik.getFieldProps("channel")}
					/>
					{formik.errors.channel && formik.touched.channel && (
						<div className="error">{formik.errors.channel}</div>
					)}
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default FormikHandlers;
