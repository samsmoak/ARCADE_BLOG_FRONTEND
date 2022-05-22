import React from "react";
import Post from "./Post";
import RecentPost from "./RecentPost";

function Posts(props) {
	return (
		<div>
			{/* featured posts */}
			<div className='flex justify-center w-screen py-10'>
				<div className='grid  grid-flow-col  space-x-8 '>
					{props.recent.map((p) => {
						return <RecentPost recent={p} key={p._id} />;
					})}
				</div>
			</div>
			{/* posts authors sessions */}
			<div className='w-screen   flex justify-center '>
				<div className='w-5/6 '>
					<div className='grid grid-flow-col '>
						<div>
							<p className='text-5xl font-extralight font-redressed w-2/4 text-rose-600'>
								see what we've writen lately
							</p>
						</div>
						<div className=' flex flex-col justify-center'>
							<div className='flex justify-center '>
								<div className='h-10 w-10 rounded-full overflow-hidden  z-50'>
									<img
										src='https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg'
										alt=''
										className='object-cover h-full w-full'
									/>
								</div>
								<div className='h-10 w-10 rounded-full overflow-hidden -translate-x-2 z-40'>
									<img
										src='https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg'
										alt=''
										className='object-cover h-full w-full'
									/>
								</div>
								<div className='h-10 w-10 rounded-full overflow-hidden -translate-x-4 z-30'>
									<img
										src='https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg'
										alt=''
										className='object-cover h-full w-full'
									/>
								</div>
								<div className='h-10 w-10 rounded-full overflow-hidden -translate-x-6 z-20'>
									<img
										src='https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg'
										alt=''
										className='object-cover h-full w-full'
									/>
								</div>
							</div>
							<div className=' flex justify-center'>
								<p className='text-xs font-light text-rose-400'>
									meet our top authors
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* post of late */}
			<div className='flex w-screen py-8 justify-center'>
				<div className=' grid grid-flow-col gap-4'>
					<div className='w-small1 h-96 bg-slate-600 rounded-6xl overflow-hidden relative transition-all duration-200 hover:-translate-y-2 '>
						<img
							src='https://images.unsplash.com/photo-1645839744008-2d3a0b6a62e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80'
							alt=''
							className='object-cover h-full w-full'
						/>
						<div className='z-10 text-white absolute left-0 right-0 bottom-0 top-0 flex flex-col ml-5 justify-end py-5'>
							<div>hey</div>
							<div>hey</div>
							<div>hey</div>
						</div>
					</div>
					<div className='w-72 h-96 bg-slate-600 rounded-6xl overflow-hidden relative transition-all duration-200 hover:-translate-y-2 '>
						<img
							src='https://images.unsplash.com/photo-1645389410604-f5d8ef44267a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1007&q=80'
							alt=''
							className='object-cover h-full w-full'
						/>
						<div className='z-10 text-white absolute left-0 right-0 bottom-0 top-0 flex flex-col ml-5 justify-end py-5'>
							<div>hey</div>
							<div>hey</div>
							<div>hey</div>
						</div>
					</div>
				</div>
			</div>
			{/* rest of thee posts */}
			<div>
				<div className=' py-4 w-screen '>
					<div className=' flex items-center justify-center'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-5   '>
							{props.posts.map((p) => {
								return <Post post={p} key={p._id} />;
							})}
						</div>
					</div>
				</div>
			</div>
			<div className='h-40 w-screen'></div>
		</div>
	);
}

export default Posts;
