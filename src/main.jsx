import React from "react";
import ReactDOM from "react-dom/client";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { About, Home, Peg } from "./components";
import PrivacyPolicy from "./components/Legal Policy/PrivacyPolicy";
import Tnc from "./components/Legal Policy/Tnc";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="peg" element={<Peg />} />
			<Route path="privacypolicy" element={<PrivacyPolicy />} />
			<Route path="termsandconditions" element={<Tnc />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
