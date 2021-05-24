<template>
  <div>
    <h1>this is reviewview</h1>
    
    <CreateReview @complete="getReviews"/>
    <ul>
      <li v-for="review in reviews" :key="`review_${review.id}`" style="background-color: #ffc0cb;">
        <p>title: {{ review.title }}</p>
        <p>content: {{ review.content }}</p>
        <p>username: {{UserName}}</p>
        <button @click="deleteReviews(review)" style="background-color: #4CAF50;" class="btn">X</button>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from'axios'
import jwt_decode from "jwt-decode"
import CreateReview from './CreateReview.vue'

export default {
  name: 'Review',
  components : {
    CreateReview
  },

 data: function () {
    return {
      reviews: null,
      UserName: null,
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
    // 갱신하는 함수인데 
    getReviews: function () { 
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/community/',
        headers: this.setToken()
      })
        .then((res) => {
          console.log(res.data)
          this.reviews = res.data.reverse()
        })
        .catch((err) => {
          console.log(err)
        })
    },

    deleteReviews: function (review) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/${review.id}/`,
        headers: this.setToken()
      })
        .then((res) => {
          console.log(res)
          this.getReviews()
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  created: function () {
    if (localStorage.getItem('jwt')) {
      this.getReviews()
      var token = localStorage.jwt
      this.UserName = jwt_decode(token).username
    } else {
      this.$router.push({name: 'Login'})
    }

  },
}
</script>

