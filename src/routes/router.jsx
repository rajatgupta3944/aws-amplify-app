import { createBrowserRouter } from "react-router-dom";
import Root from "../routes/Root";
import HomePage from "../components/home/HomePage"; // ✅ Import HomePage
import LoginPage from "../components/auth/LoginPage";
import RegisterPage from "../components/auth/RegisterPage";
import Contacts from "../components/contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // ✅ Root layout
    children: [
      { path: "/", element: <HomePage /> }, // ✅ Default route
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "contacts", element: <Contacts /> },
    ],
  },
]);

export default router;
