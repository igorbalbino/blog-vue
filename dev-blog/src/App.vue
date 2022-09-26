<template>
  <div class="app-wrapper">
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods:{},
  watch: {}
}
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

  * {
    margin: 0px;
    padding: 0px;
    font-family: Quicksand, Helvetica, Arial, sans-serif;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
