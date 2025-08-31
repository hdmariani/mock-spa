import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter, HashRouter } from "react-router";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> d9d748e (initial layout)
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  <HashRouter>
    <App />
  </HashRouter>
=======
  <BrowserRouter>
    <App />
  </BrowserRouter>
>>>>>>> d9d748e (initial layout)
);
