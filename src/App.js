import logo from "./logo.svg";
import "./App.css";
// import YoutubeForm from "./components/1|2YoutubeForm";
import FormValidateYup from "./components/3-FormValidateYup";
import FormikHandlers from "./components/4-FormikHandlers";
import FormikComponents from "./components/5-FormikComponents";
import MoreOnFmkField from "./components/6-MoreOnFmkField";
import NestedObjects from "./components/7-NestedObjs";
import FieldArrays from "./components/8-FieldArrays";
import AdvancedRenderProps from "./components/9-RenderProps";
import LoadingSavedData from "./components/10-LoadingSavedData";
import FormikContainer from "./components/12-Formiks/12-FormikContainer";

function App() {
	return (
		<div className="App">
			{/* <YoutubeForm /> */}
			{/* <FormValidateYup /> */}
			{/* <FormikHandlers /> */}
			{/* <FormikComponents /> */}
			{/* <MoreOnFmkField /> */}
			{/* <NestedObjects /> */}
			{/* <FieldArrays /> */}
			{/* <AdvancedRenderProps /> */}
			{/* <LoadingSavedData /> */}
			<FormikContainer />
		</div>
	);
}

export default App;
