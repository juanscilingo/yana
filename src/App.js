import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Router from "./router";
import { store, persistor } from "./redux/store";
import "antd/dist/antd.css";

export default function() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router />
        </div>
      </PersistGate>
    </Provider>
  );
}
