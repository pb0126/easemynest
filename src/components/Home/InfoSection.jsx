const offerItems = [
	{
		title: "Household Services",
		content:
			"Our team of professionals is ready to assist with all your household needs, including cleaning, plumbing, electrical work, and more. Choose Property Enhancement Guard (PEG) to get all these services at 50% off, or opt for individual services whenever you need them. The choice is yours, ensuring timely and effective solutions for your home.",
		imgUrl:
			"https://images.unsplash.com/photo-1647381518264-97ff1835026f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
		status: "Live",
		statusCode: "bg-green-300",
	},
	{
		title: "Property Management",
		content:
			"We take care of everything from tenant management to regular inspections and maintenance, ensuring your property remains in excellent condition. For non-resident Indians who own property in India, we offer specialized services to manage and maintain their properties, keeping them secure and in top condition.",
		imgUrl:
			"https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		status: "Coming Soon",
		statusCode: "bg-red-300",
	},
	{
		title: "Home Security Solutions",
		content:
			"We offer advanced security solutions that enable property owners to monitor their properties remotely, ensuring safety and peace of mind. Whether you're away from home or on vacation, our AI-enabled surveillance systems provide robust protection, keeping your property secure at all times. Zero Tollerence AI model.",
		imgUrl:
			"https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		status: "Coming Soon",
		statusCode: "bg-red-300",
	},
	{
		title: "Property Transactions",
		content:
			"We have a network of 50+ trusted builders, retailers, and managers in the pristine societies of the Greater Noida region and expanding to Delhi NCR  covering prime locations, providing access to exclusive properties and a vibrant community. Our services include buying, leasing, renting, and selling properties for all your needs. ",
		imgUrl:
			"https://images.unsplash.com/photo-1642543348745-03b1219733d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		status: "Coming Soon",
		statusCode: "bg-red-300",
	},
];

export function InfoSection() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-sky-50 pb-8">
			<div className="mx-auto max-w-xl text-center">
				<div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5 mt-4">
					<p className="text-xs font-semibold uppercase tracking-widest text-black">
						50+ Properties & 10+ Trusted Brands
					</p>
				</div>
				<h2 className="mt-3 text-xl font-semibold leading-tight text-black sm:text-2xl lg:text-3xl">
					EaseMyNest covers every aspect of your property
				</h2>
				<p className="my-2 text-base leading-relaxed text-gray-600">
					We offer a wide range of services, including:-
				</p>
			</div>
			<div className="mt-4 grid grid-cols-1 gap-y-4 text-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
				{offerItems.map((item) => (
					<div
						key={item.title}
						className="shadow-xl border-1 border-black rounded-lg bg-white	"
					>
						<div className="mx-auto flex h-auto w-full items-center justify-center rounded-md bg-gray-100 ">
							<img className="rounded" src={item.imgUrl} alt={item.title} />
						</div>
						<div
							className={`mx-auto inline-flex rounded-full ${item.statusCode} px-4 py-1.5 my-1`}
						>
							<p className="text-xs font-semibold uppercase tracking-widest text-black">
								{item.status}
							</p>
						</div>
						<h3 className="mt-1 text-lg font-semibold text-black">
							{item.title}
						</h3>
						<p className=" text-sm text-gray-600 p-2 sm:p-1">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
