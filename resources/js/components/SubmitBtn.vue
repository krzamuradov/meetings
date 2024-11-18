<script setup>
    const props = defineProps({
        label: { type: String },
        success: { Boolean },
        danger: { Boolean },
        primary: { Boolean },
    });
</script>

<template>
    <div class="col-12">
        <button class="btn form-control" v-bind="$attrs" :class="{ 'btn-success': success, 'btn-danger': danger, 'btn-primary': primary }">{{ label }}</button>
    </div>
</template>

<style scoped></style>
