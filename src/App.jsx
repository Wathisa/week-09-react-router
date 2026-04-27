import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
