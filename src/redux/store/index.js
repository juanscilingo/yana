import { configureStore } from "redux-starter-kit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export const persistor = persistStore(store);
