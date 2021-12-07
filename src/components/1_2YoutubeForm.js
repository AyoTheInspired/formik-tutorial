import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			channel: "",
		},

		onSubmit: (values) => {
			console.log("values", values);
		},

		validate: (values) => {
			let errors = {};

			if (!values.name) {
				errors.name = "Required";
			}

			if (!values.email) {
				errors.email = "Required";
			} else if (
				!/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
					values.email
				)
			) {
				errors.email = "Invalid email format";
			}

			if (!values.channel) {
				errors.channel = "Required";
			}

			return errors;
		},
	});

	// console.log("form values", formik.values);
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.name}
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
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.email}
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
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.channel}
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

export default YoutubeForm;
