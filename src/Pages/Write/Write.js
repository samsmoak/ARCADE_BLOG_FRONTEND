import React from "react";
import API from "../../API";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import HomeFooter from "../../components/HomeFooter";
import { motion, AnimatePresence } from "framer-motion";

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
		<div>
			<div className='pt-40 w-screen h-screen flex justify-center items-center bg-[url("/src/images/writer.svg")]'>
				<div className='w-11/12 lg:w-small1 bg-mamba-100 px-2  lg:px-6 py-4'>
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
						<div className='flex flex-col  '>
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
							<div className='overflow-scroll h-40 sm:h-96'>
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
			<div className='w-full flex justify-center items-center py-24'>
				<div className='w-4/5 md:w-small2 h-96 '>
					<div className='h-full w-full md:w-small1 md:h-small2 overflow-hidden relative '>
						<img
							src='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
							alt=''
							className=' w-full h-full object-cover'
						/>
						<div className='absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center px-2 '>
							<div className='md:w-96  bg-mamba-100 py-8 rounded-lg'>
								<div className='w-full flex justify-center  text-white font-bold text-xs sm:text-2xl'>
									<p>career opportunity</p>
								</div>
								<div className='w-full flex justify-center text-xs sm:text-sm text-gray-100'>
									<p>
										visual form of a document or a typeface without relying on
										meaningful content. Lorem ipsum may be
									</p>
								</div>
								<div className='w-full flex justify-center'>
									<button className='py-1 px-2 rounded-lg bg-blue-600 text-white'>
										open roles
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<HomeFooter />
		</div>
	);
}

export default Write;
