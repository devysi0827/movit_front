<template>
<div class="card col-md-3">
  <div class="card-body">
    <h3 class="card-title">{{ movie.title }}</h3>
    <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
    <!-- <p class="card-text">{{ movie.overview }}</p> -->
  </div>   
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieCard',
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        Authorization: `JWT ${token}`
      }
      return config
    },
    getTodos: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/mains/',
        headers: this.setToken()
      })
        .then((res) => {
          console.log(res)
          this.todos = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
}}
</script>

<style>

</style>