import App from "@/App";
import ProductPage from "@/components/pages/ProductPage";
import PaymentPage from "@/components/pages/PaymentPage";	
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
