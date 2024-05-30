import Heading from "./Heading";

const featureItem = [
	{
		title: "Comprehensive Property Management",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1aWxkaW5nIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHg9IjQiIHk9IjIiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik05IDIydi00aDZ2NCIvPjxwYXRoIGQ9Ik04IDZoLjAxIi8+PHBhdGggZD0iTTE2IDZoLjAxIi8+PHBhdGggZD0iTTEyIDZoLjAxIi8+PHBhdGggZD0iTTEyIDEwaC4wMSIvPjxwYXRoIGQ9Ik0xMiAxNGguMDEiLz48cGF0aCBkPSJNMTYgMTBoLjAxIi8+PHBhdGggZD0iTTE2IDE0aC4wMSIvPjxwYXRoIGQ9Ik04IDEwaC4wMSIvPjxwYXRoIGQ9Ik04IDE0aC4wMSIvPjwvc3ZnPg==",
		description:
			"We offer end-to-end property management services, ensuring that every aspect of your property is well taken care of. From tenant management to regular inspections and maintenance, we handle it all so you don't have to.",
		color: "bg-amber-200",
	},
	{
		title: "Expertise Trust and Reliability",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYXJ0LWhhbmRzaGFrZSI+PHBhdGggZD0iTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WiIvPjxwYXRoIGQ9Ik0xMiA1IDkuMDQgNy45NmEyLjE3IDIuMTcgMCAwIDAgMCAzLjA4djBjLjgyLjgyIDIuMTMuODUgMyAuMDdsMi4wNy0xLjlhMi44MiAyLjgyIDAgMCAxIDMuNzkgMGwyLjk2IDIuNjYiLz48cGF0aCBkPSJtMTggMTUtMi0yIi8+PHBhdGggZD0ibTE1IDE4LTItMiIvPjwvc3ZnPg==",
		description:
			"With a team of experienced property managers and service professionals, we guarantee reliable and high-quality service. Our dedicated managers ensure your property is maintained to the highest standards, providing you with peace of mind.",
		color: "bg-red-200",
	},
	{
		title: "Customer-Centric and Quick Response",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXJzLXJvdW5kIj48cGF0aCBkPSJNMTggMjFhOCA4IDAgMCAwLTE2IDAiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjgiIHI9IjUiLz48cGF0aCBkPSJNMjIgMjBjMC0zLjM3LTItNi41LTQtOGE1IDUgMCAwIDAtLjQ1LTguMyIvPjwvc3ZnPg==",
		description:
			"Our primary goal is to ensure customer satisfaction. We are committed to providing exceptional service and addressing any concerns promptly and effectively. We promise quick action on any query raised by customer.",
		color: "bg-green-200",
	},
	{
		title: "Convenient and Efficient Household Services",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaCI+PHBhdGggZD0iTTE0LjcgNi4zYTEgMSAwIDAgMCAwIDEuNGwxLjYgMS42YTEgMSAwIDAgMCAxLjQgMGwzLjc3LTMuNzdhNiA2IDAgMCAxLTcuOTQgNy45NGwtNi45MSA2LjkxYTIuMTIgMi4xMiAwIDAgMS0zLTNsNi45MS02LjkxYTYgNiAwIDAgMSA3Ljk0LTcuOTRsLTMuNzYgMy43NnoiLz48L3N2Zz4=",
		description:
			"We provide a wide range of household services, including cleaning, plumbing, electrical work, and carpentry. Our prompt and efficient service ensures that your property remains in top condition, saving you time and effort.",
		color: "bg-purple-200",
	},
	{
		title: "Transparent Reporting and Communication",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYWRzZXQiPjxwYXRoIGQ9Ik0zIDExaDNhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi01Wm0wIDBhOSA5IDAgMSAxIDE4IDBtMCAwdjVhMiAyIDAgMCAxLTIgMmgtMWEyIDIgMCAwIDEtMi0ydi0zYTIgMiAwIDAgMSAyLTJoM1oiLz48cGF0aCBkPSJNMjEgMTZ2MmE0IDQgMCAwIDEtNCA0aC01Ii8+PC9zdmc+",
		description:
			"We believe in keeping our clients informed. Our property managers provide regular reports and updates on the condition and status of your property, ensuring complete transparency.",
		color: "bg-emerald-300",
	},
	{
		title: "Stress-Free Property Ownership",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdpbmQiPjxwYXRoIGQ9Ik0xNy43IDcuN2EyLjUgMi41IDAgMSAxIDEuOCA0LjNIMiIvPjxwYXRoIGQ9Ik05LjYgNC42QTIgMiAwIDEgMSAxMSA4SDIiLz48cGF0aCBkPSJNMTIuNiAxOS40QTIgMiAwIDEgMCAxNCAxNkgyIi8+PC9zdmc+",
		description:
			"By entrusting your property to Ease My Nest, you can eliminate the stress and hassle of property management. We take care of everything, allowing you to focus on what matters most to you.",
		color: "bg-blue-300",
	},
	{
		title: "Advanced Security Solutions",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNjdHYiPjxwYXRoIGQ9Ik0xNi43NSAxMmgzLjYzMmExIDEgMCAwIDEgLjg5NCAxLjQ0N2wtMi4wMzQgNC4wNjlhMSAxIDAgMCAxLTEuNzA4LjEzNGwtMi4xMjQtMi45NyIvPjxwYXRoIGQ9Ik0xNy4xMDYgOS4wNTNhMSAxIDAgMCAxIC40NDcgMS4zNDFsLTMuMTA2IDYuMjExYTEgMSAwIDAgMS0xLjM0Mi40NDdMMy42MSAxMi4zYTIuOTIgMi45MiAwIDAgMS0xLjMtMy45MUwzLjY5IDUuNmEyLjkyIDIuOTIgMCAwIDEgMy45Mi0xLjN6Ii8+PHBhdGggZD0iTTIgMTloMy43NmEyIDIgMCAwIDAgMS44LTEuMUw5IDE1Ii8+PHBhdGggZD0iTTIgMjF2LTQiLz48cGF0aCBkPSJNNyA5aC4wMSIvPjwvc3ZnPg==",
		description:
			"Our security surveillance services allow you to monitor your property remotely, ensuring its safety at all times. This added layer of security is especially beneficial for NRI owners and those with multiple properties",
		color: "bg-gray-300",
	},
	{
		title: "Tailored Solutions for Every Owner",
		logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJveGVzIj48cGF0aCBkPSJNMi45NyAxMi45MkEyIDIgMCAwIDAgMiAxNC42M3YzLjI0YTIgMiAwIDAgMCAuOTcgMS43MWwzIDEuOGEyIDIgMCAwIDAgMi4wNiAwTDEyIDE5di01LjVsLTUtMy00LjAzIDIuNDJaIi8+PHBhdGggZD0ibTcgMTYuNS00Ljc0LTIuODUiLz48cGF0aCBkPSJtNyAxNi41IDUtMyIvPjxwYXRoIGQ9Ik03IDE2LjV2NS4xNyIvPjxwYXRoIGQ9Ik0xMiAxMy41VjE5bDMuOTcgMi4zOGEyIDIgMCAwIDAgMi4wNiAwbDMtMS44YTIgMiAwIDAgMCAuOTctMS43MXYtMy4yNGEyIDIgMCAwIDAtLjk3LTEuNzFMMTcgMTAuNWwtNSAzWiIvPjxwYXRoIGQ9Im0xNyAxNi41LTUtMyIvPjxwYXRoIGQ9Im0xNyAxNi41IDQuNzQtMi44NSIvPjxwYXRoIGQ9Ik0xNyAxNi41djUuMTciLz48cGF0aCBkPSJNNy45NyA0LjQyQTIgMiAwIDAgMCA3IDYuMTN2NC4zN2w1IDMgNS0zVjYuMTNhMiAyIDAgMCAwLS45Ny0xLjcxbC0zLTEuOGEyIDIgMCAwIDAtMi4wNiAwbC0zIDEuOFoiLz48cGF0aCBkPSJNMTIgOCA3LjI2IDUuMTUiLz48cGF0aCBkPSJtMTIgOCA0Ljc0LTIuODUiLz48cGF0aCBkPSJNMTIgMTMuNVY4Ii8+PC9zdmc+",
		description:
			"Whether you own a single property or multiple properties, live locally or abroad, we offer customized solutions to meet your specific needs. Our services are designed to fit your lifestyle and requirements.",
		color: "bg-orange-300",
	},
];

export default function Feature() {
	return (
		<div className="mx-auto max-w-7xl px-2 lg:px-8">
			<Heading title={"Why Choose Us"} />
			<div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
				{featureItem.map((item) => (
					<div key={item.title}>
						<div
							className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${item.color}`}
						>
							<img src={item.logo} alt={item.name} className=" h-10" />
						</div>
						<h3 className="mt-8 text-lg font-semibold text-black">
							{item.title}
						</h3>
						<p className="mt-4 text-sm text-gray-600">{item.description}</p>
					</div>
				))}
			</div>
			<div className="my-10 text-center">
				<p className="text-3xl lg:text-6xl  text-sky-500 font-bold lg:font-semibold ">
					With You, All The Way !
				</p>
				<p className="text-md lg:text-xl font-normal my-4 text-indigo-950">
					Choose <span className="font-bold italic">EaseMyNest</span> for a
					seamless, reliable, and comprehensive property management experience.
					Let us handle the details so you can{" "}
					<span className="bg-sky-100 italic text-black underline">
						enjoy the benefits of property ownership without the headaches.
					</span>
				</p>
			</div>
		</div>
	);
}
