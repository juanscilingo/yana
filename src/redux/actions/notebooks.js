import { createAction } from "redux-starter-kit";
import notebooksApi from "../../api/notebooks";

export const getNotebooksSuccess = createAction("GET_NOTEBOOKS_SUCCESS");
export const getNotebooks = () => dispatch =>
  notebooksApi
    .getNotebooks()
    .then(notebooks => dispatch(getNotebooksSuccess(notebooks)));

export const getNotebookSuccess = createAction("GET_NOTEBOOK_SUCCESS");
export const getNotebook = id => dispatch =>
  notebooksApi
    .getNotebook(id)
    .then(notebook => dispatch(getNotebookSuccess(notebook)));

export const updateNotebookSuccess = createAction("UPDATE_NOTEBOOK_SUCCESS");
export const updateNotebook = (id, data) => dispatch =>
  notebooksApi
    .updateNotebook(id, data)
    .then(notebook => dispatch(updateNotebookSuccess(notebook)));

export const createNotebookSuccess = createAction("CREATE_NOTEBOOK_SUCCESS");
export const createNotebook = notebook => dispatch =>
  notebooksApi
    .createNotebook(notebook)
    .then(notebook => dispatch(createNotebookSuccess(notebook)));

export const deleteNotebookSuccess = createAction("DELETE_NOTEBOOK_SUCCESS");
export const deleteNotebook = id => dispatch =>
  notebooksApi
    .deleteNotebook(id)
    .then(notebook => dispatch(deleteNotebookSuccess(notebook)));
