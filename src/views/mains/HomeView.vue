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
      // isModalViewed:false,
      } 
  },
  methods: {
    getMovies() {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6b1e9899f17fa92429f5a793999dcb8f') 
      .then((res) => {this.movies = res.data.results, console.log(this.movies)})
    }, 
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
  }
  
  }
</script>

<style>

</style>