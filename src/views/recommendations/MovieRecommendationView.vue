<template>
<div style="background-color:#F3EFE4">
  <center>
    <h1>Today Movie</h1>
    <img width="500" height="500" src="../../../image/1.png" alt="">
    <b-row class="container" style="width:100%">
      <b-col cols="10">
        <select id="feel" style= "width:500px; margin: 0px;" class="form-select " aria-label="Default select example">
          <option value="">오늘 기분이 어때요?</option>
            <option value="버럭">버럭</option>
            <option value="까칠">까칠</option>
            <option value="기쁨">기쁨</option>
            <option value="소심">소심</option>
            <option value="슬픔">슬픔</option>
        </select>
      </b-col>
      <b-col cols="2" style="margin:0px; padding: 0px 110px 0px 0px;">
        <button @click="onclick" class="btn btn-success"><font-awesome-icon :icon="['fas','film']" size="lg" :style="{ color: 'white' }"/></button>
      </b-col>
    </b-row>

    <b-modal v-model="modalShow">
      <h2> {{movie.title}} </h2>
      <!-- <h2> image 넣을 예정</h2> -->
      <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">

    </b-modal>
    

    <!-- 변수 확인 버튼
    <button @click="onclick" class="btn y" style="margin:20px; background-color: gray; color:white;">다른 영화 추천해주세요</button> -->
  </center>  
</div>
  
</template>


<script>
import axios from'axios'
import _ from 'lodash'

export default {
  name: "MovieRecommendation",
  data () {
    return{
      modalShow: false,
      weather: '',
      night: false,
      feel: '',
      movie: [],
      recommend_genres: [],
      recommend_genre: null,
      random:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,17,19],
      select_random:'',
    }
  },
  methods: {
    onclick () {
        // 기분 설정 
        this.feel = document.getElementById("feel").options[document.getElementById("feel").options.selectedIndex].value
          if (this.feel === '버럭'){
          if (this.weather === 'bad') {
            this.recommend_genres = [27,80,10752,53]
          } else {
            if (this.night) {
              this.recommend_genres = [18,99,16,878]
            } else{
              this.recommend_genres = [12,37,28,14]
            }
          }
          } else if (this.feel === '까칠'){
          if (this.weather === 'bad') {
            this.recommend_genres = []
          } else {
            if (this.night) {
              this.recommend_genres = []
            } else{
              this.recommend_genres = []
            }
          }
          } else if (this.feel === '기쁨'){
          if (this.weather === 'bad') {
            this.recommend_genres = []
          } else {
            if (this.night) {
              this.recommend_genres = []
            } else{
              this.recommend_genres = []
            }
          }
          } else if (this.feel === '소심'){
          if (this.weather === 'bad') {
            this.recommend_genres = []
          } else {
            if (this.night) {
              this.recommend_genres = []
            } else{
              this.recommend_genres = []
            }
          }
          } else if (this.feel === '슬픔'){
          if (this.weather === 'bad') {
            this.recommend_genres = []
          } else {
            if (this.night) {
              this.recommend_genres = []
            } else{
              this.recommend_genres = []
            }
          }
          } 

      // 페이지 난수 설정
      this.recommend_genre = _.sample(this.recommend_genres)
      this.select_random = _.sample(this.random)

      // api 영화정보 받기
      axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=6b1e9899f17fa92429f5a793999dcb8f&page=${this.select_random}`,
      })
      .then((res)=>{
        console.log(res)
          for (var i = 0; i < 20; i++) {
          for (var j=0; j < res.data.results[i].genre_ids.length; j++) {
            if (res.data.results[i].genre_ids[j] === parseInt(this.recommend_genre)) {
              this.movie = res.data.results[i]
            }
          }
        }
        console.log('오류나면 기분이 버럭인지 확인 할 것!!!!!!!!!!!!')
        this.modalShow = !this.modalShow
        // console.log(this.movie)
      })
      .catch((err) => {
        console.log(err)
      })
  },
},
  created: function () {
    axios({
        method: 'get',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=207f21f1a38f7c9e74fc8f80d6381069',
      })
        .then((res) => {
          var today = new Date();
          
          // 시간 설정
          if (today.getHours() >= 9) {
            this.night = true
          }

          // 날씨 설정
          if (res.data.weather[0].main === 'clear'){
            this.weather = 'good'
          } else if (this.weather === 'clouds') {
            this.weather = 'good'
          } else {
            this.weather = 'bad'
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
}

</script>

<style scoped>
  select#feel option[value="버럭"]   { background-color: red;   }
/* select#feel option[value="others"] { background-image:url(others.png); }  */
</style>