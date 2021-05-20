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
import { mapActions } from 'vuex'

export default {
  name: 'CreateReview',
  data() {
    return {
      reviewData: { title: '', content: '' } // 글쓴이도 넣고 싶은뎅
    }
  },
  methods: {
    ...mapActions(['createReview'])
  }
}
</script>