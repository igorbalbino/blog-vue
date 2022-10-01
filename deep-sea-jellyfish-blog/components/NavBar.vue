<template>
    <div class="flex justify-center space-x-80 max-w-sm mx-auto text-2xl">
        <ul class="flex space-x-20">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/artigos">Artigos</NuxtLink>
            <NuxtLink to="/sobre">Sobre</NuxtLink>
        </ul>
        <ul class="flex space-x-20 font-medium">
            <NuxtLink to="/login" target="_blank">Login</NuxtLink>
            <NuxtLink to="/registrar" target="_blank">Registrar</NuxtLink>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar'
});
</script>
  