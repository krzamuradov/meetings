<script setup>
    import Input from '@/components/Input.vue';
    import Loading from '@/components/Loading.vue';
    import SubmitBtn from '@/components/SubmitBtn.vue';
    import { useHelpers } from '@/services/useHelpers';
    import { useMeetings } from '@/services/useMeetings';
    import { onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    const router = useRoute();

    const id = router.params.id;

    const { meeting, payload, errors, loading, getAllMeetings, getMeetingById, newMeeting, editMeeting, redirectToMeetingUpdate } = useMeetings();

    onMounted(async () => {
        await getMeetingById(id);
    });
</script>

<template>
    <Loading v-if="loading" />
    <div class="col-4 mx-auto">
        <div class="card">
            <div class="card-body">
                <h4 class="text-center">Malumotlarni o'zgartirish</h4>
                <form action="" class="row g-3" @submit.prevent="editMeeting(id)">
                    <Input label="O`zbekcha nomi" v-model="payload.name_uz" :errors="errors.fields?.name_uz" />
                    <Input label="Inglizcha nomi" v-model="payload.name_en" :errors="errors.fields?.name_en" />
                    <Input label="Majlis sanasi" type="date" v-model="payload.meeting_date" :errors="errors.fields?.meeting_date" />
                    <SubmitBtn label="Saqlash" :success="true" />
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .link:hover {
        cursor: pointer;
        background: rgb(196, 196, 196);
    }
</style>
