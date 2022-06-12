import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Imagesdata } from "../components/Data/imagesdata";
import Img from "../components/Data/sampic.jpg";

function Carouselcom() {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<div className='   flex  items-center justify-center h-screen w-screen '>
			<div className='grid grid-cols-6 '>
				<div className=' col-start-2 col-span-4 '>
					<Carousel
						activeIndex={index}
						onSelect={handleSelect}
						className='mt-14 border-b-2 '
						// onChange={setInView}
						variant='dark'
						images={``}
					>
						<Carousel.Item hover={"pause"} className='p-10'>
							<img
								className='d-block h-96 w-screen'
								src='https://cdn.pixabay.com/photo/2018/12/06/16/12/birds-3860034_1280.jpg'
								alt='First slide'
							/>
							{/* <div className='bg-mamba-100'></div> */}

							<Carousel.Caption className=''>
								<div className='bg-red-600 h-96 flex justify-around items-center bg-opacity-0 font-light space-x-5'>
									<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
										<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
											<img src={Img} alt='' className=' w-full h-full' />
										</div>
										<p>
											lorem20Praesent commodo cursus magna, vel scelerisque nisl
											consectetur. lorem20Praesent commodo cursus magna, vel
											scelerisque nisl consectetur.
										</p>
									</div>
									<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
										<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
											<img
												src='https://cdn.pixabay.com/photo/2018/12/06/16/12/birds-3860034_1280.jpg'
												alt=''
												className=' w-full h-full'
											/>
										</div>
										<p>
											lorem20Praesent commodo cursus magna, vel scelerisque nisl
											consectetur. lorem20Praesent commodo cursus magna, vel
											scelerisque nisl consectetur.
										</p>
									</div>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item hover={"pause"} className='p-10'>
							<img
								className='d-block h-96 w-screen'
								src='https://cdn.pixabay.com/photo/2018/12/06/16/12/birds-3860034_1280.jpg'
								alt='First slide'
							/>
							{/* <div className='bg-mamba-100'></div> */}

							<Carousel.Caption className=''>
								<div className='bg-red-600 h-96 flex justify-around items-center bg-opacity-0 space-x-5'>
									<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
										<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
											<img
												src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80'
												alt=''
												className=' w-full h-full'
											/>
										</div>
										<p>
											lorem20Praesent commodo cursus magna, vel scelerisque nisl
											consectetur. lorem20Praesent commodo cursus magna, vel
											scelerisque nisl consectetur.
										</p>
									</div>
									<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
										<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
											<img
												src='https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80'
												alt=''
												className=' w-full h-full'
											/>
										</div>
										<p>
											lorem20Praesent commodo cursus magna, vel scelerisque nisl
											consectetur. lorem20Praesent commodo cursus magna, vel
											scelerisque nisl consectetur.
										</p>
									</div>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item hover={"pause"} className='p-10'>
							<img
								className='d-block h-96 w-screen'
								src='https://cdn.pixabay.com/photo/2018/12/06/16/12/birds-3860034_1280.jpg'
								alt='First slide'
							/>
							{/* <div className='bg-mamba-100'></div> */}
							<Carousel.Caption className=''>
								<div className='bg-red-600 h-96 flex justify-around items-center bg-opacity-0 space-x-5'>
									<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
										<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
											<img
												src='https://images.unsplash.com/photo-1584999734482-0361aecad844?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80'
												alt=''
												className=' w-full h-full'
											/>
										</div>
										<p>
											lorem20Praesent commodo cursus magna, vel scelerisque nisl
											consectetur. lorem20Praesent commodo cursus magna, vel
											scelerisque nisl consectetur.
										</p>
									</div>
									<div className=' w-96 py-6 bg-white text-black flex flex-col justify-center items-center '>
										<div className=' h-32 w-32 overflow-hidden  bg-mamba-100 rounded-full'>
											<img
												src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
												alt=''
												className=' w-full h-full'
											/>
										</div>
										<p>
											lorem20Praesent commodo cursus magna, vel scelerisque nisl
											consectetur. lorem20Praesent commodo cursus magna, vel
											scelerisque nisl consectetur.
										</p>
									</div>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export default Carouselcom;
