import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes.tsx";
import { Provider } from "react-redux";
import { parsistor, store } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={parsistor}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
      <Toaster></Toaster>
    </Provider>
  </React.StrictMode>
);
