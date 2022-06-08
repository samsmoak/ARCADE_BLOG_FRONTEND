import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import Slider from "../../components/Slider";
// import Slider from "react-slick";
import { Carousel } from "react-bootstrap";
import Carouselcom from "../../components/Carouselcom";

function Homepage() {
	const [right, setRight] = useState(0);
	const [left, setLeft] = useState(0);
	const [boolleft, setboolLeft] = useState(0);
	const [boolright, setboolRight] = useState(0);
	const [index, setIndex] = useState(0);
	// const [fee, setFee] = useState(`translate-x-[${right}]`);
	// const [pee, setPee] = useState[`-translate-x-[${right}]`];
	// ${boolright ? fee : boolleft ? pee : null}

	const slideRight = () => {
		setboolLeft(false);

		setboolRight(true);
		setRight(right + 10);
	};
	const slideLeft = () => {
		setboolRight(false);
		setboolLeft(true);
		setLeft(left + 10);
	};
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	console.log(right);

	return (
		<div>
			<div className='grid grid-cols-2 '>
				<div className='w-full h-small1 bg-slate-800 flex justify-center items-center'>
					<div className='text-4xl text-white'>header</div>
				</div>
				<div className='w-full h-small1 flex justify-center items-center'></div>
			</div>
			<div className=' flex items-center flex-col p-28'>
				<p>Companies maximizing sales productivity with Arcade</p>
				<div className='flex space-x-8'>
					<div>bixer</div>
					<div>facebook</div>
					<div>akia</div>
					<div>dominos</div>
				</div>
			</div>
			<div className='flex justify-center space-x-24'>
				<div className='w-96'>
					<p>GAMIFICATION</p>
					<p>Gamified incentives that drive employee performance</p>
					<p>
						Design and select team building games that work best for your
						company, and watch your revenue skyrocket.
					</p>
					<button>learn more</button>
				</div>
				<div className='w-96 bg-red-300 h-96'></div>
			</div>
			<div className='h-96 w-full flex justify-center space-x-36  '>
				<div className=' bg-green-400  grid grid-flow-col p-28'>
					<div className={`self-center`} id='lefter'>
						<div className='h-32 w-[10rem] bg-red-500'></div>
						<div className='h-32 w-[10rem] bg-yellow-500'></div>
					</div>
					<div>
						<div className='h-32 w-[10rem] bg-blue-500'></div>
					</div>
				</div>
				<div className='flex justify-center items-center'>
					OUTCOMES, DELIVERED.The Instabase Differentiator.
				</div>
			</div>

			<div className=''>
				<Carouselcom />
			</div>
		</div>
	);
}

export default Homepage;
