import "./App.css";
import {
	BrowserRouter,
	Route,
	Routes,
	Router,
	useRoutes,
} from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./context/Context";
// import Layout from "./components/TheContent";
import Main from "./Pages/Mains/Main";
import Login from "./Pages/Login/Login";
import Write from "./Pages/Write/Write";
import Signup from "./Pages/Signup/Signup";
import Setting from "./Pages/Setting/Setting";
import Single from "./Pages/Single/Single";
import Update from "./Pages/Update/Update";
import Navbar from "./components/Navbar";
import Profile from "./Pages/Setting/profile";
import Dashboard from "./Pages/Setting/Dashboard";
import RecentPost from "./Pages/Mains/RecentPost";
import Homepage from "./Pages/HomePage/Homepage";

function App() {
	const { user } = useContext(Context);
	// let element = useRoutes(routes);
	return (
		<div>
			{/* <BrowserRouter>
				<Router>{element}</Router>
			</BrowserRouter> */}

			<BrowserRouter>
				{/* <React.Suspense fallback={"loading"}> */}
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/main' element={<Main />} />
					<Route path='login' element={<Login />} />
					<Route path='write' element={user ? <Write /> : <Signup />} />
					<Route path='signup' element={<Signup />} />
					<Route path='setting' element={user ? <Setting /> : <Signup />}>
						<Route path='profile' element={<Profile />} />
						<Route path='dashboard' element={<Dashboard />} />
					</Route>
					<Route path='/post/:postId' element={<Single />} />
					<Route path='/recent/:recentId' element={<RecentPost />} />

					<Route path='/update/:postId' element={<Update />} />
				</Routes>
				{/* </React.Suspense> */}
			</BrowserRouter>
			{/* <Layout /> */}
		</div>
	);
}

export default App;
