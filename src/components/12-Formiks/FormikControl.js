import React from "react";
import Input from "./all-formik-components/Input";
import RadioButtons from "./all-formik-components/RadioButtons";
import SelectDropdown from "./all-formik-components/SelectDropdown";
import Textarea from "./all-formik-components/Textarea";
import CheckboxGroup from "./all-formik-components/CheckboxGroup";
import DatePicker from "./all-formik-components/DatePicker";

function FormikControl({ control, ...rest }) {
	switch (control) {
		case "input":
			return <Input {...rest} />;

		case "textarea":
			return <Textarea {...rest} />;

		case "select":
			return <SelectDropdown {...rest} />;

		case "radio":
			return <RadioButtons {...rest} />;

		case "checkbox":
			return <CheckboxGroup {...rest} />;

		case "date":
			return <DatePicker {...rest} />;

		default:
			return null;
	}
}

export default FormikControl;
