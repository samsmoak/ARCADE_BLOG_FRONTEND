import React from "react";
import { useEffect, useState } from "react";
import Posts from "./Posts";
import Footer from "../../components/Footer";
import API from "../../API";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HomeFooter from "../../components/HomeFooter";
import { motion, AnimatePresence } from "framer-motion";

function Main() {
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const { search } = useLocation();
	const [data, setData] = useState("");
	const [recent, setRecent] = useState([]);
	// const [last, setLast] = useState([]);

	const pages = new Array(totalPages).fill(null).map((v, i) => i);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				console.log("Good");
				const res = await API.get(`/posts?page=${pageNumber}&limit=6`);
				console.log(res);
				setData(res.data.total);

				setPosts(res.data.resultmodel);
				setTotalPages(res.data.total);
			} catch (err) {
				console.log(err);
			}
			try {
				const recent = await API.get(`/posts/recent/bat`);
				setRecent(recent.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchPosts();
	}, [pageNumber]);

	const prev = () => {
		setPageNumber(Math.max(1, pageNumber - 1));
	};
	const next = () => {
		setPageNumber(Math.min(totalPages, pageNumber + 1));
	};

	return (
		<div className='py-10'>
			<div className='h-small1 w-screen bg-gradient-to-br from-pink-500 via-fuchsia-800 to-pink-500  bg-cover'>
				<div className='w-full space-y-16 '>
					<div className='flex justify-center py-5 '>
						<p className='text-7xl font-Yanone_Kaffeesatz text-black capitalize'>
							Thoughts, stories and
							<br />
							ideas by the Arcadei team
						</p>
					</div>
					<div className='w-full px-20 py-8 space-y-4 flex justify-center flex-col'>
						<div className=' flex  '>
							<h3 className='text-xl font-bold  text-black font-ArchitectDaughter capitalize  '>
								Arcadei is a mininal theme for ghost.
								<br /> a beautiful way to share your stories with your glowing
								audience
							</h3>
						</div>
						<div className='  flex justify-start'>
							<button className='text-sm font-bold rounded-lg bg-black text-white px-3 py-2 '>
								Become a subscriber {totalPages}
							</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className='flex justify-center w-screen '>
					<div className='grid  grid-flow-col  space-x-8 '>
						<Posts posts={posts} recent={recent} />
					</div>
				</div>

				<div className='w-full flex justify-center space-x-2 my-5 '>
					<button onClick={prev} className='rounded-full p-2 bg-blue-200'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
								clip-rule='evenodd'
							/>
						</svg>
					</button>
					<div className='pt-1'>
						{pageNumber}/{totalPages}
					</div>

					<button onClick={next} className='rounded-full p-2 bg-blue-200'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fill-rule='evenodd'
								d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
								clip-rule='evenodd'
							/>
						</svg>
					</button>
				</div>
			</div>

			<div>
				<HomeFooter />
			</div>
		</div>
	);
}

export default Main;
