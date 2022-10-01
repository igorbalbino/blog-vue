<template>
    <div>
        <Header />
        <ListaArtigos />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue';
import ListaArtigos from '~/components/ListaArtigos.vue';

export default Vue.extend({ components: { Header, ListaArtigos } })
</script>