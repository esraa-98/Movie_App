import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params : {
        api_key: "40af04a0c973d98a06c3542708a64c0f"
    }
}
);

export default axiosInstance;