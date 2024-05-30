const offerItems = [
	{
		title: "Maintenance Ninjas",
		content:
			"Our dedicated maintenance team at Ease My Nest ensures prompt and efficient handling of all on-demand requests. With a focus on excellence, we deliver top-notch service, addressing any issues swiftly to guarantee your satisfaction. Trust us to keep your property in perfect condition.",
		imgUrl:
			"https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "Customer Support",
		content:
			"Our customer support team at Ease My Nest is dedicated to delivering prompt and efficient assistance. We prioritize your satisfaction by addressing queries and resolving issues swiftly. Count on us for responsive, reliable, and exceptional service.",
		imgUrl:
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
	},
	{
		title: "Property Experts",
		content:
			"Our property experts offer unmatched knowledge and experience. They provide tailored, professional advice and management solutions to meet your unique needs, ensuring your property is well-maintained, secure, and maximizes its value. Trust our experts for exceptional property care.",
		imgUrl:
			"https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

function TeamSection() {
	return (
		<>
			<div>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-sky-50 pb-8">
					<div className="mx-auto max-w-xl text-center">
						<div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5 mt-4">
							<p className="text-xs font-semibold uppercase tracking-widest text-black">
								Our Team
							</p>
						</div>
						<h2 className="mt-3 text-xl font-semibold leading-tight text-black sm:text-2xl lg:text-3xl">
							People Who Made It Sucessful
						</h2>
					</div>
					<p className="my-6 text-base leading-relaxed text-gray-600 text-center">
						Our team consists of experienced professionals with expertise in
						property management, security services, and household maintenance.
						We bring a wealth of knowledge and a passion for excellence to every
						service we offer. Our collective experience allows us to understand
						the challenges faced by property owners and tenants and to develop
						tailored solutions that meet their needs.
					</p>
					<div className="mt-4 grid grid-cols-1 gap-y-4 text-center sm:grid-cols-3 sm:gap-6 ">
						{offerItems.map((item) => (
							<div
								key={item.title}
								className="shadow-xl border-1 border-black rounded-lg bg-white	"
							>
								<div className="mx-auto flex h-auto w-full items-center justify-center rounded-md bg-gray-100 ">
									<img className="rounded" src={item.imgUrl} alt={item.title} />
								</div>

								<h3 className="mt-1 text-lg font-semibold text-black">
									{item.title}
								</h3>
								<p className=" text-sm text-gray-600 p-2 ">{item.content}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default TeamSection;
