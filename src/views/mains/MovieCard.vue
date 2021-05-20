<template>
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">{{ movie.title }}</h3>
        <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
        <!-- <p class="card-text">{{ movie.overview }}</p> -->
      </div>   
</div>
</template>

<script>

export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  methods: {
   
}}
</script>

<style>

</style>