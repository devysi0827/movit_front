<template>
  <div>
    <h1>this is reviewview</h1>
    
    <CreateReview @complete="getReviews"/>
    <ul>
      <li v-for="review in reviews" :key="`review_${review.id}`" style="background-color: #ffc0cb;">
        <b-avatar :src="gravatar(review.email)" size="6rem"></b-avatar>
        <p>title: {{ review.title }}</p>
        <p>content: {{ review.content }}</p>
        <p>username:@{{review.username}}</p>
        <p>NickName: {{review.nickname}}</p>
        <p>createtime: {{ review.created_at }}</p>
        <p>updatetime: {{ review.updated_at }}</p>
        <p>email: {{review.email}}</p>
        <hr>
          <CreateReviewComment :reviewId= review.id />
        <div>
          <button @click="deleteReviews(review)" style="background-color: #4CAF50;" class="btn">delete</button>
        </div>
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
import md5 from "md5";
import axios from'axios'
import jwt_decode from "jwt-decode"
import CreateReview from './CreateReview.vue'
import CreateReviewComment from './CreateReviewComment.vue'

export default {
  name: 'Review',
  components : {
    CreateReview,
    CreateReviewComment
  },

 data: function () {
    return {
       profileData: {
        UserName: '',
      },
      reviews: null,
      UserName: null,
      nickname: null,
      emitData: null,
      email: '',
    
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
    getReviews: function (emitData) { 
      console.log(1)
      console.log(emitData)

      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/community/',
        headers: this.setToken(),
        
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
    gravatar(mail) {
      const hash = md5(mail.trim().toLowerCase());
      return `https://www.gravatar.com/avatar/${hash}`;
    }

  },

   computed: {
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

