import http from '@/api/http';

export const getMeetings = async () => {
    const response = await http.get('/meetings');
    return response.data;
};

export const getMeeting = async (id) => {
    const response = await http.get(`/meetings/${id}`);
    return response.data;
};

export const createMeeting = async (payload) => {
    const response = await http.post('/meetings', payload);
    return response.data;
};

export const updateMeeting = async (payload, id) => {
    const response = await http.put(`/meetings/${id}`, payload);
    return response.data;
};
