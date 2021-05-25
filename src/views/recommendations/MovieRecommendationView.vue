<template>
  <div>

    <h1> it's MovieRecommendation tab</h1>

    <select id="feel" style= "width:500px;" class="form-select " aria-label="Default select example">
      <option value="">오늘 기분이 어때요?</option>
        <option value="버럭">버럭</option>
        <option value="까칠">까칠</option>
        <option value="기쁨">기쁨</option>
        <option value="소심">소심</option>
        <option value="슬픔">슬픔</option>
    </select>

    <div>
      <b-button @click="modalShow = !modalShow">오늘의 영화를 추천해 드려요</b-button>
        <b-modal v-model="modalShow">
          
          <h2> {{movie.title}} </h2>
          <!-- <h2> image 넣을 예정</h2> -->
          <img class="img-fluid" v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">

        </b-modal>
    </div>

    <!-- 변수 확인 버튼 -->
    <button @click="onclick">get movie</button>
    
  </div>
</template>


<script>
import axios from'axios'

export default {
  name: "MovieRecommendation",
  data () {
    return{
      // date: '',
      weather: '',
      hour: '',
      feel: '',
      movie: [],
      modalShow: false,
    }
  },
  methods: {
    onclick () {
      axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=6b1e9899f17fa92429f5a793999dcb8f',
      })
        .then((res) => {
          for (var i = 0; i < 20; i++) {
            // console.log(res.data.results[i].genre_ids)
            for (var j=0; j < res.data.results[i].genre_ids.length; j++) {
              if (res.data.results[i].genre_ids[j] === 14) {
                this.movie = res.data.results[i]
              }
            }
          }
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
          // this.date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          this.weather = res.data.weather[0].main //Rain clear Clouds
          this.hour = today.getHours()
          this.feel = document.getElementById("feel").options[document.getElementById("feel").options.selectedIndex]
          console.log(this.feel)
          console.log(this.hour)
          console.log(this.weather)
        })
        .catch((err) => {
          console.log(err)
        })
    },
}

</script>

<style>
  select#feel option[value="버럭"]   { background-color: red;   }
/* select#feel option[value="others"] { background-image:url(others.png); }  */
</style>