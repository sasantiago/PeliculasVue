<template>
  <div class="container-movies d-middle p-100">

    <!-- <pre>
      {{ JSON.stringify(listMovies,null,2) }}
    </pre> -->
    <CardMovie
    v-for="movie in listMovies"
    :id="movie.ImdbId"
    :poster="movie.Poster"
    :title="movie.Title"
    :year="movie.Year"
    :type="movie.Type"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted,ref } from "vue";
import HTTP from "@/api/client-http";
import type{ ApiResponse,Movie } from "@/components/model/movie.model";
import CardMovie from "./CardMovie.vue";


const listMovies = ref<Movie[]>([])

onMounted(() => {
  fetchMovies();
});
const fetchMovies = async () => {
  const response: ApiResponse = await HTTP.get("", {
    params: {
      s: "movies",
    },
  })
  listMovies.value = response.data.Search;
  console.log(response.data.Search)

  
};
</script>

<style scoped lang="scss">
.container-movies{
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}</style>
