<script setup>
    const props = defineProps({
        type: { type: String, default: 'text' },
        id: { type: String },
        label: { type: String },
    });

    const model = defineModel();
</script>

<template>
    <div class="col-12">
        <div class="form-floating">
            <input :type="type" :id="id" v-model="model" class="form-control" />
            <label :for="id">{{ label }}</label>
            <div class="invalid-feedback"></div>
        </div>
    </div>
</template>

<style scoped></style>
