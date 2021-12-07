import { Field, ErrorMessage } from "formik";
import React from "react";
import TextError from "../../TextError";

function CheckboxGroup({ label, name, options, ...rest }) {
	return (
		<div className="form-control">
			<label htmlFor={name}>{label} </label>
			<Field as="radio" id={name} name={name} {...rest}>
				{({ field }) => {
					return options.map((option) => {
						return (
							<React.Fragment key={option.key}>
								<input
									type="checkbox"
									id={option.value}
									{...field}
									value={option.value}
									checked={field?.value.includes(option.value)}
								/>

								<label htmlFor={option.key}>{option.value}</label>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default CheckboxGroup;
