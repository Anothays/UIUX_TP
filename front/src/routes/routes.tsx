import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProductPage from "@/components/pages/ProductPage";
import Store from "@/components/pages/Store";
import ProductsPage from "@/components/pages/ProductsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ProductsPage",
    element: <ProductsPage />,
  },
  {
    path: "/ProductPage/:id",
    loader: async ({ params }) => {
      return params.id;
    },
    element: <ProductPage />,
  },
  {
    path: "/Store",
    element: <Store />,
  },
]);
