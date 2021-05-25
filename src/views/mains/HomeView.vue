<template>
  <div>
    <h1> Movies </h1>
    <!-- <button @click="ddd"></button> -->
    <div class= "row g-1 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        <MovieCard v-for="(movie,idx) in movies" :key="idx" :movie="movie" />
    </div>
    
    <!-- <ModalView v-if="isModalViewed" @openmodal="modalTrue" @close-modal="isModalViewed = false">
      <Content msg="안녕안녕"/>
    </ModalView> -->
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'
import axios from 'axios'
// import Content from "./Content"; 
// import ModalView from "./ModalView";

export default {
  name: 'Home',
  components: { 
    MovieCard,
    // Content,
    // ModalView, 
    },
  data: function(){
    return { 
      movies: [],
      // saveMoviesCheck: false,
      // isModalViewed:false,
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
      .then((res) => {this.movies = res.data.results, console.log(this.movies)})
    },
    saveMovies() {
      axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/movies/save/',
          headers: this.setToken()
        })
        .then((res) => {
          console.log(res)
          // this.saveMoviesCheck = true
          localStorage.setItem('saveMoviesCheck', true)
        })
        .catch((err) => {
            console.log(err)
          })

    } 
    // modalTrue(){
    //   this.isModalViewed=true
    //   console.log(2)
    // },
    // ddd(){
    //   console.log(this.isModalViewed)
  //   },
  },
  mounted: function() {
    this.getMovies()
    if (localStorage.saveMoviesCheck){
      console.log(1)
    } else {
      this.saveMovies()
    }
  }
  
  }
</script>

<style>

</style>