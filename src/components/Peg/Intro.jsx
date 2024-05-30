const features = [
	{
		name: "Expert Care",
		content:
			"Regular property health assessments and detailed diagnostic reports to identify and address potential issues.",
		logoURL:
			"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhhbmQtaGVhcnQiPjxwYXRoIGQ9Ik0xMSAxNGgyYTIgMiAwIDEgMCAwLTRoLTNjLS42IDAtMS4xLjItMS40LjZMMyAxNiIvPjxwYXRoIGQ9Im03IDIwIDEuNi0xLjRjLjMtLjQuOC0uNiAxLjQtLjZoNGMxLjEgMCAyLjEtLjQgMi44LTEuMmw0LjYtNC40YTIgMiAwIDAgMC0yLjc1LTIuOTFsLTQuMiAzLjkiLz48cGF0aCBkPSJtMiAxNSA2IDYiLz48cGF0aCBkPSJNMTkuNSA4LjVjLjctLjcgMS41LTEuNiAxLjUtMi43QTIuNzMgMi43MyAwIDAgMCAxNiA0YTIuNzggMi43OCAwIDAgMC01IDEuOGMwIDEuMi44IDIgMS41IDIuOEwxNiAxMloiLz48L3N2Zz4=",
		color: "bg-blue-200",
	},
	{
		name: "Value Enhancement",
		content:
			"Initial property evaluation with customized recommendations to maximize your property value.",
		logoURL:
			"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpbmUtY2hhcnQiPjxwYXRoIGQ9Ik0zIDN2MThoMTgiLz48cGF0aCBkPSJtMTkgOS01IDUtNC00LTMgMyIvPjwvc3ZnPg==",
		color: "bg-green-200",
	},
	{
		name: "Priority Support",
		content:
			"Dedicated customer support with faster response times for PEG members.",
		logoURL:
			"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYWRzZXQiPjxwYXRoIGQ9Ik0zIDExaDNhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi01Wm0wIDBhOSA5IDAgMSAxIDE4IDBtMCAwdjVhMiAyIDAgMCAxLTIgMmgtMWEyIDIgMCAwIDEtMi0ydi0zYTIgMiAwIDAgMSAyLTJoM1oiLz48cGF0aCBkPSJNMjEgMTZ2MmE0IDQgMCAwIDEtNCA0aC01Ii8+PC9zdmc+",
		color: "bg-amber-200",
	},
	{
		name: "Sustainable Practices",
		content:
			"Implementation of eco-friendly solutions and energy-efficient upgrades.",
		logoURL:
			"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBpZ2d5LWJhbmsiPjxwYXRoIGQ9Ik0xOSA1Yy0xLjUgMC0yLjggMS40LTMgMi0zLjUtMS41LTExLS4zLTExIDUgMCAxLjggMCAzIDIgNC41VjIwaDR2LTJoM3YyaDR2LTRjMS0uNSAxLjctMSAyLTJoMnYtNGgtMmMwLTEtLjUtMS41LTEtMmgwVjV6Ii8+PHBhdGggZD0iTTIgOXYxYzAgMS4xLjkgMiAyIDJoMSIvPjxwYXRoIGQ9Ik0xNiAxMWgwIi8+PC9zdmc+",
		color: "bg-red-200",
	},
];
export default function Intro() {
	return (
		<div className="mx-auto max-w-7xl px-2 lg:px-8">
			<div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
				{features.map((item) => (
					<div key={item.name}>
						<div
							className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${item.color}`}
						>
							<img src={item.logoURL} alt={item.name} className=" h-8" />
						</div>
						<h3 className="mt-8 text-lg font-semibold text-black">
							{item.name}
						</h3>
						<p className="mt-4 text-sm text-gray-600">{item.content}</p>
					</div>
				))}
			</div>
		</div>
	);
}
