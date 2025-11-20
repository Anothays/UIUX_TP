import App from "@/App";
import ContactPage from "@/components/pages/ContactPage";
import DiscoverPage from "@/components/pages/DiscoverPage/DiscoverPage";
import PaymentPage from "@/components/pages/PaymentPage";
import ProductPage from "@/components/pages/ProductPage";
import ProductsPage from "@/components/pages/ProductsPage";
import ProfilPage from "@/components/pages/ProfilPage";
import SellPage from "@/components/pages/SellPage";
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
    path: "/cars",
    element: <DiscoverPage />,
  },
  {
    path: "/sell",
    element: <SellPage />,
  },
  {
    path: "/profil",
    element: <ProfilPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
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
