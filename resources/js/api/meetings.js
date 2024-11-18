import http from '@/api/http';

export const getMeetings = async () => {
    const response = await http.get('/meetings');
    return response.data;
};

export const createMeeting = async (payload) => {
    const response = await http.post('/meetings', payload);
    return response.data;
};

export const updateMeeting = async (payload) => {
    const response = await http.put('/meetings', payload);
    return response.data;
};
