import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import AppHeader from "./components/AppHeader";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <AppHeader />
  </React.StrictMode>
);
