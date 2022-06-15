import "./App.css";
import {
	BrowserRouter,
	Route,
	Routes,
	Router,
	useRoutes,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Animatedroutes from "./components/Animatedroutes";

import { useContext } from "react";
import Homepage from "./Pages/HomePage/Homepage";
import Main from "./Pages/Mains/Main";
import Team from "./Pages/Team/Team";
import Login from "./Pages/Login/Login";
import Write from "./Pages/Write/Write";
import Signup from "./Pages/Signup/Signup";
import Setting from "./Pages/Setting/Setting";
import Profile from "./Pages/Setting/profile";
import Dashboard from "./Pages/Setting/Dashboard";
import Single from "./Pages/Single/Single";
import Recentsingle from "./Pages/Single/RecentSingle";
import Update from "./Pages/Update/Update";
import { Context } from "./context/Context";

function App() {
	// let element = useRoutes(routes);
	const { user } = useContext(Context);
	return (
		<div className='w-screen relative  '>
			{/* <BrowserRouter>
				<Router>{element}</Router>
			</BrowserRouter> */}

			<BrowserRouter>
				<div className='w-full static'>
					<Navbar />
				</div>
				<Routes className=''>
					<Route path='/' element={<Homepage />} />
					<Route path='mainblog' element={<Main />} />
					<Route path='team' element={<Team />} />
					<Route path='login' element={<Login />} />
					<Route path='write' element={user ? <Write /> : <Signup />} />
					<Route path='signup' element={<Signup />} />
					<Route path='setting' element={user ? <Setting /> : <Signup />}>
						<Route path='profile' element={<Profile />} />
						<Route path='dashboard' element={<Dashboard />} />
					</Route>
					<Route path='/post/:postId' element={<Single />} />
					<Route path='/recent/bat/:recentId' element={<Recentsingle />} />

					<Route path='/update/:postId' element={<Update />} />
				</Routes>
			</BrowserRouter>
			{/* <Layout /> */}
		</div>
	);
}

export default App;
