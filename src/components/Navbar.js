import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
function Navbar() {
	const PF = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	return (
		<div>
			<div className='h-10 w-screen bg-transparent flex justify-around items-center  '>
				<div className='flex space-x-4'>
					<div>
						<Link
							to='/'
							className='font-ArchitectDaughter font-extrabold text-red-700 '
						>
							ARCADEBLOG
						</Link>
					</div>
					<div>
						<Link to='write' className='font-shizuru  '>
							FEATURE
						</Link>
					</div>

					<div>
						<Link to='write' className='font-shizuru  '>
							MEMBER
						</Link>
					</div>
					<div>
						<Link to='write' className='font-shizuru text-lime-700 '>
							WRITE
						</Link>
					</div>
					<div className='h-5 w-5'>
						<i class='fa-solid fa-ellipsis'></i>
					</div>
				</div>
				<div className='flex space-x-2'>
					<div>
						<Link to='login'>Login</Link>
					</div>
					<div className='px-3 rounded-lg bg-zinc-900 text-white'>
						<Link to='signup'>Signup</Link>
					</div>
					<Link to='setting'>
						<div className=' rounded-full overflow-hidden h-6 w-6  text-white'>
							<img
								src={PF + user.profilePic}
								alt=''
								className='object-cover h-full w-full'
							/>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
