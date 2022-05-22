import React from "react";
import axios from "axios";
import API from "../../API";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useLocation } from "react-router";

function Update() {
	const [post, setPost] = useState({});
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const { user } = useContext(Context);

	const [file, setFile] = useState(null);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	// const [updateMode, setUpdateMode] = useState(false);
	const PF = "http://localhost:5000/images/";
	useEffect(() => {
		const getPoster = async () => {
			const res = await API.get("/posts/" + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		};
		getPoster();
	}, [path]);
	const handleUpdate = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + File.name + ".jpeg";
			data.append("name", filename);
			data.append("file", file);
			newPost.photo = filename;
			try {
				await API.post("/upload", data);
			} catch (err) {}
		}

		try {
			await API.put(`/posts/${post._id}`, newPost);
			// setUpdateMode(false);
		} catch (err) {}
		window.location.replace("/");
	};
	return (
		<div>
			<div className='w-screen h-screen flex justify-center items-center bg-[url("https://cdn.pixabay.com/photo/2020/03/25/13/03/house-4967221_1280.jpg")]'>
				<div className='w-small1 bg-zinc-700  px-6 py-4'>
					<form className=' space-y-6' onSubmit={handleUpdate}>
						<div className='w-full flex justify-center text-lime-500 '>
							Update
						</div>
						<div className='flex flex-col'>
							<label
								for='title'
								className='font-ArchitectDaughter  font-bold  text-xl text-lime-500'
							>
								update_Title:
							</label>

							<input
								type='text'
								id='title'
								placeholder='TITLE'
								value={title}
								className='bg-opacity-20 bg-yellow-200'
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							></input>
						</div>
						<div className='flex flex-col w-40 '>
							<label
								for='title'
								className='font-ArchitectDaughter  font-bold  text-xl text-amber-500'
							>
								update_File
							</label>

							<input
								type='file'
								id='file'
								className=''
								// value={post.photo}
								onChange={(e) => {
									setFile(e.target.files[0]);
								}}
							/>
						</div>
						<div className=' '>
							<div className='font-ArchitectDaughter  font-bold  text-xl text-rose-300'>
								update_Description
							</div>
							<div className='overflow-scroll h-96'>
								<CKEditor
									editor={ClassicEditor}
									data={desc}
									value={desc}
									onChange={(event, editor) => {
										let data = editor.getData();
										// const edt = parse(data);
										setDesc(data);
									}}
								/>
							</div>
						</div>
						<div>
							<button className='bg-green-800 text-white rounded-lg px-3 font-ArchitectDaughter py-2 font-extrabold '>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Update;
