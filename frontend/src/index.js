import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "../src/components/auth"; // Adjust the path based on your structure
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
