export function HeroSection() {
	return (
		<div className="relative w-full bg-white">
			<div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
				<div className="flex flex-col justify-center px-4  lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-3 xl:col-span-6">
					<div className=" flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
						<a
							href="https://forms.gle/64E93gYCaTCq93su7"
							target="_blank"
							className="p-1 flex max-w-max items-center space-x-2 rounded-full"
						>
							<div className="rounded-full bg-white p-1 px-2">
								<p className="text-sm font-medium text-indigo-950">
									Experience the Peace of Mind with PEG
								</p>
							</div>
							<p className="text-sm font-medium ">Buy Now &rarr;</p>
						</a>
					</div>
					<h1 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl">
						A Guard who cares about your Property
					</h1>
					<p className="my-8 text-lg text-gray-700">
						Become a part of the PEG family and invest in a proactive approach
						to property management. Enjoy expert care, routine maintenance, and
						a range of exclusive services designed to enhance and protect your
						property{`’`}s value.
					</p>
				</div>
				<div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
					<img
						className="aspect-[3/2] bg-gray-50 object-cover "
						src="src\assets\Product\pegPremium.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
