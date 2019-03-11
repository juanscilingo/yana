import axios from "axios";
import { store } from "../redux/store";
import { signoutSuccess } from "../redux/actions/auth";

const { REACT_APP_API_URL } = process.env;

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true
});

// Intercept 401 and log user out
axiosInstance.interceptors.response.use(null, error => {
  if (error.response.status === 401) store.dispatch(signoutSuccess());
  return Promise.reject(error);
});

export default axiosInstance;
