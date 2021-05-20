<template>
  <div class="row">
    <h1> Movies </h1>
    <MovieCard v-for="(movie,idx) in movies" :key="idx" :movie="movie" />
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: { MovieCard },
  data: function(){
    return { movies: [] }
  },
  methods: {
    getMovies() {
      axios.get('https://api.themoviedb.org/3/movie?api_key=6b1e9899f17fa92429f5a793999dcb8f') 
      .then((res) => {this.movies = res.data})
    }
  },
  mounted: function() {
    this.getMovies()
  }
}
</script>

<style>

</style>