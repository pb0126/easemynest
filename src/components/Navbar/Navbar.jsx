"use client";

import React from "react";
import { Menu, X, Cog } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
	{
		name: "Home",
		to: "/",
	},
	{
		name: "About",
		to: "/about",
	},
	{
		name: "What is PEG ?",
		to: "/peg",
	},
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="w-full bg-white sticky top-0 z-50">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
				<div className="inline-flex items-center space-x-2">
					<span>
						<Link to="/">
							<img className="h-24" src="src\assets\Logo\webLogo.png" alt="" />
						</Link>
					</span>
				</div>
				<div className="hidden lg:block">
					<ul className="inline-flex space-x-8">
						{menuItems.map((item) => (
							<li key={item.name}>
								<NavLink
									to={item.to}
									className={({ isActive }) =>
										` ${isActive ? "text-sky-700" : "text-indigo-950"}
											text-lg font-semibold  text-indigo-950 hover:text-sky-600 block py-2 pr-4 pl-3 duration-200  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 `
									}
								>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
				<div className="hidden lg:block">
					<button
						type="button"
						className="flex flex-row rounded-md bg-indigo-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-00 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>
						<a
							href="https://forms.gle/JfUmzmrJumBPLbFA9"
							target="_blank"
							className="flex "
						>
							<Cog className="h-5 w-4 mr-1 cursor-pointer mb-1" />
							Book Services
						</a>
					</button>
				</div>

				{/* Navbar Small Screen */}
				<div className="lg:hidden">
					<Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
				</div>
				{isMenuOpen && (
					<div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
						<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
							<div className="px-5 pb-6 pt-5">
								<div className="flex items-center justify-between">
									<div className="inline-flex items-center space-x-2">
										<span>
											<img
												src="src\assets\Logo\webLogo.png"
												alt=""
												className="h-20"
											/>
										</span>
									</div>
									<div className="-mr-2">
										<button
											type="button"
											onClick={toggleMenu}
											className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
										>
											<span className="sr-only">Close menu</span>
											<X className="h-6 w-6" aria-hidden="true" />
										</button>
									</div>
								</div>
								<div className="mt-6">
									<nav className="grid gap-y-4">
										{menuItems.map((item) => (
											<NavLink
												key={item.name}
												to={item.to}
												className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
												onClick={toggleMenu}
											>
												<span className="ml-3 text-base font-medium text-indigo-950">
													{item.name}
												</span>
											</NavLink>
										))}
									</nav>
								</div>

								<button
									type="button"
									className="mt-4 w-full rounded-md bg-indigo-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center"
									onClick={toggleMenu}
								>
									<Cog className="h-6 w-4 mr-1 cursor-pointer" />
									<a href="https://forms.gle/JfUmzmrJumBPLbFA9" target="_blank">
										Book Services
									</a>
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
