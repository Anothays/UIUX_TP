import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProductPage from "@/components/pages/ProductPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/ProductPage/:id",
        loader: async ({params}) => {
            return params.id;
        },
        element: <ProductPage />
    }
]);
