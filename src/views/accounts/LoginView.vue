<template>
  <div  style="background-color: #F3EFE4;">
    <h1 style="font:bold;">Login</h1>
      <div class="textbox">
        <label for="username">사용자 이름</label>
        <input type="text" id="username" v-model="credentials.username">
      </div>
      <div class="textbox">
        <label for="password">비밀번호</label>
        <input type="password" id="password" v-model="credentials.password">
      </div>
      <button @click="login" class="btn btn-success">로그인</button>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    login: function () {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
        data: this.credentials,
      })
        .then(res => {
          console.log(res)
          localStorage.setItem('jwt', res.data.token)
          this.$emit('login')
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
$(document).ready(function() { 
  var placeholderTarget = $('.textbox input[type="text"], .textbox input[type="password"]'
  ); 
  //포커스시 
  placeholderTarget.on('focus', function(){ 
    $(this).siblings('label').fadeOut('fast'); 
  }); 
  
  //포커스아웃시 
  placeholderTarget.on('focusout', 
  function(){ 
    if($(this).val() == ''){ 
  $(this).siblings('label').fadeIn('fast'); 
  } 
  }); 
});

</script>

<style>

.textbox { 
  position: relative; 
  width: 30%; 
  margin: 15px;
  margin-left:auto; 
  margin-right:auto;
  }
.textbox label {
  position: absolute;
  top: 1px;  /* input 요소의 border-top 설정값 만큼 */
  left: 1px;  /* input 요소의 border-left 설정값 만큼 */
  padding: .8em .5em;  /* input 요소의 padding 값 만큼 */
  color: #999;
  cursor: text;
}

.textbox input[type="text"],
.textbox input[type="password"] {
  width: 100%;  /* 원하는 너비 설정 */ 
  height: auto;  /* 높이값 초기화 */
  line-height : normal;  /* line-height 초기화 */
  padding: .8em .5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  border: 1px solid #999;
  border-radius: 0;  /* iSO 둥근모서리 제거 */
  outline-style: none;  /* 포커스시 발생하는 효과 제거를 원한다면 */
  -webkit-appearance: none;  /* 브라우저별 기본 스타일링 제거 */
  -moz-appearance: none;
  appearance: none;
}
</style>