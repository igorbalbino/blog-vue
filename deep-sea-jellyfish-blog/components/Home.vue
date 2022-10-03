<!-- Please remove this file from your project -->
<template>
    <div  class="">
        <Header />
        <main class="flex flex-col">
            <div class="flex justify-center">
                <p>Olá Mundo!</p>
                <p>Olá Mundo!</p>
                <p>Olá Mundo!</p>
            </div>
            <div class="flex justify-center">
                <p>Socorro jesus!</p>
                <p>Socorro jesus!</p>
                <p>Socorro jesus!</p>
            </div>
        </main>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import Header from './Header.vue';

    export default defineComponent({
        name: 'Home',
        components: { Header }
    })
</script>
  