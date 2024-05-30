import AboutIntro from "./AboutIntro";
import TeamSection from "./TeamSection";

function About() {
	return (
		<>
			<div className="">
				<div className=" bg-sky-50 text-4xl flex items-center justify-center p-3">
					<p className="p-4 font-medium text-gray-700">About Us</p>
				</div>

				{/* Introduction -who we are */}
				<div className=" ">
					<AboutIntro />
				</div>

				{/* Team */}
				<div className=" ">
					<TeamSection />
				</div>
			</div>
		</>
	);
}

export default About;
