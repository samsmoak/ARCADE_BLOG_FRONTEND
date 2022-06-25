import React, { useState } from "react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Parallax,
	EffectCards,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/parallax";
import "swiper/css/effect-fade";
import "swiper/css";
import "swiper/css/effect-cards";
import AOS from "aos";
import "aos/dist/aos.css";
// import Bulb2 from "../images/bulb2";s

// import required modules
// import { EffectCards } from "swiper";
function Cardflip() {
	AOS.init();
	// const Swiper = new Swiper(".swiper", {
	// 	effect: "cards",
	// 	cardsEffect: {
	// 		rotate: true,
	// 	},
	// });
	return (
		<div className=''>
			<Swiper
				effect={"cards"}
				grabCursor={true}
				modules={[EffectCards]}
				className='flex justify-center items-center h-80  w-52 sm:h-96 sm:w-64 lg:w-80 '
			>
				<SwiperSlide className='w-96 h-96 bg-purple-700 rounded-xl flex justify-center items-center '>
					<div className='space-y-4 text-white'>
						<p className='w-full flex items-center flex-col text-xs sm:text-4xl font-extrabold font-redressed'>
							<span className='text-yellow-500'>Arcadei's</span> core believes
						</p>
						<div className='w-full flex justify-center flex-col items-center'>
							<p className='sm:text-xl font-bold'>values</p>
							<p className='sm:text-2xl font-extrabold font-redressed'>
								& principles
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-stone-800 rounded-xl flex justify-center items-center '>
					<div className='space-y-4 text-white'>
						<div></div>
						<p className='text-sm sm:text-4xl font-extrabold font-redressed w-full text-center'>
							imaginative power
						</p>
						<div className='w-full flex justify-center flex-col items-center px-3'>
							<p className='text-xs  sm:text-sm font-semibold text-center '>
								application, and React will efficiently update and render just
								the right components when your data changes. Declarative views
								make your code more predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-neutral-800 rounded-xl flex justify-center items-center '>
					<div className='space-y-4 text-white'>
						<div></div>
						<p className='text-sm sm:text-4xl  font-extrabold font-redressed w-full text-center'>
							reliability
						</p>
						<div className='w-full flex justify-center flex-col items-center px-3'>
							<p className='text-xs  sm:text-sm font-semibold text-center '>
								application, and React will efficiently update and render just
								the right components when your data changes. Declarative views
								make your code more predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-slate-800 rounded-xl flex justify-center items-center '>
					<div className='space-y-4 text-white'>
						<div></div>
						<p className='text-sm sm:text-4xl  font-extrabold font-redressed w-full text-center'>
							trustworthiness
						</p>
						<div className='w-full flex justify-center flex-col items-center px-3'>
							<p className='text-xs  sm:text-sm font-semibold text-center '>
								application, and React will efficiently update and render just
								the right components when your data changes. Declarative views
								make your code more predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-neutral-800 rounded-xl flex justify-center items-center '>
					<div className='space-y-4 text-white'>
						<div></div>
						<p className='text-sm sm:text-4xl  font-extrabold font-redressed w-full text-center'>
							expedience
						</p>
						<div className='w-full flex justify-center flex-col items-center px-3'>
							<p className='text-xs  sm:text-sm font-semibold text-center '>
								application, and React will efficiently update and render just
								the right components when your data changes. Declarative views
								make your code more predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-stone-800 rounded-xl flex justify-center items-center '>
					<div className='space-y-4 text-white'>
						<div></div>
						<p className='text-sm sm:text-4xl  font-extrabold font-redressed w-full text-center'>
							best of the best
						</p>
						<div className='w-full flex justify-center flex-col items-center px-3'>
							<p className='text-xs  sm:text-sm font-semibold text-center '>
								application, and React will efficiently update and render just
								the right components when your data changes. Declarative views
								make your code more predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-zinc-800 rounded-xl flex justify-center items-center '>
					<div className='space-y-4 text-white'>
						<div></div>
						<p className='text-sm sm:text-4xl font-extrabold font-redressed w-full text-center'>
							industry high standards
						</p>
						<div className='w-full flex justify-center flex-col items-center px-3'>
							<p className='text-xs  sm:text-sm font-semibold text-center '>
								application, and React will efficiently update and render just
								the right components when your data changes. Declarative views
								make your code more predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Cardflip;
