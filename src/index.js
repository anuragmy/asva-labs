/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGateway } from "redux-persist/lib/integration/react";
import { store } from "./store";
import App from "./App";

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // </PersistGateway>,,
  document.getElementById("root")
);
