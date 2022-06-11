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

// import required modules
// import { EffectCards } from "swiper";
function Cardflip() {
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
				className='flex justify-center items-center h-96 w-96 '
			>
				<SwiperSlide className='w-96 h-96 bg-stone-400 rounded-3xl '>
					Slide 1
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-yellow-400 rounded-3xl '>
					Slide 2
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-blue-400 rounded-2xl'>
					Slide 3
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-lime-400 rounded-2xl'>
					Slide 4
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-purple-400 rounded-2xl'>
					Slide 5
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-yellow-400 rounded-2xl'>
					Slide 6
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-stone-400 rounded-2xl'>
					Slide 7
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-rose-400 rounded-2xl'>
					Slide 8
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96 bg-pink-400 rounded-2xl'>
					Slide 9
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Cardflip;
