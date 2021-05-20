<template>
  <div>
    <h1> Movies </h1>
    <div class= "row g-1 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <MovieCard v-for="(movie,idx) in movies" :key="idx" :movie="movie" />
    </div>
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
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6b1e9899f17fa92429f5a793999dcb8f') 
      .then((res) => {this.movies = res.data.results, console.log(this.movies)})
    }
  },
  mounted: function() {
    this.getMovies()
  }
}
</script>

<style>

</style>