import { createReducer } from "redux-starter-kit";

const initialState = [];

const notebooksReducer = createReducer(initialState, {
  GET_NOTEBOOKS_SUCCESS: (state, action) => action.payload,
  GET_NOTEBOOK_SUCCESS: (state, action) => [
    ...state.filter(n => n.id === action.payload.id),
    action.payload
  ],
  UPDATE_NOTEBOOK_SUCCESS: (state, action) => [
    ...state.filter(n => n.id === action.payload.id),
    action.payload
  ],
  CREATE_NOTEBOOK_SUCCESS: (state, action) => [...state, action.payload],
  DELETE_NOTEBOOK_SUCCESS: (state, action) => [
    ...state.filter(n => n.id === action.payload.id)
  ]
});

export default notebooksReducer;
