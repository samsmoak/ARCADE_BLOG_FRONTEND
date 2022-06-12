import React, { useContext } from "react";
import { Link } from "react-router-dom";
import API from "../API";
import { Context } from "../context/Context";
import { Menu } from "@headlessui/react";
function Navbar() {
	const PF = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	const handlelogout = () => {
		localStorage.clear();
		window.location.replace("/");
	};
	return (
		<div style={{ textDecoration: "none" }} className=' bg-paper-600  '>
			<div className='h-10 w-screen  flex justify-around items-center   '>
				<div className='flex space-x-4'>
					<div>
						<Link
							to='/'
							className='font-ArchitectDaughter font-extrabold text-red-700 hover:text-red-700 '
						>
							LUSTEK
						</Link>
					</div>
					<div>
						<Link to='write' className='text-xs font-bold  text-black  '>
							Feature
						</Link>
					</div>

					<div>
						<Link to='team' className='text-xs font-bold text-black  '>
							Team
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
		</div>
	);
}

export default Navbar;
