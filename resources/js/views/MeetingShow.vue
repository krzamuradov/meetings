<script setup>
    import Input from "@/components/Input.vue";
    import SubmitBtn from "@/components/SubmitBtn.vue";
    import { useMeetings } from "@/services/useMeetings";
    import { useRoute } from "vue-router";
    import { onMounted } from "vue";
    import { useDocuments } from "@/services/useDocuments";
    import Loading from "@/components/Loading.vue";
    const { loading: meetingLoader, getMeetingById, meeting } = useMeetings();
    const { loading, errors, message, documents, payload, createDocument, changeFileHandler } = useDocuments();
    const route = useRoute();
    const id = route.params.id;

    onMounted(() => {
        getMeetingById(id);
        payload.value.meeting_id = id;
    });
</script>

<template>
    <Loading v-if="loading || meetingLoader" />
    <div class="new_document col-4 mx-auto">
        <h4 class="text-center">Yangi hujjat</h4>
        <form action="" class="row g-3" @submit.prevent="createDocument">
            <Input label="O`zbekcha nomi" v-model="payload.name_uz" :errors="errors?.fields?.name_uz" />
            <Input label="Inglizcha nomi" v-model="payload.name_en" :errors="errors?.fields?.name_en" />
            <Input label="Hujjat" type="file" @change="changeFileHandler" :errors="errors?.fields?.file" />
            <SubmitBtn :success="true" type="submit" label="Saqlash" class="mb-3" />
        </form>
    </div>
    <h2 class="text-center">
        {{ meeting.name_uz }}
    </h2>
    <div class="table-responsive">
        <table class="table table-bordered table-hover text-center align-middle">
            <thead>
                <tr>
                    <th class="col-1">#</th>
                    <th class="col-9">Hujjat nomi</th>
                    <th class="col-2">Yuklash</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(document, index) in meeting.documents" :key="document.id">
                    <td class="col-1">{{ index + 1 }}</td>
                    <td class="col-9">{{ document.name_uz }}</td>
                    <td class="col-2">
                        <a href="#" class="btn">
                            <i class="fa fa-download text-success"></i>
                        </a>
                        <a href="#" class="btn">
                            <i class="fa fa-edit text-primary"></i>
                        </a>
                        <a href="#" class="btn">
                            <i class="fa fa-trash text-danger"></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped></style>
