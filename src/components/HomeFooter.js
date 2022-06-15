import React from "react";

function HomeFooter() {
	return (
		<div>
			{" "}
			<div className=' bg-indigo-900 flex items-center justify-center'>
				<div className='grid sm:grid-cols-2 lg:grid-cols-5 text-white gap-5  py-20'>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Arcadei</h4>
						<div>
							<h6 className='text-xs font-light'>Desktop app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Plans</h6>
							<h6 className='text-xs font-light'>Features</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Company</h4>
						<div>
							<h6 className='text-xs font-light'>Desktop app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Plans</h6>
							<h6 className='text-xs font-light'>Features</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Support</h4>
						<div>
							<h6 className='text-xs font-light'>Desktop app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Plans</h6>
							<h6 className='text-xs font-light'>Features</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Community</h4>
						<div>
							<h6 className='text-xs font-light'>Desktop app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Plans</h6>
							<h6 className='text-xs font-light'>Features</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Products</h4>
						<div>
							<h6 className='text-xs font-light'>Desktop app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Plans</h6>
							<h6 className='text-xs font-light'>Features</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeFooter;
