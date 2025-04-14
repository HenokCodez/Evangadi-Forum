import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://evangadi-forum-2-1zrc.onrender.com/api", // Use the deployed backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosConfig;
