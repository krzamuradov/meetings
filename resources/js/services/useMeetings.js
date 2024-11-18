import { createMeeting, getMeetings } from '@/api/meetings';
import { ref } from 'vue';

export const useMeetings = () => {
    const meetings = ref([]);
    const errors = ref([]);
    const loading = ref(false);
    const payload = ref({
        name_uz: '',
        name_en: '',
        meeting_date: '',
    });

    const getAllMeetings = async () => {
        loading.value = true;
        errors.value = [];

        try {
            meetings.value = await getMeetings();
        } catch (e) {
            console.log(e);
        } finally {
            loading.value = false;
        }
    };

    const newMeeting = async () => {
        loading.value = true;
        errors.value = [];

        try {
            meetings.value = await createMeeting(payload.value);
            await getAllMeetings();
        } catch (e) {
            console.log(e);
        } finally {
            loading.value = false;
        }
    };

    return { meetings, payload, errors, loading, getAllMeetings, newMeeting };
};
