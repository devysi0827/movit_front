<template>
<div>
  <h1>comment tab it will be delete</h1>
  <input v-model="commentData.content" type="text">
  <button @click="createComment"> 댓글달기</button>
</div>
</template>

<script>
export default {
  name: "CreateReviewComment",
  data() {
    return {
      commentData: {
        content: '',
      }
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
    createComment() {
      console.log(1)
    //   const commentItem = {
    //     content: this.commentData.content,
    //   }
    //     console.log(commentItem)
    //   if (commentItem) {
    //     axios({
    //       method: 'post',
    //       url: 'http://127.0.0.1:8000/community/<int:review_pk>/comments/',
    //       data: commentItem,
    //       headers: this.setToken()
    //     })
    //       .then((res) => {
    //         console.log(3)
    //         console.log(res)
    //         this.emitData = res.data
    //         console.log(2)
    //         console.log(this.emitData)
    //         this.$emit('complete', this.emitData)
    //         // this,reviewData.NickName = 
    //         this.reviewData.content = ''
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //       })
    //     }
    },
  }
}

</script>

<style>

</style>