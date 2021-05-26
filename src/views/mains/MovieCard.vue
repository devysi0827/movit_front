<template>
<div>
  <div id="container" class="card">
    <div class="card-body" style="margin:0px; padding:0px;">
      <!-- <h3 class="card-title">{{ movie.title }}</h3> -->
      <b-button style=" background-color: #300000" @click="modalShow = !modalShow">
        <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
      </b-button>
    </div>  
  </div>
  <div>  
    <b-modal v-model="modalShow" size="xl" title="DETAIL">    
      <h1 style="font-weight: bold"> {{ movie.title}} </h1>
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
          </b-col>
          <b-col><p style="font-size: 25px">{{ movie.overview }}</p></b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object
  },
  data: function() {
    return{
      modalShow: false
    }
  },
}
</script>

<style>

</style>