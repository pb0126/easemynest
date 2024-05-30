const imgItem = [
	{ name: "DLF", imgURL: "https://www.dlf.in/images/logo-black.svg" },
	{ name: "Gaurs", imgURL: "https://www.gaursonsindia.com/images/logo.png" },
	{
		name: "Parasvanath",
		imgURL:
			"https://img.staticmb.com/mbimages/photo_dir/developer/original_images/54006/1678095144947-Builder-Logo.jpg",
	},
	{ name: "SKA", imgURL: "https://www.skaindia.co.in/images/ska-logo.jpg" },
	{
		name: "IndiaBulls",
		imgURL:
			"https://www.indiabullsrealestate.com/wp-content/uploads/images/indiabulls-real-estate-logo-new.png",
	},
	{
		name: "Emmar",
		imgURL:
			"https://cdn.in.emaar.com/wp-content/themes/emaar/inc/assets/images/emaar-india-logo-en.svg",
	},
	{
		name: "GodrejProperties",
		imgURL:
			"https://www.godrejproperties.com/images/logo_godrej_properties.png",
	},
	{ name: "AnsalAPI", imgURL: "https://www.ansalapi.com/images/logo.jpg" },
	{
		name: "Omaxe",
		imgURL: "https://www.omaxe.com/assets/front/images/omaxe-logo.webp",
	},
	{
		name: "T&T",
		imgURL: "https://tandtgroup.in/wp-content/uploads/2019/08/tt.png",
	},
];

export function PartnerSection() {
	return (
		<div className="py-10 p-2  ">
			<div className="text-center">
				<p className="text-base font-semibold text-black">
					Outreach & Expansions
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
					Developers Network
				</h1>
				<p className="mt-4 text-base leading-7 text-gray-600">
					<span className="font-semibold text-indigo-950">EaseMyNest</span> has
					achieved widespread recognition and expansion, attracting renowned
					brands and reputable dealers. We have established a network of trusted
					individuals and entities with strong brand images in the industry.
				</p>

				{/* Partner Images */}
				<div className="mx-auto max-w-7xl px-2 lg:px-8 mt-3">
					<div className="grid grid-cols-2 gap-y-8 text-center sm:grid-cols-3 sm:gap-12 lg:grid-cols-5">
						{imgItem.map((item) => (
							<div key={item.name} className="">
								<div className="mx-auto flex h-28 w-28 items-center justify-center">
									<img src={item.imgURL} alt={item.name} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
