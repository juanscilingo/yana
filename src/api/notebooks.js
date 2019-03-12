import axios from "./axios";

const notebooksApi = {
  getNotebooks: () => axios.get("/notebooks").then(response => response.data),
  getNotebook: id =>
    axios.get(`/notebooks/${id}`).then(response => response.data),
  updateNotebook: (id, data) =>
    axios.put(`/notebooks/${id}`, data).then(response => response.data),
  createNotebook: notebook =>
    axios.post("/notebooks", notebook).then(response => response.data),
  deleteNotebook: id => axios.delete(`/notebooks/${id}`)
};

export default notebooksApi;
