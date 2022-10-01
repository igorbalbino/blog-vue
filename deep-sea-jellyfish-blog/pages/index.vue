<template>
  <Home />
</template>

<script lang="ts">
import Vue from 'vue'
import Home from '~/components/Home.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { Home }
})
</script>
