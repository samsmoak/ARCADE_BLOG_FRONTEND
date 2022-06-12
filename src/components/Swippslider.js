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
				className='h-96 bg-white'
			>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("../images/samson.png")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("./Data/sampic.jpg")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("../images/dav.jpeg")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("../images/indian.jpeg")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("./Data/sampic.jpg")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("./Data/sampic.jpg")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("./Data/sampic.jpg")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className='w-96 h-96  py-6 px-6  rounded-3xl '>
					<div className='bg-white shadow-md h-full  border-t-4 border-gray-700'>
						<div className='flex justify-center w-full -translate-y-4'>
							<div className='h-14 w-14 overflow-hidden rounded-full '>
								<img src={require("./Data/sampic.jpg")} alt='' />
							</div>
						</div>
						<div className='flex flex-col items-center'>
							<h4 className='font-bold text-sm'>alex</h4>
							<h4 className='font-semibold text-base'>software engineer</h4>
							<h4 className='font-bold text-sm'>google </h4>
						</div>

						<div className='w-full px-2'>
							<p className='text-sm font-normal text-gray-500'>
								lorem views for each state in your application, and React will
								efficiently update and render just the right components when
								your data changes. Declarative views make your code more
								predictable and easier to debug.
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Swippslider;
