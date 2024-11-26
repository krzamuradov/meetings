<script setup>
    const props = defineProps({
        type: { type: String, default: 'text' },
        id: { type: String },
        label: { type: String },
        errors: { type: Object, Array },
    });

    const model = defineModel();
</script>

<template>
    <div class="col-12">
        <div class="form-floating">
            <input :type="type" :id="id" v-model="model" class="form-control" :class="{ 'is-invalid': errors }" />
            <label :for="id">{{ label }}</label>
            <div class="invalid-feedback" v-if="errors">{{ errors?.[0] }}</div>
        </div>
    </div>
</template>

<style scoped></style>
