<template>
    <nav class="flex justify-center border-t-2 border-b-2 border-black space-x-96 max-w-sm mx-auto text-2xl">
        <ul class="flex space-x-20 my-5">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/artigos">Artigos</NuxtLink>
            <NuxtLink to="/sobre">Sobre</NuxtLink>
        </ul>
        <ul class="flex space-x-20 font-medium my-5">
            <NuxtLink to="/login" target="_blank">Login</NuxtLink>
            <NuxtLink to="/registrar" target="_blank">Registrar</NuxtLink>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar'
});
</script>
  