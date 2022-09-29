<template>
  <NavBar />
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from './components/NavBar.vue';
  
  export default defineComponent({
    name: 'App',
    components: {
      NavBar
    },
    metaInfo: {
      title: 'Deep Sea Technologies',
      titleTemplate: '%s | Deep Sea Blog',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', 
        content: 'O blog criado pelo profissional de TI, para o profissional de TI. ' + 
        'Programação, análise de rede, configuração de rede, ' + 
        'instalação e configuração de softwares, segurança de software, ' + 
        'dicas de desenvolvimento e muito mais. ' + 
        'Tudo isso na palma da sua mão ou na tela do seu computador.'}
      ]
    }
  });
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
