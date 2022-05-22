import React from "react";

function Footer() {
	return (
		<div className='w-screen flex justify-center items-center py-8 mb-20'>
			<div className='grid grid-cols-5 gap-x-10 gap-y-20 '>
				<div className='space-y-3 font-extralight'>
					<div className='text-center font-bold '>social</div>
					<div className='flex space-x-2'>
						<div>
							<img
								src='https://img.icons8.com/color/144/000000/facebook.png'
								alt=''
								className='h-6 w-6'
							/>
						</div>

						<div>facebook</div>
					</div>

					<div className='flex space-x-2 '>
						<div>
							<img
								src='https://img.icons8.com/color/144/000000/instagram-new--v1.png'
								alt=''
								className='h-6 w-6'
							/>
						</div>

						<div>instagram</div>
					</div>
					<div className='flex space-x-2 '>
						<div>
							<img
								src='https://img.icons8.com/color/240/000000/youtube-play.png'
								alt=''
								className='h-6 w-6'
							/>
						</div>

						<div>youtube</div>
					</div>
					<div className='flex space-x-2 '>
						<div>
							<img
								src='https://img.icons8.com/fluency/144/000000/twitter.png'
								alt=''
								className='h-6 w-6'
							/>
						</div>

						<div>twitter</div>
					</div>
				</div>
				<div className='space-y-3 font-extralight'>
					<h1 className=' font-bold'>about</h1>
					<h1>style guide</h1>
					<h1>contact</h1>
					<h1>get theme</h1>
					<h1>you me</h1>
				</div>
				<div className='space-y-3 font-extralight'>
					<h1 className=' font-bold'>Features</h1>
					<h1>feature</h1>
					<h1>Author</h1>
					<h1>tag</h1>
					<h1>got</h1>
				</div>
				<div className='space-y-3 font-extralight'>
					<h1 className=' font-bold'>support</h1>
					<h1>serpia version</h1>
					<h1>dark vision</h1>
					<h1>membership</h1>
					<h1>you me</h1>
				</div>
				<div className='space-y-3 font-extralight'>
					<h1 className=' font-bold'>about</h1>
					<h1>style guide</h1>
					<h1>contact</h1>
					<h1>get theme</h1>
					<h1>you me</h1>
				</div>
			</div>
		</div>
	);
}

export default Footer;
