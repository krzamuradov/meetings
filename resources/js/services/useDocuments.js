import { getDocuments, postDocuments } from "@/api/document";
import { ref } from "vue";

export const useDocuments = () => {
    const documents = ref([]);
    const loading = ref(false);
    const errors = ref([]);
    const message = ref("");
    const payload = ref({
        name_uz: "",
        name_en: "",
        file: "",
        meeting_id: "",
    });

    const getDocumentsById = async () => {
        documents.value = await getDocuments();
    };

    const createDocument = async () => {
        console.log(payload.value);
        loading.value = true;
        errors.value = [];
        try {
            const response = await postDocuments(payload.value);
            payload.value = {
                name_uz: "",
                name_en: "",
                file: "",
                meeting_id: "",
            };
        } catch (e) {
            console.log(e);
            if (e.response.status === 422) {
                errors.value = { fields: e.response.data.errors, message: null };
            }

            setTimeout(() => {
                errors.value = [];
            }, 2000);
        } finally {
            loading.value = false;
        }
    };

    const changeFileHandler = (e) => {
        const files = event.target.files;
        if (files && files[0]) {
            payload.value.file = files[0];
        }
    };

    return { loading, errors, message, documents, payload, createDocument, changeFileHandler };
};
