import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function RecentPost(props) {
	const PF = "http://localhost:5000/images/";
	return (
		<div className=' '>
			<div className='bg-white w-72   overflow-hidden shadow-md rounded-2xl   '>
				<div className='overflow-hidden h-48'>
					{props.recent.photo && (
						<img
							src={PF + props.recent.photo}
							alt=''
							className='h-full w-full object-cover '
						/>
					)}
				</div>
				<div className=' text-black  flex flex-col justify-end px-3 py-4 space-y-4'>
					<div>
						<Link
							to={`/post/${props.recent._id}`}
							style={{ textDecoration: "none" }}
						>
							<h1 className=' w-full font-extrabold text-sm text-black   bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
								{props.recent.title}
							</h1>
						</Link>
					</div>
					<div className='space-y-2'>
						<div>
							<div className='flex space-x-2'>
								<div className=''>
									{props.recent.profilePic !== "" ? (
										<div className='rounded-full h-6 w-6 bg-rose-400 text-sm font-bold capitalize flex justify-center items-center'>
											{props.recent.username.slice(0, 1)}
										</div>
									) : (
										<img
											src={PF + props.recent.profilePic}
											alt={""}
											className='object-cover h-full w-full'
										/>
									)}
								</div>
								<div className='w-full flex item-center mt-1'>
									<Link
										to={`/?user=${props.recent.username}`}
										className='link  text-xs font-thin text-gray-400'
										style={{ textDecoration: "none" }}
									>
										<b> {props.recent.username}</b>
									</Link>
								</div>
							</div>
						</div>
						<h4 className='w-full text-gray-500 text-xs'>
							{new Date(props.recent.createdAt).toDateString()}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RecentPost;
