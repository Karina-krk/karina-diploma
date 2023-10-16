<template>
    <div class="side">
        <p-button v-if="!user" type="button" @click="googleRegister" label="Войти" icon="pi pi-user"></p-button>
        <p-button v-else type="button" @click="googleLogout" label="Войти" icon="pi pi-sign-out"></p-button>
    </div>
</template>

<script setup>
    import PButton from 'primevue/button';
    import { useUser } from '@/composables/useUser'

    const { user, googleRegister, googleLogout } = useUser();
</script>

<style scoped>
</style>