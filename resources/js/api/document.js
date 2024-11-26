import http from "@/api/http";

export const getDocuments = async (id) => {
    const response = await http.get(`/documents/${id}`);
    return response.data;
};

export const postDocuments = async (payload) => {
    const response = await http.post(`/documents`, payload, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};
