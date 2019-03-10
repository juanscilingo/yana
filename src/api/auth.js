import axios from "axios";

axios.defaults.withCredentials = true;

const { REACT_APP_API_URL } = process.env;

const authApi = {
  login: credentials =>
    axios
      .post(`${REACT_APP_API_URL}/auth/signin`, credentials)
      .then(response => response.data),
  signout: () => axios.post(`${REACT_APP_API_URL}/auth/signout`)
};

export default authApi;
