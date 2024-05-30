export function Contact() {
	return (
		<div className="relative w-full bg-sky-50 ">
			<div className="mx-auto max-w-7xl lg:px-8">
				<div className="flex flex-col items-center justify-center">
					<div className="mx-auto inline-flex rounded-full bg-gray-200 px-4 py-1.5 mt-4">
						<p className="text-xs font-semibold  tracking-widest text-black">
							Multi-channel Support & Resource Center
						</p>
					</div>
					<h2 className="mt-3 text-xl font-medium leading-tight text-black sm:text-2xl lg:text-3xl p-1 text-center">
						Support & Contact
					</h2>
				</div>
				<div className="rounded-lg p-1 ">
					<img
						className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
						src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Customer"
					/>
				</div>
				<div className="flex flex-col justify-center p-2">
					<h1 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-black md:text-4xl lg:text-6xl">
						EasemyNest really cares about you!
					</h1>
					<p className="mt-4 max-w-3xl text-lg text-gray-700">
						For more information about our services or to get in touch with us,
						please fill in your details. We look forward to serving you and
						helping you achieve peace of mind with our exceptional property
						management solutions.
					</p>
					<div className="mt-3 flex max-w-max items-center space-x-2 rounded-full border p-2">
						<a
							href="https://forms.gle/U3rzZEn3RPCG3NEP6"
							target="_blank "
							className="p-1"
						>
							<p className="text-xs font-medium md:text-sm">
								Fill out the form & we will reach you out shortly
								<span className="ml-2 cursor-pointer font-bold">
									Request a Callback &rarr;
								</span>
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
