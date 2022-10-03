<template>
    <div>
        <Header />
        <main class="flex justify-between">
            <ListaArtigos />
            <Sidebar />
        </main>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue';
import ListaArtigos from '~/components/ListaArtigos.vue';
import Sidebar from '~/components/Sidebar.vue';

export default Vue.extend({ components: { Header, ListaArtigos, Sidebar } })
</script>