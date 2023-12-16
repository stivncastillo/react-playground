import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ConcurrentComponent from "./concurrentMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/concurrent",
    element: <ConcurrentComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
