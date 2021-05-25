<template>
<div>

<div class="card">
  <div class="card-body">
    <h3 class="card-title">{{ movie.title }}</h3>
    <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
  </div>  
</div>
  <div>
    <b-button @click="modalShow = !modalShow">Open Modal</b-button>
    <b-modal v-model="modalShow">
      <h2> {{ movie.title}} </h2>
      <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
      <ModalContent/>
    </b-modal>
  </div>
</div>
</template>

<script>
import ModalContent from "./ModalContentView";

export default {
  name: 'MovieCard',
  components: {
    ModalContent,
  },
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