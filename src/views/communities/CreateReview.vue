<template>
  <div>
    <div class="card">
      <h1>New Review</h1>
      <div>
        <label for="title">title:</label>
        <input v-model="reviewData.title" id="title" type="text" />
      </div>
      <div>
        <label for="content">content:</label>
        <textarea v-model="reviewData.content" id="content" cols="30" rows="10">Tell me about the movie you watched</textarea>
      </div>
      <div>
        <button @click="createReview(reviewData)">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from'axios'

export default {
  name: 'CreateReview',
  data: function () {
    return {
      reviewData: { title: '', content: '', }
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
    createReview: function () {
      const reviewItem = {
        title: this.reviewData.title,
        content: this.reviewData.content
      }
      console.log(reviewItem)
      if (reviewItem) {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/community/',
          data: reviewItem,
          headers: this.setToken()
        })
          .then((res) => {
            console.log(res)
            this.$emit('complete')
          })
          .catch((err) => {
            console.log(err)
          })
        }
    },
  }
}
</script>