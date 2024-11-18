<script setup>
    import Card from '@/components/Card.vue';
    import { onMounted } from 'vue';
    import Loading from '@/components/Loading.vue';
    import { useMeetings } from '@/services/useMeetings';
    const { meetings, errors, loading, getAllMeetings } = useMeetings();

    onMounted(async () => {
        await getAllMeetings();
    });
</script>

<template>
    <Loading v-if="loading" />
    <div class="row g-3">
        <div class="col-12 col-md-4" v-for="meeting in meetings" :key="meeting.id">
            <Card>
                <h3 class="text-center border-bottom">{{ meeting.name_uz }}</h3>
                <h6 class="text-center text-muted">{{ meeting.meeting_date }}</h6>
            </Card>
        </div>
    </div>
</template>

<style scoped></style>
