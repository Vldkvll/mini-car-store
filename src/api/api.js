const BASE_URL = "http://localhost:8000/";

export const api = {
    getProduct: async (uri) => {
        const response = await fetch(`${BASE_URL}${uri}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        return response.json();
    },

    getProductPagination: async (uri, currentPage = 1, pageSize = 10) => {
        const response = await fetch(
            `${BASE_URL}${uri}?_limit=${pageSize}&_page=${currentPage}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
        );
        return response.json();
    },

    createProduct: async (uri, item, page = 1) => {
        await fetch(`${BASE_URL}${uri}`, {
            method: "POST",
            // mode: "CORS",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        return api.getProductPagination(uri, page);
    },

    editProduct: async (uri, item, page = 1) => {
        await fetch(`${BASE_URL}${uri}/${item.id}`, {
            method: "PATCH",
            // mode: "CORS",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        return api.getProductPagination(uri, page);
    },
    deleteProduct: async (uri, id, page) => {
        await fetch(`${BASE_URL}${uri}/${id}`, {
            method: "DELETE",
            // mode: "CORS",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        return api.getProductPagination(uri, page);
    },
};
