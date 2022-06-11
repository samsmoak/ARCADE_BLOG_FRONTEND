import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";
import { Pagination, Navigation } from "swiper";

function Swippslider() {
	const [swiperRef, setSwiperRef] = useState(null);
	return (
		<div className='px-20'>
			<Swiper
				onSwiper={setSwiperRef}
				slidesPerView={3}
				centeredSlides={true}
				spaceBetween={10}
				pagination={{
					type: "fraction",
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='h-96 bg-neutral-800'
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

export default Swippslider;
