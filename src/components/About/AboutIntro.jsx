function AboutIntro() {
	return (
		<>
			<div className=" flex items-center justify-center flex-col my-10 bg-sky-50">
				<h1 className="text-2xl font-bold my-8 sm:my-4">Who we are</h1>
				<p className=" p-2 text-lg text-center font-normal text-gray-600 sm:p-8 sm:text-xl">
					Welcome to Ease My Nest, your one-stop solution for comprehensive
					property management and household services. At Ease My Nest, we
					understand the unique challenges faced by property owners and tenants
					alike. Our mission is to simplify property management and provide
					reliable household services, making your life easier and stress-free.
				</p>

				<div className="flex flex-col justify-center text-center items-center">
					<div className="mt-3 flex max-w-max items-center space-x-2 rounded-full border p-2 ">
						<p className="text-sm font-medium ">
							How we all started with a vision
							<span className="ml-2 cursor-pointer font-bold text-md">
								Our Story &rarr;
							</span>
						</p>
					</div>
					<p className="p-2 text-lg text-center font-medium text-indigo-950 sm:p-8 sm:text-xl">
						Ease My Nest was founded with the vision of addressing the common
						pain points in the property management market. We recognized the
						need for a dependable service provider that could cater to the
						diverse needs of multiple property owners, single property owners,
						NRI owners, and tenants. Our team is dedicated to delivering
						top-notch services that ensure your properties are well-maintained
						and your tenants are satisfied.
					</p>
				</div>
			</div>
		</>
	);
}

export default AboutIntro;
