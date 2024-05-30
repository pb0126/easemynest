import MainSection from "./MainSection";
import Feature from "./Feature";
import { InfoSection } from "./InfoSection";
import { PartnerSection } from "./PartnerSection";
import { Contact } from "./Contact";
function Home() {
	return (
		<>
			<MainSection />

			<div className="my-8">
				<Feature />
			</div>

			<InfoSection />

			<div className="">
				<PartnerSection />
			</div>

			<div className="">
				<Contact />
			</div>
		</>
	);
}

export default Home;
