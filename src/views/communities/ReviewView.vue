<template>
  <div>
    <h1>this is reviewview</h1>
    <CreateReview @complete="getReviews"/>
    <ul>
      <!-- 오류1 -->
      <li v-for="review in reviews" :key="`review_${review.id}`">
        <p>title: {{ review.title }}</p>
        <p>content: {{ review.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from'axios'
import CreateReview from './CreateReview.vue'

export default {
  name: 'Review',
  components : {
    CreateReview
  },

 data: function () {
    return {
      reviews: null,
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
          this.reviews = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  }
}
</script>