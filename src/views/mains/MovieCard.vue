<template>
<div>

<div class="card">
  <div class="card-body">
    <h3 class="card-title">{{ movie.title }}</h3>
    <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
      Detail
    </button>
    <!-- <button @click="modalStart">Detail</button> -->
    <!-- <p> class="card-text">{{ movie.overview }}</p> -->
  </div>  
</div>

<!-- @openmodal="modalTrue" -->
<!-- <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
  <Content msg="안녕안녕"/>
</ModalView> -->

<!-- Modal -->
<div class="b-modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>hello</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
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
    }
  },
  // methods: {
  //   modalStart: function () {
  //     this.$emit('openmodal')
  //     console.log(1)
  //   },
  // }
}
</script>

<style>

</style>