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
import Layout from "./components/TheContent";
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
// const Main = React.lazy(() => {
// 	import("./Pages/Mains/Main");
// });
// const Login = React.lazy(() => {
// 	import("./Pages/Login/Login");
// });
// const Signup = React.lazy(() => {
// 	import("./Pages/Signup/Signup");
// });
// const Setting = React.lazy(() => {
// 	import("./Pages/Setting/Setting");
// });
// const Write = React.lazy(() => {
// 	import("./Pages/Write/Write");
// });
// const Single = React.lazy(() => {
// 	import("./Pages/Single/Single");
// });
// const Update = React.lazy(() => {
// 	import("./Pages/Update/Update");
// });

// const Layout = React.lazy(() => import("./components/Layout"));
// const Main = React.lazy(() => {
// 	import("./Pages/Mains/Main");
// });
// const Login = React.lazy(() => {
// 	import("./Pages/Login/Login");
// });
// const Signup = React.lazy(() => {
// 	import("./Pages/Signup/Signup");
// });
// const Setting = React.lazy(() => {
// 	import("./Pages/Setting/Setting");
// });
// const Write = React.lazy(() => {
// 	import("./Pages/Write/Write");
// });
// const Single = React.lazy(() => {
// 	import("./Pages/Single/Single");
// });
// const Update = React.lazy(() => {
// 	import("./Pages/Update/Update");
// });
const routes = [
	{ path: "/", element: <Main /> },
	{ path: "login", element: <Login /> },
	{ path: "write", element: <Write /> },
	{ path: "signup", element: <Signup /> },
	{ path: "setting", element: <Setting /> },
	{ path: "single", element: <Single /> },
	{ path: "update", element: <Update /> },
];
function App() {
	const { user } = useContext(Context);
	// let element = useRoutes(routes);
	return (
		<div>
			{/* <BrowserRouter>
				<Router>{element}</Router>
			</BrowserRouter> */}

			<BrowserRouter>
				<React.Suspense fallback={"loading"}>
					<Navbar />
					<Routes>
						<Route path='/' element={<Main />} />
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
				</React.Suspense>
			</BrowserRouter>
			{/* <Layout /> */}
		</div>
	);
}

export default App;
