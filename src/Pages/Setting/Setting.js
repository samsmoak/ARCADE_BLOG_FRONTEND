import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../../context/Context";
// import { useRouteMatch } from "react-router-dom";
import Profile from "./profile";

function Setting() {
	// let { path, url } = useRouteMatch();
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	return (
		<div>
			<div className='w-screen h-screen px-10'>
				<div className='grid grid-cols-6'>
					<div className='grid grid-flow-col col-span-2 col-start-1'>
						<div className='h-screen w-52  px-5 py-10 border-r-2 border-dashed '>
							<div className='w-full space-y-6 '>
								<div className='w-full flex justify-center'>
									<div className='h-28 w-28 rounded-full overflow-hidden   z-50'>
										{user.profilePic !== "" ? (
											<img
												src={PF + user.profilePic}
												alt=''
												className='object-cover h-full w-full'
											/>
										) : (
											<div className='capitalize w-full h-full flex justify-center items-center text-3xl font-extrabold bg-zinc-400'>
												{user.username.slice(0, 1)}
											</div>
										)}
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
