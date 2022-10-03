<!-- Please remove this file from your project -->
<template>
    <div class="flex w-9/12 justify-center content-center">
        <ul>
            <li class="h-auto mx-7" v-for="post in posts" :key="post.id">
                <NuxtLink to="{name: '/post', params: {postData: post}}">
                    <h2>{{post.title}}</h2>
                    <h4 class=" text-justify">{{post.description}}</h4>
                    <br />
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
    name: "ListaArtigos",
    // async asyncData({ $axios }) {
    //     const posts = await $axios.$get('/posts')
    //     return { posts }
    // },
    data() {
        return {
            posts: [
                {
                    id: 0,
                    name: "post1",
                    title: "titulo postagem 1",
                    description: "Maecenas sed luctus augue, et tempus dui. Mauris ut metus egestas, dignissim turpis eget, consequat arcu. Sed venenatis, turpis non eleifend viverra, sapien magna tempor eros, sit amet placerat ligula nisi ac lorem. Fusce dictum vestibulum nibh ut dictum. Aliquam scelerisque augue id dui scelerisque facilisis. Aliquam volutpat, metus nec consequat rhoncus, nibh lacus molestie quam, nec tempor arcu magna in est. Cras euismod luctus diam, sit amet lacinia massa malesuada sit amet. Quisque erat risus, pretium sed pulvinar et, blandit sit amet mi.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ex sem. Aenean ut efficitur metus. Sed in bibendum magna. Nullam bibendum ullamcorper dolor, vel vestibulum nibh lobortis at. Nulla nisi metus, vulputate non finibus sed, venenatis nec magna. Praesent vehicula convallis odio, at venenatis turpis pulvinar vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse quis felis elit. Sed convallis diam nec dui varius commodo. Sed laoreet fringilla feugiat." +
                            "Maecenas sed luctus augue, et tempus dui. Mauris ut metus egestas, dignissim turpis eget, consequat arcu. Sed venenatis, turpis non eleifend viverra, sapien magna tempor eros, sit amet placerat ligula nisi ac lorem. Fusce dictum vestibulum nibh ut dictum. Aliquam scelerisque augue id dui scelerisque facilisis. Aliquam volutpat, metus nec consequat rhoncus, nibh lacus molestie quam, nec tempor arcu magna in est. Cras euismod luctus diam, sit amet lacinia massa malesuada sit amet. Quisque erat risus, pretium sed pulvinar et, blandit sit amet mi." +
                            "Aenean tellus quam, molestie ut purus vitae, vehicula volutpat leo. Vivamus in ex sit amet augue luctus auctor. Etiam quis nulla tellus. Quisque vel diam quam. Curabitur id porttitor elit, pharetra pretium eros. Fusce porta eros vel consectetur elementum. Praesent vulputate lectus quam. Suspendisse finibus sem ac tellus varius, at laoreet arcu euismod." +
                            "Morbi malesuada vulputate ante, et dapibus arcu ultrices non. Quisque quis vestibulum lorem, non dignissim elit. Nullam sagittis rutrum nulla sit amet consectetur. Aliquam rutrum pharetra ex, eleifend convallis ligula luctus id. Aliquam cursus at magna non consequat. Nulla facilisi. Quisque tempus eu dui sed viverra."
                },
                {
                    id: 1,
                    name: "post2",
                    title: "titulo postagem 2",
                    description: "Maecenas sed luctus augue, et tempus dui. Mauris ut metus egestas, dignissim turpis eget, consequat arcu. Sed venenatis, turpis non eleifend viverra, sapien magna tempor eros, sit amet placerat ligula nisi ac lorem. Fusce dictum vestibulum nibh ut dictum. Aliquam scelerisque augue id dui scelerisque facilisis. Aliquam volutpat, metus nec consequat rhoncus, nibh lacus molestie quam, nec tempor arcu magna in est. Cras euismod luctus diam, sit amet lacinia massa malesuada sit amet. Quisque erat risus, pretium sed pulvinar et, blandit sit amet mi.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ex sem. Aenean ut efficitur metus. Sed in bibendum magna. Nullam bibendum ullamcorper dolor, vel vestibulum nibh lobortis at. Nulla nisi metus, vulputate non finibus sed, venenatis nec magna. Praesent vehicula convallis odio, at venenatis turpis pulvinar vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse quis felis elit. Sed convallis diam nec dui varius commodo. Sed laoreet fringilla feugiat." +
                            "Maecenas sed luctus augue, et tempus dui. Mauris ut metus egestas, dignissim turpis eget, consequat arcu. Sed venenatis, turpis non eleifend viverra, sapien magna tempor eros, sit amet placerat ligula nisi ac lorem. Fusce dictum vestibulum nibh ut dictum. Aliquam scelerisque augue id dui scelerisque facilisis. Aliquam volutpat, metus nec consequat rhoncus, nibh lacus molestie quam, nec tempor arcu magna in est. Cras euismod luctus diam, sit amet lacinia massa malesuada sit amet. Quisque erat risus, pretium sed pulvinar et, blandit sit amet mi." +
                            "Aenean tellus quam, molestie ut purus vitae, vehicula volutpat leo. Vivamus in ex sit amet augue luctus auctor. Etiam quis nulla tellus. Quisque vel diam quam. Curabitur id porttitor elit, pharetra pretium eros. Fusce porta eros vel consectetur elementum. Praesent vulputate lectus quam. Suspendisse finibus sem ac tellus varius, at laoreet arcu euismod." +
                            "Morbi malesuada vulputate ante, et dapibus arcu ultrices non. Quisque quis vestibulum lorem, non dignissim elit. Nullam sagittis rutrum nulla sit amet consectetur. Aliquam rutrum pharetra ex, eleifend convallis ligula luctus id. Aliquam cursus at magna non consequat. Nulla facilisi. Quisque tempus eu dui sed viverra."
                },
                {
                    id: 2,
                    name: "post3",
                    title: "titulo postagem 3",
                    description: "Maecenas sed luctus augue, et tempus dui. Mauris ut metus egestas, dignissim turpis eget, consequat arcu. Sed venenatis, turpis non eleifend viverra, sapien magna tempor eros, sit amet placerat ligula nisi ac lorem. Fusce dictum vestibulum nibh ut dictum. Aliquam scelerisque augue id dui scelerisque facilisis. Aliquam volutpat, metus nec consequat rhoncus, nibh lacus molestie quam, nec tempor arcu magna in est. Cras euismod luctus diam, sit amet lacinia massa malesuada sit amet. Quisque erat risus, pretium sed pulvinar et, blandit sit amet mi.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac ex sem. Aenean ut efficitur metus. Sed in bibendum magna. Nullam bibendum ullamcorper dolor, vel vestibulum nibh lobortis at. Nulla nisi metus, vulputate non finibus sed, venenatis nec magna. Praesent vehicula convallis odio, at venenatis turpis pulvinar vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse quis felis elit. Sed convallis diam nec dui varius commodo. Sed laoreet fringilla feugiat." +
                            "Maecenas sed luctus augue, et tempus dui. Mauris ut metus egestas, dignissim turpis eget, consequat arcu. Sed venenatis, turpis non eleifend viverra, sapien magna tempor eros, sit amet placerat ligula nisi ac lorem. Fusce dictum vestibulum nibh ut dictum. Aliquam scelerisque augue id dui scelerisque facilisis. Aliquam volutpat, metus nec consequat rhoncus, nibh lacus molestie quam, nec tempor arcu magna in est. Cras euismod luctus diam, sit amet lacinia massa malesuada sit amet. Quisque erat risus, pretium sed pulvinar et, blandit sit amet mi." +
                            "Aenean tellus quam, molestie ut purus vitae, vehicula volutpat leo. Vivamus in ex sit amet augue luctus auctor. Etiam quis nulla tellus. Quisque vel diam quam. Curabitur id porttitor elit, pharetra pretium eros. Fusce porta eros vel consectetur elementum. Praesent vulputate lectus quam. Suspendisse finibus sem ac tellus varius, at laoreet arcu euismod." +
                            "Morbi malesuada vulputate ante, et dapibus arcu ultrices non. Quisque quis vestibulum lorem, non dignissim elit. Nullam sagittis rutrum nulla sit amet consectetur. Aliquam rutrum pharetra ex, eleifend convallis ligula luctus id. Aliquam cursus at magna non consequat. Nulla facilisi. Quisque tempus eu dui sed viverra."
                },
            ]
        };
    },
})
</script>
  