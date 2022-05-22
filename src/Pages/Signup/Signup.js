import React from "react";
import { useState } from "react";
import API from "../../API";

function Signup() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const handlesubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			const res = await API.post("/auth/register", {
				username,
				email,
				password,
			});
			res.data && window.location.replace("/login");
		} catch (err) {
			setError(true);
			console.log(err);
		}
	};
	return (
		<div>
			<div className=' w-screen h-screen  bg-[url("https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg")] bg-cover flex justify-center items-center '>
				<div className='h-small2 w-96 bg-gray-600 bg-opacity-50 rounded-xl py-10 px-4 border-t-2 border-r-4 border-b-2 border-opacity-30 border-gray-700'>
					<div className='font-Yanone_Kaffeesatz text-4xl text-rose-500 uppercase text-center w-full'>
						create your arcade account
					</div>
					<form onSubmit={handlesubmit}>
						<div className='flex flex-col'>
							<label
								for='email'
								className='font-ArchitectDaughter  font-bold  text-xl text-white'
							>
								Username
							</label>

							<input
								type='text'
								id='email'
								placeholder='Username'
								className='bg-opacity-20 bg-yellow-200'
								onChange={(e) => {
									setUsername(e.target.value);
								}}
							></input>
						</div>
						<div className='flex flex-col'>
							<label
								for='email'
								className='font-ArchitectDaughter  font-bold  text-xl text-white'
							>
								Email
							</label>

							<input
								type='text'
								id='email'
								placeholder='Email'
								className='bg-opacity-20 bg-yellow-200'
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							></input>
						</div>
						<div className='flex flex-col'>
							<label
								for='password'
								className='font-ArchitectDaughter font-bold text-xl text-white'
							>
								Password
							</label>
							<input
								type='password'
								id='password'
								placeholder='password'
								className='bg-opacity-20 bg-yellow-200 text-gray-900'
								onChange={(e) => {
									setPassword(e.target.value);
								}}
							></input>
						</div>
						<div className='flex justify-center py-2'>
							<button
								type='submit'
								className='bg-black text-white px-6 py-1 rounded-xl'
							>
								Signup
							</button>
						</div>
						{error && (
							<div className='w-full text-center text-red-600'>
								something went wrong!
							</div>
						)}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;
