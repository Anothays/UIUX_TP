import { createBrowserRouter } from "react-router";
import App from "@/App";
import ProductPage from "@/components/pages/ProductPage";
import PaymentPage from "@/components/pages/PaymentPage";

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
		path: "/PaymentPage",
		element: <PaymentPage />,
	},
]);
