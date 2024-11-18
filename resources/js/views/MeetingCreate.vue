<script setup>
    import Input from '@/components/Input.vue';
    import Loading from '@/components/Loading.vue';
    import SubmitBtn from '@/components/SubmitBtn.vue';
    import { useMeetings } from '@/services/useMeetings';
    import { onMounted } from 'vue';

    const { meetings, payload, errors, loading, getAllMeetings, newMeeting } = useMeetings();

    onMounted(async () => {
        await getAllMeetings();
    });
</script>

<template>
    <Loading v-if="loading" />
    <div class="col-4 mx-auto">
        <div class="card">
            <div class="card-body">
                <h4 class="text-center">Yangi majlis</h4>
                <form action="" class="row g-3" @submit.prevent="newMeeting">
                    <Input label="O`zbekcha nomi" v-model="payload.name_uz" />
                    <Input label="Inglizcha nomi" v-model="payload.name_en" />
                    <Input label="Majlis sanasi" type="date" v-model="payload.meeting_date" />
                    <SubmitBtn label="Saqlash" :success="true" />
                </form>
            </div>
        </div>
    </div>

    <ul class="list-group mt-3">
        <li class="list-group-item d-flex justify-content-between link" v-for="meeting in meetings" :key="meeting.id" @click="redirectToDocuments(meeting.id)">
            <span>{{ meeting.name_uz }}</span>
            <span>{{ meeting.meeting_date }}</span>
        </li>
    </ul>
</template>

<style scoped>
    .link:hover {
        cursor: pointer;
        background: rgb(196, 196, 196);
    }
</style>
