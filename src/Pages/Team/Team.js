import React from "react";
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
import HomeFooter from "../../components/HomeFooter";
function Team() {
	return (
		<div className='w-screen'>
			<div className='bg-[url("/src/images/wavy2.svg")] h-small1 w-full flex justify-center items-center'>
				<div className='grid grid-flow-col grid-cols-4'>
					<div className='text-black col-span-2 col-start-2 place-content-center'>
						<h3 className='text-5xl text-center font-semibold uppercase font-ArchitectDaughter '>
							our team
						</h3>
						<p className='text-center'>
							But we love helping developers prepare for the real world.
						</p>
						<div className='w-full flex flex-col justify-center items-center'>
							<button className='bg-yellow-600 hover:bg-yellow-800 px-10 py-3'>
								Start Dev
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full py-8 flex flex-col items-center justify-center bg-[url("/src/images/missi3.svg")] '>
				<div className='w-full flex justify-center'>
					<div className='w-full h-full md:w-small1 md:h-small2 overflow-hidden '>
						<img
							src={require("../../images/circuu.png")}
							alt=''
							className=' w-full h-full object-cover'
						/>
					</div>
				</div>

				<div className='underline py-10 text-5xl font-bold font-ArchitectDaughter'>
					our mission
				</div>
				<p className='w-3/5 text-black font-bold'>
					Our mission is to make 1 million employees happy across the globe. We
					believe that happy workers do their best work, live their best lives,
					and are more successful because of it.
				</p>
			</div>
			<div className='w-full py-7 flex justify-center text-4xl  font-ArchitectDaughter text-blue-600'>
				<div>our executives</div>
			</div>
			<div className='mt-20 px-4 '>
				<Swiper
					effect={"cards"}
					grabCursor={true}
					modules={[EffectCards]}
					className='flex justify-center items-center  sm:w-80 '
				>
					<SwiperSlide className='bg-black  rounded-xl'>
						<div className='px-6 w-full'>
							<div className='w-full flex justify-center items-center my-6'>
								<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full outline-black shadow-2xl'>
									<img
										src={require("../../images/samson.png")}
										alt=''
										className=' w-full h-full object-cover'
									/>
								</div>
								<div className='self-end space-x-2 flex justify-center'>
									<button>
										<i class='fab fa-github-square text-xl '></i>
									</button>
									<button>
										<i class='fab fa-linkedin text-xl text-blue-500'></i>
									</button>
								</div>
							</div>
							<div className='w-full flex flex-col justify-center '>
								<h3 className='text-gray-400 text-xl'>samson</h3>
								<h6 className='text-gray-500'>
									Co-founder, CEO, and Instructor
								</h6>
							</div>
							<div>
								<p className='text-gray-500 tracking-wider text-xs font-semibold'>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion of the
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='bg-indigo-900 rounded-xl'>
						<div className='px-6 w-full'>
							<div className='w-full flex justify-center items-center my-6'>
								<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full outline-black shadow-2xl'>
									<img
										src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
										alt=''
										className=' w-full h-full object-cover'
									/>
								</div>
								<div className='self-end space-x-2 flex justify-center'>
									<button>
										<i class='fab fa-github-square text-xl '></i>
									</button>
									<button>
										<i class='fab fa-linkedin text-xl text-blue-500'></i>
									</button>
								</div>
							</div>
							<div className='w-full flex flex-col justify-center '>
								<h3 className='text-black text-xl'>Mark Luke</h3>
								<h6 className='text-gray-500'>
									Co-founder, CEO, and Instructor
								</h6>
							</div>
							<div>
								<p className='text-gray-500 tracking-wider text-xs font-semibold'>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion o
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide className='bg-violet-900 rounded-xl'>
						<div className='px-6 w-full'>
							<div className='w-full flex justify-center items-center my-6'>
								<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full outline-black shadow-2xl'>
									<img
										src='https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
										alt=''
										className=' w-full h-full object-cover'
									/>
								</div>
								<div className='self-end space-x-2 flex justify-center'>
									<button>
										<i class='fab fa-github-square text-xl '></i>
									</button>
									<button>
										<i class='fab fa-linkedin text-xl text-blue-500'></i>
									</button>
								</div>
							</div>
							<div className='w-full flex flex-col justify-center '>
								<h3 className='text-black text-xl'>Mark Luke</h3>
								<h6 className='text-gray-500'>Marketer</h6>
							</div>
							<div>
								<p className='text-gray-500 tracking-wider text-xs font-semibold'>
									Clément is an Ex-Google and Ex-Facebook Software Engineer who
									runs a YouTube channel with over 300k subscribers. After
									graduating with a degree in Mathematics from the University of
									Pennsylvania in May 2016, he decided to learn programming and
									to enroll in Fullstack Academy, an immersive coding bootcamp
									in New York City. While there, he fell in love with full-stack
									development and algorithm analysis. Upon completion o
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>

			{/* <div className='w-screen '>
				<div className='flex justify-center items-center py-20  bg-white'>
					<div className='grid grid-flow-col grid-cols-8 '>
						<div className='col-span-6 col-start-2  grid  grid-cols-1 md:grid-cols-2'>
							<div className='px-6 w-full col-span-1'>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full  shadow-2xl'>
										<img
											src='https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
											alt=''
											className=' w-full h-full object-cover'
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-youtube text-xl text-red-600'></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-xl text-blue-400'></i>
										</button>
									</div>
								</div>
								<div className='w-full flex flex-col justify-center '>
									<h3 className='text-mamba-100 text-xl'> Samuel Zih</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div>
									<p className='text-gray-500 tracking-wider text-sm'>
										Clément is an Ex-Google and Ex-Facebook Software Engineer
										who runs a YouTube channel with over 300k subscribers. After
										graduating with a degree in Mathematics from the University
										of Pennsylvania in May 2016, he decided to learn programming
										and to enroll in Fullstack Academy, an immersive coding
										bootcamp in New York City. While there, he fell in love with
										full-stack development and algorithm analysis. Upon
										completion of the program, he dove deeper into the field of
										algorithms and aced the Google interviews. The frustration
										that he felt during his interview prep led him to creating
										AlgoExpert. He used AlgoExpert to prepare for the Facebook
										interviews; unsurprisingly, he aced them!
									</p>
								</div>
							</div>
							<div className='px-6 w-full col-span-1'>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full outline-black  shadow-2xl'>
										<img
											src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
											alt=''
											className=' w-full h-full object-cover '
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-youtube text-xl text-red-600'></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-xl text-blue-400'></i>
										</button>
									</div>
								</div>
								<div className='w-full flex flex-col justify-center '>
									<h3 className='text-mamba-100 text-xl'>Antoine Pourchet</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div>
									<p className='text-gray-500 tracking-wider text-sm'>
										Clément is an Ex-Google and Ex-Facebook Software Engineer
										who runs a YouTube channel with over 300k subscribers. After
										graduating with a degree in Mathematics from the University
										of Pennsylvania in May 2016, he decided to learn programming
										and to enroll in Fullstack Academy, an immersive coding
										bootcamp in New York City. While there, he fell in love with
										full-stack development and algorithm analysis. Upon
										completion of the program, he dove deeper into the field of
										algorithms and aced the Google interviews. The frustration
										that he felt during his interview prep led him to creating
										AlgoExpert. He used AlgoExpert to prepare for the Facebook
										interviews; unsurprisingly, he aced them!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<div className='w-full flex justify-center py-10 text-5xl font-bold font-ArchitectDaughter'>
				<div>our engineers</div>
			</div>
			<div className=' w-full'>
				<div className='flex justify-center items-center py-20  bg-white'>
					<div className='grid grid-flow-col grid-cols-8 '>
						<div className='col-span-8 sm:col-span-6 sm:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-x-3'>
							<div className=' px-6 w-96 md:w-full lg:w-small2 shadow-xl rounded-xl'>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full outline-black shadow-2xl'>
										<img
											src={require("../../images/dav.jpeg")}
											alt=''
											className=' w-full h-full object-cover'
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-github-square text-xl '></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-xl text-blue-500'></i>
										</button>
									</div>
								</div>
								<div className='w-full flex flex-col justify-center '>
									<h3 className='text-mamba-100 text-xl'>Mark Luke</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div>
									<p className='text-gray-500 tracking-wider text-sm'>
										Clément is an Ex-Google and Ex-Facebook Software Engineer
										who runs a YouTube channel with over 300k subscribers. After
										graduating with a degree in Mathematics from the University
										of Pennsylvania in May 2016, he decided to learn programming
										and to enroll in Fullstack Academy, an immersive coding
										bootcamp in New York City. While there, he fell in love with
										full-stack development and algorithm analysis. Upon
									</p>
								</div>
							</div>
							<div className='px-6 w-96 md:w-full lg:w-small2 shadow-xl rounded-xl'>
								<div className='w-full flex justify-center items-center my-6'>
									<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full   shadow-2xl'>
										<img
											src={require("../../components/Data/sampic.jpg")}
											alt=''
											className=' w-full h-full object-cover '
										/>
									</div>
									<div className='self-end space-x-2 flex justify-center'>
										<button>
											<i class='fab fa-github-square text-xl '></i>
										</button>
										<button>
											<i class='fab fa-linkedin text-xl text-blue-400'></i>
										</button>
									</div>
								</div>
								<div className='w-full flex flex-col justify-center '>
									<h3 className='text-mamba-100 text-xl'>Sara Banks</h3>
									<h6 className='text-gray-500'>
										Co-founder, CEO, and Instructor
									</h6>
								</div>
								<div>
									<p className='text-gray-500 tracking-wider text-sm'>
										Clément is an Ex-Google and Ex-Facebook Software Engineer
										who runs a YouTube channel with over 300k subscribers. After
										graduating with a degree in Mathematics from the University
										of Pennsylvania in May 2016, he decided to learn programming
										and to enroll in Fullstack Academy, an immersive coding
										bootcamp in New York City. While there, he fell in love with
										full-stack development and algorithm analysis. Upon
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-full flex justify-center py-10 text-5xl font-bold font-ArchitectDaughter'>
				<div>our investors</div>
			</div>
			<div className='w-full flex justify-center items-center  py-6'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-5  lg:space-x-8 lg:h-small2  '>
					<div className=' '>
						<div className='bg-white w-72   overflow-hidden shadow-md rounded-2xl'>
							<div className='overflow-hidden h-48'>
								<img
									src={require("../../images/uber.jpg")}
									alt=''
									className='h-full w-full object-cover '
								/>
							</div>
							<div className=' text-black  flex flex-col justify-end px-3 py-4 space-y-4'>
								<div>
									<div>
										<h1 className=' w-full font-extrabold text-sm text-black   bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
											uber
										</h1>
									</div>
								</div>
								<div className='space-y-2'>
									<div>
										<div className='flex space-x-2'>
											<div className=''>
												<div className='rounded-full h-6 w-6 bg-rose-400 text-sm font-bold capitalize flex justify-center items-center'>
													v
												</div>
											</div>
											<div className='w-full flex item-center mt-1'>
												<div
													className='link  text-xs font-thin text-gray-400'
													style={{ textDecoration: "none" }}
												>
													<b> venture group</b>
												</div>
											</div>
										</div>
									</div>
									<h4 className='w-full text-gray-500 text-xs'>zibefy</h4>
								</div>
							</div>
						</div>
					</div>
					<div className=' '>
						<div className='bg-white w-72   overflow-hidden shadow-md rounded-2xl'>
							<div className='overflow-hidden h-48'>
								<img
									src={require("../../images/ant.jpg")}
									alt=''
									className='h-full w-full object-cover '
								/>
							</div>
							<div className=' text-black  flex flex-col justify-end px-3 py-4 space-y-4'>
								<div>
									<div>
										<h1 className=' w-full font-extrabold text-sm text-black   bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100 uppercase'>
											atnt
										</h1>
									</div>
								</div>
								<div className='space-y-2'>
									<div>
										<div className='flex space-x-2'>
											<div className=''>
												<div className='rounded-full h-6 w-6 bg-rose-400 text-sm font-bold capitalize flex justify-center items-center'>
													a
												</div>
											</div>
											<div className='w-full flex item-center mt-1'>
												<div
													className='link  text-xs font-thin text-gray-400'
													style={{ textDecoration: "none" }}
												>
													<b> venture group</b>
												</div>
											</div>
										</div>
									</div>
									<h4 className='w-full text-gray-500 text-xs'>zibefy</h4>
								</div>
							</div>
						</div>
					</div>
					<div className=' '>
						<div className='bg-white w-72   overflow-hidden shadow-md rounded-2xl'>
							<div className='overflow-hidden h-48'>
								<img
									src={require("../../images/reliance.jpeg")}
									alt=''
									className='h-full w-full object-cover '
								/>
							</div>
							<div className=' text-black  flex flex-col justify-end px-3 py-4 space-y-4'>
								<div>
									<div>
										<h1 className=' w-full font-extrabold text-sm text-black   bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
											reliance
										</h1>
									</div>
								</div>
								<div className='space-y-2'>
									<div>
										<div className='flex space-x-2'>
											<div className=''>
												<div className='rounded-full h-6 w-6 bg-rose-400 text-sm font-bold capitalize flex justify-center items-center'>
													a
												</div>
											</div>
											<div className='w-full flex item-center mt-1'>
												<div
													className='link  text-xs font-thin text-gray-400'
													style={{ textDecoration: "none" }}
												>
													<b> username</b>
												</div>
											</div>
										</div>
									</div>
									<h4 className='w-full text-gray-500 text-xs'>zibefy</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<HomeFooter />
		</div>
	);
}

export default Team;
