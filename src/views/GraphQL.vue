<template>
    <div class="movie_container">{{ movies }}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@vue/runtime-core';
import {
    getMovieById,
    getMovies,
    addMovie,
    subscribeMovie
} from '@/assets/graphQL/movies';
import { Movie } from '@/types/graphql/types';

export default defineComponent({
    setup() {
        const movies = ref();
        const movie = ref();

        onMounted(async () => {
            const { data } = await getMovies();
            // const { data } = await getMovieById(2);

            movies.value = data.movies.map((movie: Movie) => {
                return {
                    id: movie.id,
                    name: movie.name,
                    url: movie.url
                };
            });
            // movie.value = data;
        });

        subscribeMovie();

        setTimeout(() => {
            addMovie();
        }, 3000);

        return { movies, movie };
    }
});
</script>

<style scoped lang="scss">
.movie_container {
    position: relative;
    top: 80px;
}
</style>
