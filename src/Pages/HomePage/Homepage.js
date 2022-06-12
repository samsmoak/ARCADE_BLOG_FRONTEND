import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
// import Slider from "../../components/Slider";
// import Slider from "react-slick";
import { Carousel } from "react-bootstrap";
import Carouselcom from "../../components/Carouselcom";
import HomeFooter from "../../components/HomeFooter";
import Deck from "../../components/Deck";
import Cardflip from "../../components/Cardflip";
import Swippslider from "../../components/Swippslider";

function Homepage() {
	const [right, setRight] = useState(0);
	const [left, setLeft] = useState(0);
	const [boolleft, setboolLeft] = useState(0);
	const [boolright, setboolRight] = useState(0);
	const [index, setIndex] = useState(0);
	const [number, setNumber] = useState(0);
	// const [fee, setFee] = useState(`translate-x-[${right}]`);
	// const [pee, setPee] = useState[`-translate-x-[${right}]`];
	// ${boolright ? fee : boolleft ? pee : null}

	// const slideRight = () => {
	// 	setboolLeft(false);

	// 	setboolRight(true);
	// 	setRight(right + 10);
	// };
	// const slideLeft = () => {
	// 	setboolRight(false);
	// 	setboolLeft(true);
	// 	setLeft(left + 10);
	// };
	// const handleSelect = (selectedIndex, e) => {
	// 	setIndex(selectedIndex);
	// };
	// console.log(right);
	const prevHandler = () => {
		setNumber(number + 1);
	};
	const nextHandler = () => {
		setNumber(number - 1);
	};

	// let stack = document.querySelector("#stack");
	// console.log(stack);
	// [...stack.children].reverse().forEach((element) => {
	// 	stack.append(element);
	// });

	return (
		<div className='py-10 px-12'>
			<div className='shadow-xl'>
				<div className='grid grid-cols-2  bg-[url("/src/images/firstbg.svg")] bg-no-repeat object-contain bg-center '>
					<div className='w-full h-small1  flex justify-center items-center space-x-2 object-cover'>
						<div className='w-full flex justify-center text-4xl text-white bg-white opacity-70 py-3'>
							<div className='text-black'>
								<h4 className='text-lg font-extrabold text-purple-800'>
									Luxstek Customer Engagement Platform
								</h4>
								<h5 className='text-xl font-bold'>
									Intelligent customer engagement—at scale
								</h5>
								<div>
									<p className='text-xs font-normal'>
										Luxstek powers personalized interactions and trusted global
										<br />
										communications to connect you with customers.
									</p>
								</div>
								<div className='w-full '>
									<button className='text-lg py-2 px-3 bg-rose-400 font-bold flex space-x-3'>
										<div>signup and start building</div>
										<div className='fleex items-center justify-center h-full mt-1'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												class='h-6 w-6'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												stroke-width='2'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M17 8l4 4m0 0l-4 4m4-4H3'
												/>
											</svg>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center items-center'>
						<Cardflip />
					</div>
				</div>

				<div className=' flex items-center flex-col p-28 bg-rose-400 '>
					<p className='text-2xl text-black font-extrabold'>
						Companies maximizing sales productivity with Luxstek
					</p>
					<div className='flex space-x-8'>
						<div>bixer</div>
						<div>facebook</div>
						<div>akia</div>
						<div>dominos</div>
					</div>
				</div>
				<div className='flex justify-center space-x-24 py-40 bg-[url("/src/images/seconddot.svg")] '>
					<div className='w-96 bg-white opacity-90'>
						<div className='flex'>
							<div>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-14 w-14 text-red-400'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									stroke-width='2'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
									/>
								</svg>
							</div>
							<div className='flex justify-center items-center'>
								<p className='font-medium text-gray-400'>GAMIFICATION</p>
							</div>
						</div>

						<p className='text-2xl font-bold text-indigo-900'>
							Gamified incentives that drive employee performance
						</p>
						<p className='text-xs text-gray-500'>
							Design and select team building games that work best for your
							company, and watch your revenue skyrocket.
						</p>
						<button className='px-3 py-2 bg-indigo-900 text-white rounded-3xl text-center font-bold'>
							learn more
						</button>
					</div>
					<div className='  h-96'>
						<img
							src={require("../../images/gamified.jpg")}
							alt='imd'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
				<div className=' w-full flex justify-center space-x-36  '>
					<div className='w-3/5  grid grid-flow-col p-28  '>
						<div className='flex'>
							<div className='space-y-6' id='lefter'>
								<div className=' h-72 w-56 bg-red-500 px-6 py-7 duration-500 hover:skew-x-6'>
									<div>
										<img
											src='http://instabase.com/wp-content/uploads/2021/02/BestInClass.svg'
											alt=''
											className='h-6 w-6'
										/>
									</div>

									<h3 className='text-sm font-bold '>
										typeface without relying on meaningful
									</h3>
									<p className='text-xs font-light'>
										lor placeholder text commonly used to demonstrate the visual
										form of a document or a typeface without relying on
										meaningful content
									</p>
									<button className='font-bold text-xs'>learn more</button>
								</div>
								<div className=' h-72 w-56 bg-yellow-500 px-6 py-7 duration-500 hover:skew-x-6'>
									<div>
										<img
											src='http://instabase.com/wp-content/uploads/2021/02/EnterpriseFirst.svg'
											alt=''
											className='h-6 w-6'
										/>
									</div>

									<h3 className='text-sm font-bold '>
										typeface without relying on meaningful
									</h3>
									<p className='text-xs font-light'>
										lor placeholder text commonly used to demonstrate the visual
										form of a document or a typeface without relying on
										meaningful content
									</p>
									<button className='font-bold text-xs'>learn more</button>
								</div>
							</div>
						</div>
						<div className='place-self-center'>
							<div className=' h-72 w-56 bg-blue-500 px-6 py-7 duration-500 hover:skew-x-6'>
								<div>
									<img
										src='http://instabase.com/wp-content/uploads/2021/02/UltimateConfigurability.svg'
										alt=''
										className='h-6 w-6'
									/>
								</div>

								<h3 className='text-sm font-bold '>
									typeface without relying on meaningful
								</h3>
								<p className='text-xs font-light'>
									lor placeholder text commonly used to demonstrate the visual
									form of a document or a typeface without relying on meaningful
									content
								</p>
								<button className='font-bold text-xs'>learn more</button>
							</div>
						</div>
					</div>

					<div className='flex justify-center   flex-col'>
						<h4 className='tracking-wider font-semibold text-gray-600 text-lg'>
							OUTCOMES, DELIVERED.
						</h4>
						<h4 className='uppercase text-base font-semibold'>
							The LUSTEK <br />
							Differentiator.
						</h4>
					</div>
				</div>
				<div className='flex justify-center space-x-24'>
					<div className='w-96'>
						<div className='flex space-x-3'>
							<div>
								<img
									src='https://assets.website-files.com/60d0ba6ccaccf1b732cba1d2/60da7f1e267c52baae533bfd_Communication%20icon%20-%20home.svg'
									loading='lazy'
									alt=''
									className='w-6h-6'
								/>
							</div>
							<div className='flex justify-center items-center'>
								<p className='font-light text-gray-400'>COMMUNICATION</p>
							</div>
						</div>

						<p className='text-2xl font-bold text-indigo-800'>
							Collaboration that builds team culture
						</p>
						<p className='text-xs text-gray-500'>
							With Arcade, you can go beyond basic gamification to help drive
							improved collaboration; deliver data-driven insights on game
							performance and where they need improvements; and leverage
							powerful integrations that offer a streamlined platform to help
							keep performance on track.
						</p>
						<button className='px-3 py-2 bg-indigo-900 text-white rounded-3xl text-center font-bold'>
							learn more
						</button>
					</div>
					<div className='  h-96'>
						<img
							src={require("../../images/slackk.png")}
							alt='imd'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
				<div className='flex justify-center space-x-24 py-40'>
					<div className='  h-96'>
						<img
							src={require("../../images/next.png")}
							alt='imd'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='w-96'>
						<div className='flex space-x-3'>
							<div>
								<svg
									width='48'
									height='48'
									viewBox='0 0 48 48'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<circle cx='24' cy='24' r='24' fill='#8959C3' />
									<path
										d='M14 22L21 15L27 21L34 14'
										stroke='white'
										stroke-width='2'
										stroke-miterlimit='10'
										stroke-linecap='square'
									/>
									<path
										d='M15 34V31'
										stroke='white'
										stroke-width='2'
										stroke-miterlimit='10'
										stroke-linecap='square'
									/>
									<path
										d='M21 24V34'
										stroke='white'
										stroke-width='2'
										stroke-miterlimit='10'
										stroke-linecap='square'
									/>
									<path
										d='M27 34V31'
										stroke='white'
										stroke-width='2'
										stroke-miterlimit='10'
										stroke-linecap='square'
									/>
									<path
										d='M33 24V34'
										stroke='white'
										stroke-width='2'
										stroke-miterlimit='10'
										stroke-linecap='square'
									/>
								</svg>
							</div>
							<div className='flex justify-center items-center'>
								<p className='font-light text-gray-400'>insight</p>
							</div>
						</div>

						<p className='text-2xl font-bold text-indigo-800'>
							Data & Reporting
						</p>
						<p className='text-xs text-gray-500'>
							Deep dive into raw data to analyze team, or individual performance
							against goals with intelligent insights on game summaries, dynamic
							views into timelines, measurable metrics, and investment cost and
							results.
						</p>
						<button className='px-3 py-2 bg-indigo-900 text-white rounded-3xl text-center font-bold'>
							learn more
						</button>
					</div>
				</div>
				<div className='  py-10 w-screen bg-mamba-100 grid  lg:grid-cols-4 place-items-center content-center text-white '>
					<div className='col-span-1 px-4 self-center'>
						<h6 className='font-medium text-indigo-400'>RESOURCES</h6>
						<h3 className='font-bold text-3xl font-sans'>Company Insights.</h3>
						<p className='font-light text-lg'>
							Learn more about how Instabase is revolutionizing operational
							productivity.
						</p>
					</div>
					<div className=' col-span-3  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-black '>
						<div className='  bg-paper-400 col-span-1 space-y-4 pb-2  '>
							<div className=''>
								<img
									src='https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
									alt=''
								/>
							</div>
							<div className='p-3'>
								<h5 className='capitalize text-xl font-medium'>
									creating more to tackle covid crisis
								</h5>
								<p className='font-light'>
									lorem views for each state in your application, and React will
									efficiently update and render just the right components when
									your data changes. Declarative views make your code more
									predictable and easier to debug.
								</p>
								<button>learn more</button>
							</div>
						</div>
						<div className='   bg-paper-200 col-span-1 space-y-4 pb-2 '>
							<div className=''>
								<img
									src='https://images.unsplash.com/photo-1497366216548-37526070297c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2301&q=80'
									alt=''
								/>
							</div>
							<div className='p-3'>
								<h5 className='capitalize text-xl font-medium'>
									creating more to tackle covid crisis
								</h5>
								<p className='font-light'>
									lorem views for each state in your application, and React will
									efficiently update and render just the right components when
									your data changes. Declarative views make your code more
									predictable and easier to debug.
								</p>
								<button>learn more</button>
							</div>
						</div>
						<div className='  bg-paper-100 col-span-1 space-y-4 pb-2 '>
							<div className=''>
								<img
									src='https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80'
									alt=''
								/>
							</div>
							<div className='p-3'>
								<h5 className='capitalize text-xl font-medium'>
									creating more to tackle covid crisis
								</h5>
								<p className='font-light'>
									lorem views for each state in your application, and React will
									efficiently update and render just the right components when
									your data changes. Declarative views make your code more
									predictable and easier to debug.
								</p>
								<button>learn more</button>
							</div>
						</div>
					</div>
				</div>

				<div className='py-20'>
					{/* <Carouselcom /> */}
					<Swippslider />
				</div>
				<div>
					<HomeFooter />
				</div>
			</div>
		</div>
	);
}

export default Homepage;
