import React from "react";

import { Link } from "react-router-dom";

import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
// import axios from "axios";
import { Context } from "../../context/Context";
import API from "../API";
import parse from "html-react-parser";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import parse from "html-react-parser";
function Singlepost() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	// const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);
	const [success, setSuccess] = useState(false);
	const PF = "http://localhost:5000/images/";
	const { user } = useContext(Context);

	useEffect(() => {
		const getPost = async () => {
			const res = await API.get("/posts/" + path);
			setPost(res.data);
			// console.log(res);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPost();
	}, [path]);

	const handleDelete = async () => {
		try {
			await API.delete(`/posts/${post._id}`, {
				data: { username: user.username },
			});
			window.location.replace("/");
		} catch (err) {}
	};
	const handleUpdate = async () => {
		try {
			await API.put(`/posts/${post._id}`, {
				username: user.username,
				title,
				desc,
			});
			// window.location.reload();
			setSuccess(true);
			setUpdateMode(false);
		} catch (err) {}
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			setSuccess(false);
		}, 4000);
		return () => {
			return () => clearTimeout(timer);
		};
	}, [success]);

	return (
		<div className='col-span-3 mt-16'>
			<div className=' flex justify-center'>
				<div className='   w-big  '>
					<div className='h-small2 w-big rounded-lg overflow-hidden'>
						{post.photo && (
							<img src={PF + post.photo} alt='' className='h-full w-full' />
						)}
					</div>
					<div className='py-4 space-y-4 px-3 flex flex-col justify-center'>
						<div className='space-y-4'>
							<h4 className='text-center w-full text-gray-600'>
								music life <i class='fab fa-facebook text-md'></i>
							</h4>
							{updateMode ? (
								<div className='w-full flex flex-col  items-center'>
									<h2>Title</h2>
									<input
										type='text'
										value={title}
										className='w-1/2'
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
							) : (
								<div>
									<Link
										style={{ textDecoration: "none" }}
										className='text-black'
									>
										<h1 className='text-center w-full font-extrabold text-2xl'>
											{post.title}
										</h1>
									</Link>
									{post.username === user?.username && (
										<div className='w-full flex justify-center space-x-6'>
											<div
												className='px-3 py-1  space-x-3 border-2 bg-orange-700 rounded-md cursor-pointer'
												onClick={handleDelete}
											>
												<span className='text-white'>delete</span>
												<i class='fas fa-trash-alt  text-white'></i>
											</div>
											<div
												className='px-3 py-1 bg-greener-600 space-x-3 border-2  rounded-md cursor-pointer'
												onClick={() => {
													setUpdateMode(true);
												}}
											>
												<span className='text-white'>edit</span>
												<i class='fas fa-edit text-white'></i>
											</div>
										</div>
									)}
								</div>
							)}
							<div className='w-full flex justify-around'>
								<div>
									Author:
									<Link
										to={`/?user=${post.username}`}
										style={{ textDecoration: "none" }}
										className='text-black'
									>
										{" "}
										<b>{post.username}</b>
									</Link>
								</div>
								<div className=''>
									{new Date(post.createdAt).toDateString()}
								</div>
							</div>
							{success && (
								<div className='text-green-600'>updated sucessfully!...</div>
							)}
						</div>
						{updateMode ? (
							<div className='w-full flex flex-col  items-center'>
								<h2>Description</h2>

								{/* <textarea
									value={desc}
									className='w-1/2'
									onChange={(e) => setDesc(e.target.value)}
								/> */}
								<CKEditor
									value={parse(desc)}
									editor={ClassicEditor}
									data={desc}
									onChange={(event, editor) => {
										let data = editor.getData();
										// const edt = parse(data);
										setDesc(data);
									}}
								/>
								<button
									className='self-end mt-4  bg-blue-600 px-6 py-2 text-white rounded-lg'
									onClick={handleUpdate}
								>
									Update
								</button>
							</div>
						) : (
							<p className='w-full text-gray-500'>{parse(desc)}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Singlepost;
