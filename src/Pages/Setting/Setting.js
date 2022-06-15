import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import HomeFooter from "../../components/HomeFooter";
import { Context } from "../../context/Context";
// import { useRouteMatch } from "react-router-dom";
import Profile from "./profile";

function Setting() {
	// let { path, url } = useRouteMatch();
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	return (
		<div className='bg-paper-400 pt-10'>
			<div className='w-screen lg:h-screen px-10'>
				<div className='grid grid-cols-1 lg:grid-cols-6'>
					<div className='grid grid-flow-col lg:col-span-2 col-start-1 '>
						<div className='w-full lg:h-screen   px-5 py-10 border-r-2 border-dashed bg-mamba-100 '>
							<div className='w-full space-y-6 '>
								<div className='w-full flex justify-center'>
									<div className='z-20 h-28 w-28 rounded-full overflow-hidden bg-white   '>
										{user.profilePic == "" ? (
											<img
												src={PF + user.profilePic}
												alt=''
												className='object-cover h-full w-full'
											/>
										) : (
											<div className='capitalize w-full h-full flex justify-center items-center text-3xl font-extrabold text-black'>
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
					<div className='lg:col-span-4'>
						<Outlet />
					</div>
				</div>
			</div>
			<HomeFooter />
		</div>
	);
}

export default Setting;
