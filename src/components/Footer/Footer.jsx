import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
	return (
		<section className="relative overflow-hidden bg-white py-8">
			<div className="container relative z-10 mx-auto px-4">
				<div className="-m-8 flex flex-wrap items-center justify-between">
					<div className=" p-4">
						<div className="inline-flex items-center">
							<img
								src="src\assets\Logo\webLogo.png"
								alt="EaseMyNest"
								className="h-20"
							/>
						</div>
					</div>

					<div className="w-auto p-8">
						<ul className="-m-5 flex flex-wrap items-center">
							<li className="p-5">
								<Link
									to="/privacypolicy"
									className="font-medium text-gray-600 hover:text-gray-700"
								>
									Privacy Policy
								</Link>
							</li>
							<li className="p-5">
								<Link
									to="/termsandconditions"
									className="font-medium text-gray-600 hover:text-gray-700"
								>
									Terms of Service
								</Link>
							</li>

							<li className="p-5">
								<a
									className="font-medium text-gray-600 hover:text-gray-700"
									href="https://forms.gle/U3rzZEn3RPCG3NEP6"
									target="_blank "
								>
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div className="w-auto px-7 p-2">
						<div className="-m-1.5 flex flex-wrap">
							<div className="w-auto p-1.5">
								<a href="https://www.instagram.com/easemynest" target="_blank">
									<div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
										<Instagram className="h-4" />
									</div>
								</a>
							</div>

							<div className="w-auto p-1.5">
								<a href="https://in.linkedin.com/in/easemynest" target="_blank">
									<div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
										<Linkedin className="h-4" />
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className="p-6">
						<p className="text-sm text-gray-600">
							&copy; Copyright 2024. All Rights Reserved by EaseMyNest.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
