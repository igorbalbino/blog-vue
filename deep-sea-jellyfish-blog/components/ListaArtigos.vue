<!-- Please remove this file from your project -->
<template>
    <div>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <NuxtLink :to="`/posts/${post.name}`">
                    <p>{{ post.title }}</p>
                    <p>{{ post.description }}</p>
                    <br />
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ListaArtigos',
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
                        description: "descricao do post",
                        conteudo: "conteudo do post"
                    },
                    {
                        id: 1,
                        name: "post2",
                        title: "titulo postagem 2",
                        description: "descricao do post",
                        conteudo: "conteudo do post"
                    },
                    {
                        id: 2,
                        name: "post3",
                        title: "titulo postagem 3",
                        description: "descricao do post",
                        conteudo: "conteudo do post"
                    },
                ]
            }
        }
    }
</script>
  