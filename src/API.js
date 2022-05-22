import axios from "axios";

export default axios.create({
	baseURL: "http://localhost:5000/api/",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});
// .then((response) => {
// 	console.log(response);
// })
// .catch((error) => {
// 	console.log(error.response);
// });
