import axios from "./axios";

const authApi = {
  login: credentials =>
    axios.post("/auth/signin", credentials).then(response => response.data),
  signout: () => axios.post("/auth/signout")
};

export default authApi;
