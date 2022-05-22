import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function post({ post }) {
	const PF = "http://localhost:5000/images/";
	return (
		<div>
			<div className='w-72 h-96 bg-slate-600 rounded-6xl overflow-hidden relative '>
				{console.log(post.photo)}
				{post.photo && (
					<img
						src={PF + post.photo}
						alt=''
						className='h-full w-full object-cover '
					/>
				)}
				<div className='z-10 text-white absolute left-0 right-0 bottom-0 top-0 flex flex-col ml-5 justify-end py-5'>
					<Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
						<h1 className='text-center w-full font-extrabold text-2xl text-white p-3  bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
							{post.title}
						</h1>
					</Link>
					<h4 className='text-center w-full text-gray-400'>
						{new Date(post.createdAt).toDateString()}
					</h4>
					<p className='w-full text-gray-500 h-36 overflow-hidden '>
						{post.desc}
					</p>
				</div>
			</div>
		</div>
	);
}

export default post;
