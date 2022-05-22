import React, { Suspense, useContext } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
// import Main from "./Pages/Mains/Main";
// import Login from "./Pages/Login/Login";
// import Write from "./Pages/Write/Write";
// import Signup from "./Pages/Signup/Signup";
// import Setting from "./Pages/Setting/Setting";
// import Single from "./Pages/Single/Single";
// import Update from "./Pages/Update/Update";
import routes from "../routes";
import { Context } from "../context/Context";

function Layout() {
	const { user } = useContext(Context);
	let element = useRoutes(routes);
	return (
		<div>
			{/* <Suspense fallback={"loading"}>
				<Routes>
					{routes.map((route, i) => {
						return (
							route.element && (
								<Route
									key={i}
									path={route.path}
									exact={route.exact}
									name={route.name}
									element={route.element}
								>
									render=
									{(props) => (
										<div>
											<route.element {...props} />
										</div>
									)}
								</Route>
							)
						);
					})}
				</Routes>
			</Suspense> */}
			{/* <Routes>{element}</Routes> */}
		</div>
	);
}

export default Layout;
