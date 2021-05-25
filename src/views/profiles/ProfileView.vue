<template>
  <div>
    <h1>this is profile</h1>
    <div class="mb-2">
    
    <b-avatar :src="gravatar" size="6rem"></b-avatar>
  </div>
    <ul>
      <li>username : {{profileData.UserName}}</li>
      <li>자기소개 : {{introduce}}</li>
      <li>profileimage : {{profileImage}}</li>
      <li>email : {{email}}</li>
    </ul>

    <!-- <button @click="getProfileData()">button</button> -->
  </div>
</template>

<script>
import md5 from "md5";
import jwt_decode from "jwt-decode"
import axios from'axios'

export default {
  name: "Profile",
  data () {
    return{
      profileData: {
        UserName: '',
      },
      email: '',
      profileImage: '',
      introduce: '',
    }
  },

  methods: {
    getProfileData: function () { 
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/accounts/profile_data/',
        data: this.profileData,
      })
        .then((res) => {
          console.log(res.data)
          this.email = res.data.email
          this.profileImage = res.data.profileImage
          this.introduce = res.data.introduce
        })
        .catch((err) => {
          console.log(err)
        })
    },
     
  },

  computed: {
    gravatar() {
      const hash = md5(this.email.trim().toLowerCase());
      console.log(hash)
      return `https://www.gravatar.com/avatar/${hash}`;
    }
  },

  created: function () {
    if (localStorage.getItem('jwt')) {
      var token = localStorage.jwt
      this.profileData.UserName = jwt_decode(token).username
      this.getProfileData()
    } else {
      this.$router.push({name: 'Login'})
    }

  },
}
</script>

<style>

</style>