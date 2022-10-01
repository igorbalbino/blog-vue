<template>
    <div>
        <DeepSeaLogo />
        <NavBar />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
import DeepSeaLogo from './DeepSeaLogo.vue';

export default defineComponent({
    name: "Header",
    components: { DeepSeaLogo, NavBar }
});
</script>
  