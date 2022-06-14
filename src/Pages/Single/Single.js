import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import API from "../../API";
import parse from "html-react-parser";
import HomeFooter from "../../components/HomeFooter";

function Single() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const PF = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

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
		try {
			await axios.delete(`/posts/${post._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}
	};

	return (
		<div className=' '>
			<div className='relative w-screen h-big bg-orange-400'>
				<div class='absolute top-0 left-0 w-full overflow-hidden leading-none '>
					<svg
						data-name='Layer 1'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1200 120'
						preserveAspectRatio='none'
						// className='relative block w-[131%-1.3px] h-[380px]'
					>
						<path
							d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
							// class='shape-fill bg-red-300'
						></path>
					</svg>
				</div>
			</div>
			<div className='pl-32 w-screen '>
				{console.log(path)}
				<div className='  py-10 '>
					<div className='w-big  bg-slate-100 px-8 space-y-3'>
						<div className='w-full flex justify-center text-6xl font-redressed'>
							<h2>{post.title}</h2>
						</div>
						<div className='w-full'>
							<div className='w-full h-small2 bg-slate-600  overflow-hidden   '>
								{post.photo && (
									<img src={PF + post.photo} alt='' className='w-full h-full' />
								)}
							</div>
						</div>
						<div className='space-y-4'>
							<div className='flex'>
								<div>Author</div>
								<Link to={`/?user=${post.username}`} className='link'>
									<b> {post.username}</b>
								</Link>
							</div>

							<div className='w-full flex justify-end '>
								{post.username === user?.username && (
									<div className='flex px-2 space-x-2'>
										<Link
											to={`/update/${post._id}`}
											className='bg-lime-700 px-3 py-1 rounded-md'
										>
											update
										</Link>
										<button
											className='bg-red-700 px-3 py-1 rounded-md'
											onClick={handleDelete}
										>
											delete
										</button>
									</div>
								)}
							</div>
						</div>
						<div className='text-gray-600 font-body'>
							<p>{parse(desc)}</p>
						</div>
					</div>
				</div>
			</div>
			<HomeFooter />
		</div>
	);
}

export default Single;
