import React from "react";
// import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import API from "../../API";

function Login() {
	const userRef = useRef();
	const passwordRef = useRef();
	const { dispatch, isFetching } = useContext(Context);
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await API.post("/auth/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
			window.location.replace("/");
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE" });
			window.location.replace("/signup");
		}
	};
	return (
		<div className=' w-screen h-screen  bg-[url("https://cdn.pixabay.com/photo/2021/04/26/01/39/trees-6207925_1280.jpg")] bg-cover flex justify-center items-center '>
			<div className='h-small2 w-96 bg-white bg-opacity-50 rounded-xl py-10 px-4 border-t-2 border-r-4 border-b-2 border-opacity-30 border-gray-700'>
				<div className='font-Yanone_Kaffeesatz  text-4xl text-rose-500 uppercase text-center w-full'>
					Login into your account
				</div>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col'>
						<label
							for='email'
							className='font-ArchitectDaughter font-bold  text-xl'
						>
							Username
						</label>

						<input
							type='text'
							id='email'
							placeholder='Username'
							className='bg-opacity-20 bg-yellow-200'
							ref={userRef}
						></input>
					</div>
					<div className='flex flex-col'>
						<label
							for='password'
							className='font-ArchitectDaughter font-bold text-xl'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							placeholder='password'
							className='bg-opacity-20 bg-yellow-200 text-gray-900'
							ref={passwordRef}
						></input>
					</div>
					<div className='flex justify-center py-2'>
						<button
							type='submit'
							disabled={isFetching}
							className={`px-9 py-2 text-white rounded-lg ${
								isFetching ? "cursor-not-allowed bg-gray-500" : "bg-black"
							}`}
						>
							login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
