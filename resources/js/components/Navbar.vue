<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-white border-bottom">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="@/assets/logo.png" alt="Logo" width="100px" />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'home' }" exact-active-class="active">Bosh sahifa</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'meetingCreate' }" exact-active-class="active">Meeting create</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" :to="{ name: 'documentsList', params: { id: 1 } }" exact-active-class="active">Documents List</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <select name="" id="" class="nav-link">
                            <option value="uz">UZ</option>
                            <option value="en">EN</option>
                        </select>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Kamalbek Rzamuradov</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="btn btn-danger">Chiqish</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    nav {
        min-height: 100px;
        font-weight: bold;
    }

    .active {
        border-bottom: 2px solid red;
    }

    .links:hover {
        border-bottom: 2px solid red;
    }
</style>
