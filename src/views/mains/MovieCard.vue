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

    </b-modal>
  </div>
</div>
</template>

<script>
// import Content from "./Content"; 
// import ModalView from "./ModalView";

export default {
  name: 'MovieCard',
  components: {
    // Content,
    // ModalView,
  },
  props: {
    movie: Object
  },
  data: function() {
    return{
      // isModalViewed:false,
      modalShow: false

    }
  },
  methods: {
    // modalStart: function () {
    //   this.$emit('openmodal')
    //   console.log(1)
    // },
  }
}
</script>

<style>

</style>