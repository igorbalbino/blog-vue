<template>
    <nav class="flex nav-bar">
        <ul class="flex nav-bar">
            <router-link class="nav-bar-item" to="/">Home</router-link>
            <router-link class="nav-bar-item" to="/artigo">Artigos</router-link>
            <router-link class="nav-bar-item" to="/sobre">Sobre</router-link>
        </ul>
        <ul class="flex nav-bar">
            <router-link class="nav-bar-item" to="/login">Login</router-link>
            <router-link class="nav-bar-item" to="/registrar">Registrar</router-link>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavBar'
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flex {
    display: flex;
}
.nav-bar {
    justify-content: space-between;
}

.nav-bar-item {
    margin: 15px;
}
</style>
  