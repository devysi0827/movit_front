<template>
<div>
  <nav id="nav">
      <button id="prev" data-increment="-1">Previous</button>
      <button id="next" data-increment="1">Next</button>
</nav>

<div class="demoWrapper">
  <div class="stage">
    <div class="box">
      <img src="http://via.placeholder.com/285x285" width="285" height="285">
    </div>
    <div class="box">
      <img src="http://via.placeholder.com/285x285" width="285" height="285">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box">
    </div>
    <div class="box"> <b-button style=" background-color: #300000" @click="modalShow = !modalShow">
      <img src="https://image.tmdb.org/t/p/w500//xCEg6KowNISWvMh8GvPSxtdf9TO.jpg" width="285" height="285">
    <!-- <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"> -->
    </b-button>
     <div>
    
    <b-modal v-model="modalShow" size="xl" title="DETAIL"> <!-- 이 안에 어떻게 {{ movie.title}} 넣어요?-->
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <img class="img-fluid" src="https://image.tmdb.org/t/p/w500//xCEg6KowNISWvMh8GvPSxtdf9TO.jpg">
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
  </div>
    </div>
    <div class="box">
    </div>
  </div>
</div>

<div class="stage">


</div>
</div>
</template>

<script>
// import gsap from 'gsap'
import TweenMax from 'gsap'
import TweenLite from 'gsap'
import Linear from 'gsap'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

export default {
  name: 'Slider',
  data: function() {
    return{

      modalShow: false

    }
  },
  mounted() {
    $(window).on("load",function(){

var boxes = $(".box"),
    stage = $(".stage");

TweenLite.set(stage, {
  css: {
    perspective: 1100,
    transformStyle: "preserve-3d"
  }
});

boxes.each(function(index, element) {
  TweenLite.set(element, {
    css: {
      rotationY: index * 360 / 13,
      transformOrigin: "50% 50% -420"
    }
  });
  TweenMax.to(element, 20, {
    css: {
      z:0.01,
      rotationY: "+=359"
    },
    repeat: -1, // 20
    ease: Linear.easeNone
  });
});
  
});
    
  },
}
</script>

<style scoped>
html{
  background-image: linear-gradient(207deg, #B4EC51 0px, #419A4A 100%);
  height: 100%;
}

body {
    height:100%;
}

.demoWrapper {
  width: 680px;
  height: 400px;
  -webkit-font-smoothing: antialiased;
  margin: 50px auto;
  padding: 1px;
}

.stage {
  height: 325px;
  margin-top: auto;
  margin-left: auto;
  color: #ddd;
  margin-right: 10px;
  font-family: Arial, Helvetica, Verdana;
  position:realtive;
}

.box {
  position: absolute;
  width: 180px;
  height: 250px;
  background-color: #06f;
  display: inline-block;
  margin: 10px 20px 20px 235px; 
  display: inline-block;
  overflow:hidden;
}

.box > img {
  width:180px;
  height:auto;
  border:1px solid #DDD;
  outline:0 solid transparent;
}
</style>