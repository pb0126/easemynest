export function ContactUs() {
	return (
		<section className="px-2">
			<div className="mx-auto max-w-7xl ">
				<div className="flex flex-col space-y-8 pb-8 pt-4">
					<div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
						<p className="text-center text-xs font-semibold leading-normal md:text-sm">
							For inquiries, you can send us an email on:-{" "}
							<span className="text-lg font-medium text-indigo-950 underline">
								<a href="mailto:easemynest@gmail.com">easemynest@gmail.com</a>
							</span>
						</p>
					</div>
					<p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
						Love to hear from you
					</p>
					<p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
						For more information about our services or to get in touch with us.
						We look forward to serving you and helping you achieve peace of mind
						with our exceptional property management solutions.
					</p>
				</div>

				<p className="textbase  text-center text-gray-600">
					Can&apos;t find what you&apos;re looking for?{" "}
					<a
						href="https://forms.gle/U3rzZEn3RPCG3NEP6"
						target="_blank "
						className="font-semibold text-black hover:underline"
					>
						Contact our support
					</a>
				</p>

				<div className="rounded-lg bg-gray-100">
					<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
						<div className="py-6">
							<div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
								<div className="space-y-4">
									<p className="w-full text-4xl font-bold text-gray-900">
										Our Office
									</p>
									<p className="w-full text-lg text-gray-600">
										Find us at this location.
									</p>
								</div>
								<div className="space-y-4 divide-y-2">
									<div className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full">
										<p className="w-full text-xl font-semibold  text-gray-900">
											Delhi NCR Office
										</p>
										<p className="w-full text-base  text-gray-600">
											Mon-Sat 9am to 5pm.
										</p>
										<p className="text-sm font-semibold text-gray-600">
											Sharda Launchpad KP-2, <br />
											Greater Noida UP-201310
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
