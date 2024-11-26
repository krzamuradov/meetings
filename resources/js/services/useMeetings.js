import { createMeeting, getMeeting, getMeetings, updateMeeting } from "@/api/meetings";
import { useHelpers } from "@/services/useHelpers";
import { ref } from "vue";
import router from "@/router";
import { useDocuments } from "@/services/useDocuments";

export const useMeetings = () => {
    const meetings = ref([]);
    const meeting = ref("");
    const errors = ref([]);
    const loading = ref(false);
    const { loading: documentLoader } = useDocuments();
    const payload = ref({
        name_uz: "",
        name_en: "",
        meeting_date: "",
    });

    const getAllMeetings = async () => {
        loading.value = true;

        errors.value = [];

        try {
            meetings.value = await getMeetings();
        } catch (e) {
            console.log(e);
            if (e.response.status === 422) {
                errors.value = { message: null, fields: e.response.data.errors };
                console.log(errors.value);
            }
        } finally {
            loading.value = false;
        }
    };

    const getMeetingById = async (id) => {
        loading.value = true;
        documentLoader.value = true;
        errors.value = [];

        try {
            meeting.value = await getMeeting(id);
            console.log(meeting.value);
            payload.value = {
                name_uz: meeting.value.name_uz,
                name_en: meeting.value.name_en,
                meeting_date: meeting.value.meeting_date,
            };
        } catch (e) {
            console.log(e);
            if (e.response.status === 422) {
                errors.value = { message: null, fields: e.response.data.errors };
                console.log(errors.value);
            }
        } finally {
            loading.value = false;
            documentLoader.value = false;
        }
    };

    const newMeeting = async () => {
        loading.value = true;
        errors.value = [];

        try {
            meetings.value = await createMeeting(payload.value);
            router.push({ name: "home" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = { message: null, fields: e.response.data.errors };
            }
            if (e.response.status === 401) {
                errors.value = { message: e.response.data.message, fields: null };
            }

            setTimeout(() => {
                errors.value = [];
            }, 2000);
        } finally {
            loading.value = false;
        }
    };

    const editMeeting = async (id) => {
        loading.value = true;
        errors.value = [];

        try {
            meetings.value = await updateMeeting(payload.value, id);
            router.push({ name: "home" });
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = { message: null, fields: e.response.data.errors };
            }
            if (e.response.status === 401) {
                errors.value = { message: e.response.data.message, fields: null };
            }

            setTimeout(() => {
                errors.value = [];
            }, 2000);
        } finally {
            loading.value = false;
        }
    };

    const redirectToMeetingShow = (id) => {
        router.push({ name: "meetingShow", params: { id: id } });
    };

    const redirectToMeetingUpdate = (id) => {
        router.push({ name: "meetingUpdate", params: { id: id } });
    };

    return { meetings, meeting, payload, errors, loading, getAllMeetings, getMeetingById, newMeeting, editMeeting, redirectToMeetingShow, redirectToMeetingUpdate };
};
