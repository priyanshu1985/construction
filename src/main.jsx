import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css"; // Styles moved to App.css to prevent conflicts
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
