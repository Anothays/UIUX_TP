import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProductPage from "@/components/pages/ProductPage";
import Store from "@/components/pages/Store";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
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
    }
]);
