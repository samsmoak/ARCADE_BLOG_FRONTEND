import React, { useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import Homepage from "../Pages/HomePage/Homepage";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Mains/Main";
import Dashboard from "../Pages/Setting/Dashboard";
import Profile from "../Pages/Setting/profile";
import Setting from "../Pages/Setting/Setting";
import Signup from "../Pages/Signup/Signup";
import Recentsingle from "../Pages/Single/RecentSingle";
import Single from "../Pages/Single/Single";
import Team from "../Pages/Team/Team";
import Update from "../Pages/Update/Update";
import Write from "../Pages/Write/Write";
import { motion, AnimatePresence } from "framer-motion";

function Animatedroutes() {
	const { user } = useContext(Context);
	const location = useLocation();
	return <AnimatePresence className=''></AnimatePresence>;
}

export default Animatedroutes;
