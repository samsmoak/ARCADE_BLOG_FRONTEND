import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import API from "../../API";
import parse from "html-react-parser";
import HomeFooter from "../../components/HomeFooter";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Single() {
	// let history = useHistory();
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const PF = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);
	const [deleter, setDeleter] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			const res = await API.get("/posts/" + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};

		getPost();
	}, [path]);

	const handleDelete = async () => {
		setDeleter(false);
		try {
			await axios.delete(`/posts/${post._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}
	};
	const navigate = useNavigate();
	const handleClick = () => {
		// 👇️ replace set to true
		navigate("/mainblog", { replace: true });
	};
	return (
		<div className=' '>
			<div className=' w-screen flex flex-col justify-center h-big bg-[url("/src/images/stacked-steps-haikei.svg")] pl-4 md:pl-48 space-y-8'>
				<div>
					<div
						onClick={handleClick}
						className='link   text-gray-300  flex cursor-pointer'
						style={{ textDecoration: "none" }}
					>
						<div className='h-full flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								stroke-width='2'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M7 16l-4-4m0 0l4-4m-4 4h18'
								/>
							</svg>
						</div>
						<div className='text-xs font-thin mt-1'>back to blogs </div>
					</div>
				</div>
				<div>
					<div className='w-full flex text-8xl font-extrabold  text-white'>
						<h2>{post.title}</h2>
					</div>
					<div>
						<div className='flex space-x-3 '>
							<div className='flex text-gray-400'>
								<div>
									<Link
										to={`/?user=${post.username}`}
										className='link  text-sm  text-gray-300 uppercase '
										style={{ textDecoration: "none" }}
									>
										<b> {post.username}</b>
									</Link>
								</div>
							</div>

							<div className='w-full flex  mt-1 text-sm text-gray-300 space-x-3 '>
								<div>{new Date(post.createdAt).toDateString()}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-[#ECEFF9]'>
				<div className='w-screen pl-4 sm:pl-48 flex '>
					<div className=' -translate-y-40 w-3/4 h-80 md:w-small1 md:h-small2 '>
						<div className='   bg-slate-600  overflow-hidden rounded-3xl   '>
							{post.photo && (
								<img src={PF + post.photo} alt='' className='w-full h-full' />
							)}
						</div>
					</div>
				</div>
				<div className='px-2 md:pl-48 w-screen '>
					<div className='   '>
						<div className='w-3/4 md:w-big   space-y-3'>
							<div
								className={`space-y-4 relative w-big ${deleter && " h-40"}  `}
							>
								<div className='w-full  flex justify-end '>
									{post.username === user?.username && (
										<div className='flex px-2 space-x-2'>
											<Link
												to={`/update/${post._id}`}
												className='bg-lime-500 px-3 py-1 rounded-sm text-black'
												style={{ textDecoration: "none" }}
											>
												update
											</Link>
											<button
												className='bg-rose-500 px-3 py-1 rounded-sm'
												onClick={() => {
													setDeleter(true);
												}}
											>
												delete
											</button>
										</div>
									)}
								</div>
								{deleter && (
									<div className='absolute z-20  -top-10 left-0 right-0 bottom-0 bg-slate-300 opacity-90   flex justify-center'>
										<div className=' h-40 w-96 flex flex-col justify-center bg-red-500 space-y-4'>
											<div className='w-full text-center capitalize'>
												are you sure you want to delete
											</div>
											<div className='w-full flex justify-center space-x-10'>
												<button
													className='py-1 px-2 border-2 flex'
													onClick={handleDelete}
												>
													<div>yes</div>
													<div>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															class='h-6 w-6'
															fill='none'
															viewBox='0 0 24 24'
															stroke='currentColor'
															stroke-width='2'
														>
															<path
																stroke-linecap='round'
																stroke-linejoin='round'
																d='M5 13l4 4L19 7'
															/>
														</svg>
													</div>
												</button>
												<button
													className='py-1 px-2 border-2 flex'
													onClick={() => {
														setDeleter(false);
													}}
												>
													<div>no</div>
													<div className='mt-1'>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															class='h-5 w-5'
															viewBox='0 0 20 20'
															fill='currentColor'
														>
															<path
																fill-rule='evenodd'
																d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
																clip-rule='evenodd'
															/>
														</svg>
													</div>
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className='text-zinc-800 font-body md:leading-relaxed w-full pl-5 lg:pl-20'>
								<p>{parse(desc)}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<HomeFooter />
		</div>
	);
}

export default Single;
