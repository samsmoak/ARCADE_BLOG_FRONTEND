import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import API from "../API";
import { Context } from "../context/Context";
import { Menu } from "@headlessui/react";
function Navbar() {
	const PF = "http://localhost:5000/images/";
	const [sidemenu, setSidemenu] = useState(false);
	const { user } = useContext(Context);
	const handlelogout = () => {
		localStorage.clear();
		window.location.replace("/");
	};
	const sidemenuhandler = () => {
		setSidemenu((sidemenu) => !sidemenu);
		let sidem = sidemenu;
		console.log(sidem);
	};
	return (
		<div
			// style={{ textDecoration: "none" }}
			className='fixed sm:absolute z-30   w-screen bg-white shadow-sm flex justify-between pl-10 '
		>
			<div className='mt-2 sm:ml-14 '>
				<Link
					to='/'
					className='font-ArchitectDaughter font-extrabold text-red-700 hover:text-red-700 '
				>
					LUSTEK
				</Link>
			</div>
			<div className='hidden sm:flex h-10 w-screen   justify-around items-center   '>
				<div className='flex space-x-4 py-2'>
					<span className='py-1'>
						<div className='text-xs font-bold  text-black cursor-pointer   '>
							Feature
						</div>
					</span>

					<div>
						<div>
							<Link to='team' className='text-xs font-bold text-black  '>
								Team
							</Link>
						</div>
					</div>
					<div>
						<Link to='mainblog' className='text-xs font-bold text-black  '>
							Blog
						</Link>
					</div>
					<div>
						<Link
							to='write'
							className='text-xs font-bold  text-lime-700 hover:text-lime-700 '
							style={{ textDecoration: "none" }}
						>
							WRITE
						</Link>
					</div>
					<div className='h-5 w-5'>
						<i class='fa-solid fa-ellipsis'></i>
					</div>
				</div>
				<div className='flex space-x-2'>
					{user ? (
						<div className='flex space-x-2 relative'>
							{/* <Link to='setting'> */}
							<Menu>
								<Menu.Button className=' rounded-full overflow-hidden h-6 w-6  text-fuchsia-800 bg-red-400 text-center capitalize font-extrabold'>
									{user.profilePic !== "" ? (
										<img
											src={PF + user.profilePic}
											alt=''
											className='object-cover h-full w-full'
										/>
									) : (
										user.username.slice(0, 1)
									)}
								</Menu.Button>
								<div className='absolute mt-6 text-gray-600 bg-gray-50  font-bold'>
									<Menu.Items className={`p-4`}>
										<Menu.Item>
											{({ active }) => (
												<Link
													className={`px-3 ${active && "bg-blue-500"}`}
													href='/account-settings'
													to='setting/profile'
												>
													Profile
												</Link>
											)}
										</Menu.Item>
										<Menu.Item>
											{({ active }) => (
												<div
													className={`px-3 ${active && "bg-blue-500"}`}
													onClick={handlelogout}
												>
													logout
												</div>
											)}
										</Menu.Item>
									</Menu.Items>
								</div>
							</Menu>
							{/* </Link> */}
						</div>
					) : (
						<div className='flex space-x-2'>
							<div className='text-white'>
								<Link
									to='login'
									style={{ textDecoration: "none" }}
									className='text-black'
								>
									Login
								</Link>
							</div>
							<div className='px-3 rounded-lg bg-zinc-900 text-white'>
								<Link to='signup' className='text-white'>
									Signup
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
			<div
				className='z-50 sm:hidden cursor-pointer relative mt-2'
				onClick={sidemenuhandler}
				// sidemenu={this.state.sidemenu}
			>
				{!sidemenu ? (
					<div className='px-1 py-1 bg-blue-500 rounded-lg mr-3 mb-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</div>
				) : (
					<div className='px-1 py-1 bg-blue-500 rounded-lg mr-3 mb-1'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>
				)}
				<div
					className={`z-50 h-screen w-72 bg-purple-700 absolute top-8 -right-1 transform duration-500 flex justify-center ${
						sidemenu ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div
						className='text-white flex flex-col space-y-4 text-xl py-10 w-3/4'
						style={{ textDecoration: "none" }}
					>
						<div className='w-full justify-center flex'>
							<Link
								to='setting/profile'
								style={{ textDecoration: "none" }}
								className='text-white '
							>
								{user && (
									<div className=' rounded-full overflow-hidden h-12 w-12  text-fuchsia-800 bg-red-400 text-center capitalize font-extrabold'>
										{user.profilePic !== "" ? (
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
										)
									</div>
								)}
							</Link>
						</div>
						<Link
							to='/'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							Home
						</Link>
						<Link
							to='/team'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							Team
						</Link>
						<div style={{ textDecoration: "none" }} className='text-white '>
							Features
						</div>
						<Link
							to='/mainblog'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							blog
						</Link>
						<Link
							to='/write'
							style={{ textDecoration: "none" }}
							className='text-white '
						>
							write
						</Link>
						{user && (
							<div className='w-full flex justify-center'>
								<div
									className='text-gray-200 rounded-xl bg-gray-700 px-2 py-1 '
									onClick={handlelogout}
								>
									logout
								</div>
							</div>
						)}
						<div className='text-white '>
							{!user && (
								<div className='flex flex-col'>
									<div className='text-white'>
										<Link
											to='login'
											style={{ textDecoration: "none" }}
											className='text-black'
										>
											Login
										</Link>
									</div>
									<div className=' text-black'>
										<Link
											to='signup'
											className='text-green-500 hover:text-green-500'
										>
											Signup
										</Link>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
