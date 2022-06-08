import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Slider from "../../components/Slider";

function Translate() {
	const header = useRef(null);
	const [navbar1, setnavbar1] = useState();
	const [navbar2, setnavbar2] = useState();
	const [navbar3, setnavbar3] = useState();
	const [navback, setnavback] = useState();
	useEffect(() => {
		gsap.from(header.current, {
			duration: 1,
			// opacity: 0,
			autoAlpha: 0,
			translateX: -100,

			delay: 1,
		});
		gsap.to("#blind", { x: 1400, duration: 1, delay: 0.5 });
		gsap.to("#rocket", { y: -450, x: -230, duration: 1, delay: 2 });
		gsap.to("#ring2", { rotateX: 90, duration: 0.5, delay: 1.5 });
		gsap.to("#ball", { x: 450, duration: 0.5, delay: 1.5, opacity: 0 });
		gsap.to("#smoke1", {
			y: 80,
			x: 90,
			duration: 1.5,
			delay: 2.2,
			opacity: 0,
		});
	}, [header]);
	const navbarhandler = () => {
		if (window.scrollY <= 2300) {
			setnavback(true);
		} else {
			setnavback(false);
		}
		if (window.scrollY >= 2330 && window.scrollY < 3300) {
			setnavbar1(true);
		} else {
			setnavbar1(false);
		}

		if (window.scrollY >= 3330 && window.scrollY < 4300) {
			setnavbar2(true);
		} else {
			setnavbar2(false);
		}
		if (window.scrollY >= 4330 && window.scrollY < 5300) {
			setnavbar3(true);
		} else {
			setnavbar3(false);
		}
		// console.log(window.scrollY);
		// console.log(navbar);
	};
	window.addEventListener("scroll", navbarhandler);
	// console.log(window.scrollY);
	return (
		<div>
			<div className='relative '>
				<div className='bg-blue-500 h-bigx flex justify-end items-center'>
					<p className='text-xl w-96'>
						An intuitive self-service platform that combines proprietary first
						party retail data with wholesale depletions in order to generate
						valuable insights and business intelligence.
					</p>
				</div>
				<div className='bg-rose-500 h-bigx flex justify-start items-center'>
					<p className='text-xl w-96'>
						An intuitive self-service platform that combines proprietary first
						party retail data with wholesale depletions in order to generate
						valuable insights and business intelligence.
					</p>
				</div>
				<div className='bg-lime-500 h-bigx flex justify-end items-center'>
					<p className='text-xl w-96'>
						An intuitive self-service platform that combines proprietary first
						party retail data with wholesale depletions in order to generate
						valuable insights and business intelligence.
					</p>
				</div>
				<div className='bg-purple-500 h-bigx flex justify-start items-center'>
					<p className='text-xl w-96'>
						An intuitive self-service platform that combines proprietary first
						party retail data with wholesale depletions in order to generate
						valuable insights and business intelligence.
					</p>
				</div>
				<div className='bg-blue-500 h-bigx flex justify-end items-center'>
					<p className='text-xl w-96'>
						An intuitive self-service platform that combines proprietary first
						party retail data with wholesale depletions in order to generate
						valuable insights and business intelligence.
					</p>
				</div>
				<div className='flex flex-col w-full absolute top-0 bottom-0 left-0 right-0 '>
					<div
						className={`top-7 sticky duration-150 ${
							navback
								? `translate-x-0 `
								: navbar1
								? `translate-x-3/4 `
								: navbar2
								? `translate-x-0 `
								: navbar3
								? `translate-x-3/4`
								: null
						}
                        
                          `}
					>
						<div className={`w-96 h-96 bg-black text-white`}>
							{navback ? (
								<div>1</div>
							) : navbar1 ? (
								<div>2</div>
							) : navbar2 ? (
								<div>3</div>
							) : navbar3 ? (
								<div>4</div>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Translate;
