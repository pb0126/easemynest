function Heading({ title, className }) {
	return (
		<div
			className={`flex flex-col items-center justify-center my-10 ${className}`}
		>
			<p className="text-center text-3xl sm:text-4xl font-bold text-indigo-950">
				{title}
			</p>
			<div className="border bg-sky-500 w-32 h-1 items-center mt-2 "></div>
		</div>
	);
}

export default Heading;
