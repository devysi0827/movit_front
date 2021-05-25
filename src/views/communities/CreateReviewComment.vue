<template>
<div>
  <h1>comment tab it will be delete</h1>
  <!-- <h1>{{reviewId}}</h1> -->
  <input v-model="commentData.content" type="text">
  <div>
    <button @click="createComment"> 댓글달기</button>
  </div>
  <div>
    <button @click="seeComment">댓글보기</button>
    <button @click="closeComment">댓글닫기</button>
  </div>
   <ul>
      <li v-for="comment in comments" :key="`${comment.id}`" style="background-color: #6464cd;">
        <p>comment: {{comment.id}}</p>
        <p>content: {{ comment.content }}</p>
        <p>createtime: {{ comment.created_at }}</p>
        <p>updatetime: {{ comment.updated_at }}</p>
        <button style="background-color: #4CAF50;" class="btn" @click="deleteComment(comment)">delete</button>
        <hr>
      </li>
   </ul>
        

</div>
</template>

<script>
import axios from'axios'
export default {
  name: "CreateReviewComment",
  data() {
    return {
      comments: null,
      commentData: {
        content: '',
      }
    }
  },
  props: {
    reviewId: {
      type: Number,
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
    getComments: function () { 
      axios({
        method: 'get',
        url: `http://127.0.0.1:8000/community/${this.reviewId}/comments/`,
        headers: this.setToken(),
      })
        .then((res) => {
          this.comments = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    seeComment() {
      this.getComments()
    },
    closeComment() {
      this.comments = null
    },
    createComment() {
      const commentItem = {
        content: this.commentData.content,
      }
      if (commentItem) {
        axios({
          method: 'post',
          url: `http://127.0.0.1:8000/community/${this.reviewId}/comments/`,
          data: commentItem,
          headers: this.setToken()
        })
          .then((res) => {
            console.log(res)
            // this.$emit('complete', this.emitData)
            this.getComments()
            this.commentData.content = ''
          })
          .catch((err) => {
            console.log(err)
          })
        }
    },
    deleteComment:function (comment) {
      axios({
        method: 'delete',
        url: `http://127.0.0.1:8000/community/${this.reviewId}/comments/${comment.id}/`,
        headers: this.setToken()
      })
        .then((res) => {
          console.log(res)
          this.getComments()
        })
        .catch((err) => {
          console.log(err)
        })
    },

  },
}

</script>

<style>

</style>