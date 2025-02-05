import { RouterProvider } from "react-router-dom";
import AppRouter from "./router";

// This file provides the wrapper for RouterProvider which has Router coming from router.tsx
const AppRouterProvider = () => <RouterProvider router={AppRouter} />;

export default AppRouterProvider;
