import React from "react";
import { useEffect, useState } from "react";
import Posts from "./Posts";
import Footer from "../../components/Footer";
import API from "../../API";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Main() {
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const { search } = useLocation();
	const [data, setData] = useState("");
	const [recent, setRecent] = useState([]);

	const pages = new Array(totalPages).fill(null).map((v, i) => i);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				console.log("Good");
				const res = await API.get(`/posts?page=${pageNumber}&limit=3`);
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
		<div>
			<div className="h-small1 w-screen bg-[url('https://images.unsplash.com/photo-1529998274859-64a3872a3706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')] bg-cover">
				<div className='w-full flex flex-col justify-center items-center h-[calc(100%-10rem)] space-y-16 '>
					<p className='text-7xl font-display text-rose-500'>
						Thoughts, stories and
						<br />
						ideas by the arcade team
					</p>
					<div className='w-3/4  relative z-10'>
						<h3 className='text-4xl font-bold bg-opacity-10 text-purple-600 backdrop-blur-sm font-redressed  '>
							Arcade is a mininal theme for ghost. a beautiful way to share your
							stories with your glowing audience
						</h3>
					</div>
					<div className='w-2/4   flex justify-start'>
						<button className='font-bold rounded-lg bg-rose-400 text-white px-3 py-3 '>
							Become a subscriber {totalPages}
						</button>
					</div>
				</div>
			</div>
			<div>
				<div className='flex justify-center w-screen py-10'>
					<div className='grid  grid-flow-col  space-x-8 '>
						<Posts posts={posts} recent={recent} />
					</div>
				</div>
				<div className='w-full flex justify-center space-x-1'>
					<button onClick={prev}>previous</button>
					{pages.map((p) => (
						<button
							className='p-3 border-2'
							onClick={() => {
								setPageNumber(p + 1);
							}}
						>
							{p + 1}
							{console.log(pageNumber)}
						</button>
					))}
					<button onClick={next}>next</button>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Main;
