import React from "react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import API from "../../API";

function Single() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const PF = "http://localhost:5000/images/";
	const { user } = useContext(Context);

	useEffect(() => {
		const getPost = async () => {
			const res = await API.get("/posts/recent/bat/${}" + path);
			setPost(res.data);
		};

		getPost();
	}, [path]);

	// const handleDelete = async () => {
	// 	try {
	// 		await axios.delete(`/posts/${post._id}`, {
	// 			data: { username: user.username },
	// 		});
	// 		window.location.replace("/");
	// 	} catch (err) {}
	// };

	return (
		<div className='flex justify-center items-center w-screen mt-16'>
			{console.log(path)}
			<div>
				<div className='w-big h-bigxx bg-slate-100 px-8 space-y-3'>
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

						{/* <div className='w-full flex justify-end '>
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
						</div> */}
					</div>
					<div>
						<p>{post.desc}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Single;
