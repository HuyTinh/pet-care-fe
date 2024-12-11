import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../../types/product.modal";
import { APIReponse } from "../../types/api-response.type";

export const productApi = createApi({
    reducerPath: "productApi", // Name of the slice in the Redux store
    tagTypes: ["product"], // Tags used for caching and invalidation
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }), // Base query for API requests with dynamic environment URL
    endpoints: (build) => ({
        getProduct: build.query<APIReponse<IProducts>, void>({
            query: () => `${import.meta.env.VITE_PRODUCT_PATH}`,
            providesTags: (result) => {
                if (result) {
                    return [
                        ...((result as APIReponse<IProducts>)?.data as IProducts[]).map(({ id }) => ({
                            type: 'product' as const, // Use lowercase "product" to match the cache key
                            id,
                        })),
                        { type: 'product' as const, id: 'LIST' }, // Cache tag for the entire list
                    ];
                }
                return [{ type: 'product' as const, id: 'LIST' }]; // Default cache tag
            },
        }),
        getProductById: build.query<APIReponse<IProducts>, number>({
            query: (id) => `${import.meta.env.VITE_PRODUCT_PATH}/${id}`, // Fetch prescription by ID
        }),
    })
})

export const {
    useGetProductQuery, 
    useGetProductByIdQuery
} = productApi