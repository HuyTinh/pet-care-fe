import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../../types/product.modal";
import { APIReponse } from "../../types/api-response.type";
import { PageableResponse } from "../../types/pageable.response";

export const productApi = createApi({
    reducerPath: "productApi",
    tagTypes: ["Products", "ProductDetails"],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL as string,
    }),
    endpoints: (build) => ({
        // Updated endpoint with filtering, sorting, and pagination
        filterProducts: build.query<
            APIReponse<PageableResponse<IProducts>>,
            {
                pageNumber?: number;
                pageSize?: number;
                searchTerm?: string;
                category?: string;
                status?: string;
                minPrice?: number;
                maxPrice?: number;
                minQuantity?: number;
                maxQuantity?: number;
                sortBy?: string;
                sortOrder?: "asc" | "desc";
            }
        >({
            query: ({
                pageNumber = 0,
                pageSize = 10,
                searchTerm,
                category,
                status,
                minPrice,
                maxPrice,
                minQuantity,
                maxQuantity,
                sortBy = "id",
                sortOrder = "asc",
            }) => {
                const params: Record<string, string> = {
                    pageNumber: pageNumber.toString(),
                    pageSize: pageSize.toString(),
                    sortBy,
                    sortOrder,
                };

                if (searchTerm) params.searchTerm = searchTerm;
                if (category) params.category = category;
                if (status) params.status = status;
                if (minPrice) params.minPrice = minPrice.toString();
                if (maxPrice) params.maxPrice = maxPrice.toString();
                if (minQuantity) params.minQuantity = minQuantity.toString();
                if (maxQuantity) params.maxQuantity = maxQuantity.toString();

                return {
                    url: `${import.meta.env.VITE_PRODUCT_PATH}/product/filter`, // Updated endpoint path
                    params,
                };
            },
            providesTags: (result) => {
                if (result) {
                    const final = [
                        ...((result.data as any)?.content as IProducts[]).map(({ id }) => ({
                            type: "Products" as const,
                            id,
                        })),
                        { type: "Products" as const, id: "LIST" },
                    ];
                    return final;
                }
                return [{ type: "Products" as const, id: "LIST" }];
            },
        }),

        getProductById: build.query<
            APIReponse<IProducts>,
            { productId: number }
        >({
            query: ({ productId }) =>
                `${import.meta.env.VITE_PRODUCT_PATH}/product/${productId}`,
        }),
    }),
});

export const {
    useFilterProductsQuery,
    useGetProductByIdQuery
} = productApi