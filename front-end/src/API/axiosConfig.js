import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://evangadi-forum-3-secf.onrender.com/api", // Updated backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
