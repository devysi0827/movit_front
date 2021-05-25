<template>
  <div>
    <h1>Signup</h1>
    <h2>필수적으로 입력하세요</h2>
    <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="credentials.username">
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="credentials.password">
    </div>
    <div>
      <label for="passwordConfirmation">비밀번호 확인: </label>
      <input type="password" id="passwordConfirmation" v-model="credentials.passwordConfirmation">
    </div>
    
    <hr>
    <h1>profile</h1>
    <h2>선택사항입니다</h2>
    <div>
      <label for="nickname">닉네임: </label>
      <input v-model="credentials.nickname" type="text">
    </div>
    <p></p>
    <div>
      <label for="profile_image">프로필이미지: </label>
      <input v-model="credentials.profileImage" type="text">
    </div>
    <p></p>
    <div>
      <label for="introduce">자기소개: </label>
      <input v-model="credentials.introduce" type="text">
    </div>
    <div>
      <label for="email">e-mail: </label>
      <input v-model="credentials.email" type="text">
    </div>

    <button @click="signup(credentials)">회원가입</button>
    <hr>
    
  </div>
  
</template>

<script>
import axios from 'axios'

// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
        passwordConfirmation: null,
        nickname: null,
        profileImage: null,
        introduce: null,
        email: null,
      }
    }
  },
  methods: {
    signup: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/signup/',
        data: this.credentials,
      })
        .then(res => {
          console.log(res)
          this.$router.push({ name: 'Login' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
