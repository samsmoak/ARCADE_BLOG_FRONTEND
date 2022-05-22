import React from "react";

{
	/* <Routes>
	<Route path='/' element={<Main />} />
	<Route path='login' element={<Login />} />
	<Route path='write' element={user ? <Write /> : <Signup />} />
	<Route path='signup' element={<Signup />} />
	<Route path='setting' element={user ? <Setting /> : <Signup />} />
	<Route path='/post/:postId' element={<Single />} />
	<Route path='/update/:postId' element={<Update />} />
</Routes>; */
}

const Main = React.lazy(() => {
	import("./Pages/Mains/Main");
});
const Login = React.lazy(() => {
	import("./Pages/Login/Login");
});
const Signup = React.lazy(() => {
	import("./Pages/Signup/Signup");
});
const Setting = React.lazy(() => {
	import("./Pages/Setting/Setting");
});
const Write = React.lazy(() => {
	import("./Pages/Write/Write");
});
const Single = React.lazy(() => {
	import("./Pages/Single/Single");
});
const Update = React.lazy(() => {
	import("./Pages/Update/Update");
});
const routes = [
	{ path: "/", name: "Main", exact: true, element: <Main /> },
	{ path: "login", name: "Login", exact: true, element: <Login /> },
	{ path: "write", name: "Write", exact: true, element: <Write /> },
	{ path: "signup", name: "Signup", exact: true, element: <Signup /> },
	{ path: "setting", name: "Setting", exact: true, element: <Setting /> },
	{ path: "single", name: "Single", exact: true, element: <Single /> },
	{ path: "update", name: "Update", exact: true, element: <Update /> },
];

export default routes;
