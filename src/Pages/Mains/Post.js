import React, { useContext } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { Context } from "../../context/Context";

function Post({ post }) {
	// const { user } = useContext(Context);
	const { user } = useContext(Context);
	const PF = "http://localhost:5000/images/";
	return (
		<div className=' '>
			<div className='bg-white w-72   overflow-hidden shadow-md rounded-2xl'>
				<div className='overflow-hidden h-48'>
					{post.photo && (
						<img
							src={PF + post.photo}
							alt=''
							className='h-full w-full object-cover '
						/>
					)}
				</div>
				<div className=' text-black  flex flex-col justify-end px-3 py-4 space-y-4'>
					<div>
						<Link to={`/post/${post._id}`} style={{ textDecoration: "none" }}>
							<h1 className=' w-full font-extrabold text-sm text-black   bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
								{post.title}
							</h1>
						</Link>
					</div>
					<div className='space-y-2'>
						<div>
							<div className='flex space-x-2'>
								<div className=''>
									{post.profilePic == "" ? (
										<img
											src={PF + post.profilePic}
											alt=''
											className='object-cover h-full w-full'
										/>
									) : (
										<div className='rounded-full h-6 w-6 bg-rose-400 text-sm font-bold capitalize flex justify-center items-center'>
											{post.username.slice(0, 1)}
										</div>
									)}
								</div>
								<div className='w-full flex item-center mt-1'>
									<Link
										to={`/?user=${post.username}`}
										className='link  text-xs font-thin text-gray-400'
										style={{ textDecoration: "none" }}
									>
										<b> {post.username}</b>
									</Link>
								</div>
							</div>
						</div>
						<h4 className='w-full text-gray-500 text-xs'>
							{new Date(post.createdAt).toDateString()}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
