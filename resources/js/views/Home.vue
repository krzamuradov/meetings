<script setup>
    import Card from '@/components/Card.vue';
    import { onMounted, ref } from 'vue';
    import Loading from '@/components/Loading.vue';
    import { useMeetings } from '@/services/useMeetings';
    import { useHelpers } from '@/services/useHelpers';
    const { meetings, errors, loading, getAllMeetings, redirectToMeetingShow, redirectToMeetingUpdate } = useMeetings();
    const { formatDate } = useHelpers();
    onMounted(async () => {
        await getAllMeetings();
    });

    const role = ref(true);
</script>

<template>
    <Loading v-if="loading" />
    <RouterLink v-if="role" class="btn btn-success mb-3" :to="{ name: 'meetingCreate' }"> <i class="fa fa-plus"></i> Yangi majlis </RouterLink>

    <table class="table table-hover text-center table-bordered align-middle">
        <thead>
            <tr>
                <th>#</th>
                <th>Majlis nomi</th>
                <th>Sanasi</th>
                <th v-if="role">Amal</th>
            </tr>
        </thead>
        <tbody>
            <tr class="link" v-for="meeting in meetings" :key="meeting.id" @click="redirectToMeetingShow(meeting.id)">
                <td class="col-1">{{ meeting.id }}</td>
                <td class="col-6">{{ meeting.name_uz }}</td>
                <td class="col-4">{{ formatDate(meeting.meeting_date) }}</td>
                <td class="col-2" v-if="role">
                    <div class="text-center">
                        <button class="btn" @click.stop="redirectToMeetingUpdate(meeting.id)">
                            <span class="fa fa-edit text-primary"></span>
                        </button>
                        <button class="btn" @click.stop=""><span class="fa fa-trash text-danger"></span></button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
    .link:hover {
        cursor: pointer;
        background: rgb(221, 221, 221);
    }
</style>
