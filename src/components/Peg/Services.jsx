const services = [
	{
		title: "Cleaning",
		imgURL:
			"https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtitle:
			"Full Home Cleaning, Bathroom Cleaning, Pest Control, Kitchen Cleaning",
	},
	{
		title: "Electrician",
		imgURL:
			"https://images.unsplash.com/photo-1683295083329-4d4738291f3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtitle:
			"Switch Board Repairing, Socket/Switch Change, Fan Repairing, Device Installation",
	},
	{
		title: "Plumber",
		imgURL:
			"https://plus.unsplash.com/premium_photo-1663013668741-5d280c6b801b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		subtitle:
			"Tap Installation, Water Line Repair, Shower Installation & Cleaning, Flush Installation & Repair  ",
	},
	{
		title: "Carpenter",
		imgURL:
			"https://images.unsplash.com/photo-1667923006173-9e0d2251f608?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
		subtitle:
			"Door Repair, Door Installation, Wall hangings & Mounting, Curtain Installation, Wooden Repairs",
	},
];

export default function Services() {
	return (
		<div className="mx-auto max-w-7xl px-2 lg:px-8">
			<div className="grid grid-cols-1 gap-y-8  text-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 rounded-md">
				{services.map((item) => (
					<div key={item.title}>
						<div className="relative h-[230px] w-full rounded-md">
							<img
								src={item.imgURL}
								alt={item.title}
								className="z-0 h-full w-full rounded-md object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
							<div className="absolute bottom-4 left-4 text-left">
								<h1 className="text-lg font-semibold text-white">
									{item.title}
								</h1>
								<p className="mt-2 text-sm text-gray-300">{item.subtitle}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
