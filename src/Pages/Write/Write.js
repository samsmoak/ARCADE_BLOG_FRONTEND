import React from "react";
import API from "../../API";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Write() {
	const [title, setTitle] = useState("");
	const [file, setFile] = useState(null);
	const [desc, setDesc] = useState("");
	const { user } = useContext(Context);
	const PF = "http://localhost:5000/images/";

	const handleSubmit = async (e) => {
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
			const res = await API.post("/posts", newPost);
			window.location.replace("/post/" + res.data._id);
		} catch (err) {}
		API.post("/posts");
	};

	return (
		<div className='w-screen h-screen flex justify-center items-center bg-[url("https://cdn.pixabay.com/photo/2020/03/25/13/03/house-4967221_1280.jpg")]'>
			<div className='w-small1 bg-zinc-700  px-6 py-4'>
				<form className=' space-y-6' onSubmit={handleSubmit}>
					<div className='flex flex-col'>
						<label
							for='title'
							className='font-ArchitectDaughter  font-bold  text-xl text-lime-500'
						>
							Title:
						</label>

						<input
							type='text'
							id='title'
							placeholder='TITLE'
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
							file
						</label>

						<input
							type='file'
							id='file'
							className=''
							onChange={(e) => {
								setFile(e.target.files[0]);
							}}
						/>
					</div>
					<div className=' '>
						<div className='font-ArchitectDaughter  font-bold  text-xl text-rose-300'>
							description
						</div>
						<div className='overflow-scroll h-96'>
							<CKEditor
								editor={ClassicEditor}
								data={desc}
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
							publish
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Write;
