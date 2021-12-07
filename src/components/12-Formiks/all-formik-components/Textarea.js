import { Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "../../TextError";

function Textarea({ label, name, ...rest }) {
	return (
		<div className="form-control">
			<label htmlFor={name}>{label} </label>
			<Field as="textarea" id={name} name={name} {...rest} />
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Textarea;