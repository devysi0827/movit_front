<template>
  <div style="background-color: #F3EFE4">
    
    <h1> Movies </h1>
    <div class= "row g-1 row-cols-1 row-cols-sm-2 row-cols-lg-3" style=" margin:0px; padding:0px;">
        <MovieCard v-for="(movie,idx) in movies" :key="idx" :movie="movie" />
    </div>

  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: { 
    MovieCard,
    },
  data: function(){
    return { 
      movies: [],
      } 
  },

  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },

    getMovies() {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6b1e9899f17fa92429f5a793999dcb8f') 
      .then((res) => {this.movies = res.data.results})
    },

    saveMovies() {
      axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/movies/save/',
          headers: this.setToken()
        })
        .then((res) => {
          console.log(res)
          localStorage.setItem('saveMoviesCheck', true)
        })
        .catch((err) => {console.log(err)})
      } 
    },
  
  mounted: function() {
    this.getMovies()
    if (localStorage.saveMoviesCheck){
      console.log('movie already is saved')
    } else {
      this.saveMovies()
    }
  }
}
</script>

<style>

</style>