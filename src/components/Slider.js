import React from "react";

function Slider() {
	const testimonials = [
		{
			name: "Julia Cameron",
			title: "Creative Director, VISA",
			// image: `${require("./images")}`,
			quote:
				"It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
		},
		{
			name: "Mark Jacobs",
			title: "Tech Lead, Google",
			// image: `${require("../images")}`,
			quote:
				"The rebranding has really helped our business. Definitely worth the investment.",
		},
		{
			name: "Lisa Bearings",
			title: "Brand Coordinator, Facebook",
			// image: `${require("./images")}`,
			quote:
				"The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
		},
	];
	return (
		<div>
			<div className='flex w-full bg-slate-700 space-x-2'>
				{testimonials.map((t) => {
					return <div className='h-96 w-small2 bg-white '>hey</div>;
				})}
			</div>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				class='h-5 w-5'
				viewBox='0 0 20 20'
				fill='currentColor'
			>
				<path
					fill-rule='evenodd'
					d='M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z'
					clip-rule='evenodd'
				/>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				class='h-5 w-5'
				viewBox='0 0 20 20'
				fill='currentColor'
			>
				<path
					fill-rule='evenodd'
					d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z'
					clip-rule='evenodd'
				/>
			</svg>
		</div>
	);
}

export default Slider;
