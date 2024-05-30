import "./App.css";
import { ContactUs, Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Outlet />
			<ContactUs />
			<Footer />
		</>
	);
}

export default App;
