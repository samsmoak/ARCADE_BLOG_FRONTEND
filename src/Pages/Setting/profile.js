import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { Context } from "../../context/Context";
import API from "../../API";

function Profile() {
	const [file, setFile] = useState("");
	const { user, dispatch } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	const [success, setSuccess] = useState(false);

	const handleUpdate = async (e) => {
		e.preventDefault();
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: user._id,
		};

		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name + ".jpeg";
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;

			// console.log(updatedUser.profilePic);
			try {
				await API.post("/upload", data);
			} catch (err) {
				console.log(err);
			}
		}

		try {
			const res = await API.put(`/users/${user._id}`, updatedUser);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
		}
	};

	return (
		<div>
			<div className='h-screen w-small1'>
				<div className='w-full py-10'>
					<div className='w-full flex flex-col justify-center items-center space-y-3'>
						<div className='h-28 w-28 rounded-full overflow-hidden  z-50 bg-slate-500'>
							<img
								src={file ? URL.createObjectURL(file) : PF + user.profilePic}
								alt=''
								className='object-cover h-full w-full'
							/>
						</div>

						<div>
							<form className='flex flex-col space-y-1' onSubmit={handleUpdate}>
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
									type='submit'
									className={` px-2 py-1 rounded-md ${
										success ? "bg-lime-100" : "bg-lime-500"
									}`}
								>
									upload image
								</button>
							</form>
						</div>
						{success && (
							<span
								style={{
									color: "green",
									textAlign: "center",
									marginTop: "20px",
								}}
							>
								Profile has been updated...
							</span>
						)}
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
