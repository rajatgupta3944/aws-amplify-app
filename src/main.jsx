import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App"; // ✅ Import App

createRoot(document.getElementById("root")).render(<App />); // ✅ Render App directly
