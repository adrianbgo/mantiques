import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createHashRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import AboutUs from "./pages/AboutUs";
import Root from "./HOCs/Root";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import Blog from "./pages/Blog";

const apiurl = process.env.API_URL!;
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "blog",
        element: <Blog apiUrl={apiurl} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
