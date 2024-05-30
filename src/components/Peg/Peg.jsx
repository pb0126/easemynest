import { HeroSection } from "./HeroSection";
import Intro from "./Intro";
import Services from "./Services";
import Heading from "../Home/Heading";

function Peg() {
	return (
		<>
			<HeroSection />

			<div>
				<Heading title={"Why PEG ?"} />
				<Intro />
			</div>

			<div>
				<Heading title={"Our Services"} />
				<Services />
			</div>
		</>
	);
}

export default Peg;
