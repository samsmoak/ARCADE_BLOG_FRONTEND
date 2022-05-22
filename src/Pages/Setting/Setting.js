import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";
import Profile from "./profile";

function Setting() {
	// let { path, url } = useRouteMatch();
	return (
		<div>
			<div className='w-screen h-screen px-10'>
				<div className='grid grid-cols-6'>
					<div className='grid grid-flow-col col-span-2 col-start-1'>
						<div className='h-screen w-52  px-5 py-10 border-r-2 border-dashed '>
							<div className='w-full space-y-6 '>
								<div className='w-full flex justify-center'>
									<div className='h-28 w-28 rounded-full overflow-hidden  z-50'>
										<img
											src='https://cdn.pixabay.com/photo/2017/12/28/16/18/bicycle-3045580_1280.jpg'
											alt=''
											className='object-cover h-full w-full'
										/>
									</div>
								</div>
								<div className='w-full flex flex-col  justify-center items-center uppercase font-Yanone_Kaffeesatz'>
									<Link to='/setting/profile'>
										<div>profile</div>
									</Link>

									<Link to='/setting/dashboard'>
										<div>dashboard</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-4'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Setting;
