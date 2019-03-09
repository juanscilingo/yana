import axios from "./axios";

const usersApi = {
  me: async () => await axios.get("/users/me")
};

export default usersApi;
