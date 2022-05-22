import React, { useState } from "react";
import { Outlet } from "react-router-dom";

function Profile() {
	const [file, setFile] = useState("");
	return (
		<div>
			{" "}
			<div className='h-screen w-small1'>
				<div className='w-full py-10'>
					<div className='w-full flex flex-col justify-center items-center space-y-3'>
						<div className='h-28 w-28 rounded-full overflow-hidden  z-50 bg-slate-500'>
							{file && (
								<img
									src={URL.createObjectURL(file)}
									alt=''
									className='object-cover h-full w-full'
								/>
							)}
						</div>

						<div>
							<form className='flex flex-col space-y-1'>
								<label for='filetype' className='cursor-pointer text-center'>
									<i className='fas fa-plus rounded-full p-1 border border-black'></i>
								</label>
								<input
									type='file'
									id='filetype'
									className='bg-slate-400 h-0 w-0'
									onChange={(e) => {
										setFile(e.target.files[0]);
									}}
								/>
								<button
									type='submit '
									className='bg-lime-500 px-2 py-1 rounded-md'
								>
									upload image
								</button>
							</form>
						</div>
						<div className='w-full px-7'>
							<form>
								<div className='flex flex-col'>
									<label
										for='email'
										className='font-ArchitectDaughter  font-bold  text-xl text-black'
									>
										Username
									</label>

									<input
										type='text'
										id='email'
										placeholder='Username'
										className='bg-opacity-20 '
									></input>
								</div>
								<div className='flex flex-col'>
									<label
										for='email'
										className='font-ArchitectDaughter  font-bold  text-xl text-black'
									>
										Email
									</label>

									<input
										type='text'
										id='email'
										placeholder='Email'
										className='bg-opacity-20 '
									></input>
								</div>
								<div className='flex flex-col'>
									<label
										for='password'
										className='font-ArchitectDaughter font-bold text-xl text-black'
									>
										oldPassword
									</label>
									<input
										type='password'
										id='password'
										placeholder='password'
										className='bg-opacity-20  text-gray-900'
									></input>
								</div>
								<div className='flex flex-col'>
									<label
										for='password'
										className='font-ArchitectDaughter font-bold text-xl text-black'
									>
										newPassword
									</label>
									<input
										type='password'
										id='password'
										placeholder='password'
										className='bg-opacity-20  text-gray-900'
									></input>
								</div>
								<div className='flex flex-col'>
									<label
										for='password'
										className='font-ArchitectDaughter font-bold text-xl text-black'
									>
										newPasswordConfirm
									</label>
									<input
										type='password'
										id='password'
										placeholder='password'
										className='bg-opacity-20  text-gray-900'
									></input>
								</div>
								<div className='flex justify-end py-2'>
									<button
										type='submit'
										className='bg-black text-white px-6 py-2 rounded-xl'
									>
										save changes
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
