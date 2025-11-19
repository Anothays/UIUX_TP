import App from "@/App";
import DiscoverPage from "@/components/pages/DiscoverPage/DiscoverPage";
import PaymentPage from "@/components/pages/PaymentPage";
import ProductPage from "@/components/pages/ProductPage";
import ProductsPage from "@/components/pages/ProductsPage";
import { createBrowserRouter } from "react-router";

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
    path: "/discover",
    element: <DiscoverPage />,
  },
  {
    path: "/ProductPage/:id",
    loader: async ({ params }) => {
      return params.id;
    },
    element: <ProductPage />,
  },
  {
    path: "/PaymentPage",
    element: <PaymentPage />,
  },
]);
