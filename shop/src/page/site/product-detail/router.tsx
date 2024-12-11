import { RouteObject } from "react-router-dom";
import ProductDetail from ".";

export const ProductDetailRouter: RouteObject =
{
    path: "detail/:id",
    element: <ProductDetail />
}