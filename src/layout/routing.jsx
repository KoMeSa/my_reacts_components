import Layout from "./layout"
import Index from "../pages/index"
import ErrorPage from "../layout/error-page"
import Main from "../pages/main"

import {
  createBrowserRouter,
} from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "main",
        element: <Main />,
      },
    ],
  }
]);