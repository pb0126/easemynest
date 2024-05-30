import { Cog, ShoppingCart } from "lucide-react";
export default function MainSection() {
	return (
		<section>
			<div className="px-2 lg:flex lg:flex-row lg:items-center lg:mt-2">
				<div className="w-full lg:w-1/2">
					<div className=" lg:my-0 lg:px-8 p-2">
						<h4 className=" text-md font-medium leading-tight text-gray-500  ">
							Comprehensive Protection for Your Home
						</h4>
						<h2 className="text-2xl font-bold leading-tight text-sky-500 sm:text-4xl lg:text-4xl ">
							<span className=" text-indigo-950">Introducing, </span>
							Property Enhancement Guard (PEG)
						</h2>
						<p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
							Ensure your Property&apos;s longevity and beauty with{" "}
							<span className=" text-indigo-950 font-semibold">
								Property Enhancement Guard (PEG)
							</span>
							Benefit from hassle-free maintenance and professional care at a
							reduced cost.
						</p>
						<p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
							Offering comprehensive property management solutions, including
							plumbing, carpentry, and electrical services.
							<span className=" text-indigo-950 font-semibold">
								{" "}
								Property Enhancement Guard (PEG),{" "}
							</span>{" "}
							<span className=" text-black bg-sky-100 p-[0.1em]  italic">
								provides peace of mind through expert care, routine maintenance,
								and value-enhancing services.
							</span>
						</p>

						<div className="mt-6 sm:-ml-3">
							<a
								href="https://forms.gle/64E93gYCaTCq93su7"
								target="_blank"
								className="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-indigo-950 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
							>
								<ShoppingCart className="h-4 w-4  cursor-pointer" />

								<span className="mx-2">Buy Now</span>
							</a>
							<a
								href="https://forms.gle/JfUmzmrJumBPLbFA9"
								target="_blank"
								className="mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
							>
								<Cog className="h-4 w-4  cursor-pointer" />
								<span className="mx-2">Book Services</span>
							</a>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<img
						src="src\assets\Product\pegPremium.png"
						alt="PEG"
						className=" h-96 w-full rounded-md object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
