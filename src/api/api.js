const BASE_URL = "http://localhost:3001/";

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
    // ?_start=${begin}&_end=${end}
    // http://localhost:3000/users?_limit=5&_page=2
    getProductPagination: async (uri, currentPage = 1, pageSize = 10) => {
        const response = await fetch(`${BASE_URL}${uri}?_limit=${pageSize}&_page=${currentPage}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        return response.json();
    },

    createProduct: async (uri, item) => {
        const response = await fetch(`${BASE_URL}${uri}`, {
            method: "POST",
            mode: "CORS",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        return response.json();
    },

    editProduct: async (uri, item) => {
        const response = await fetch(`${BASE_URL}${uri}/${item.id}`, {
            method: "PUT",
            mode: "CORS",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        return response.json();

        // return api.getProduct("products");
    },

    // getUsersFromServer: (currentPage = 1, pageSize = 10) => {
    //     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    //         .then(response => response.data);
    // },

    // getUsersFromServer: (currentPage = 1, pageSize = 8) => {
    //     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    //         .then(response => response.data);
    // },
};
