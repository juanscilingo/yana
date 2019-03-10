import axios from "./axios";

const authApi = {
  signin: credentials =>
    axios.post("/auth/signin", credentials).then(response => response.data),
  signup: data =>
    axios.post("/auth/signup", data).then(response => response.data),
  signout: () => axios.post("/auth/signout")
};

export default authApi;
