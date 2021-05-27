<template>
  <div id="app">
    <span v-if="isLogin">
      <div id="nav" v-if="$route.name == 'Maindoor'" style="background-color: black; color:white;">
        <router-link :to="{name: 'Home'}" >Home</router-link> |
        <router-link :to="{name: 'Review'}">Review</router-link> |
        <router-link :to="{name: 'MovieRecommendation'}">MovieRecommendation</router-link> |
        <router-link :to="{name: 'Profile'}">Profile</router-link> |
        <router-link :to="{name: 'Maindoor'}">Maindoor</router-link> |
        <router-link @click.native="logout" to="#">Logout</router-link>
      </div>
      <div id="nav" v-else-if="$route.name == 'Home'" style="background-color: black; color:white;">
        <router-link :to="{name: 'Home'}" >Home</router-link> |
        <router-link :to="{name: 'Review'}">Review</router-link> |
        <router-link :to="{name: 'MovieRecommendation'}">MovieRecommendation</router-link> |
        <router-link :to="{name: 'Profile'}">Profile</router-link> |
        <router-link :to="{name: 'Maindoor'}">Maindoor</router-link> |
        <router-link @click.native="logout" to="#">Logout</router-link>
      </div>
      <div id="nav" v-else style="background-color: #F3EFE4;">
        <router-link :to="{name: 'Home'}" >Home</router-link> |
        <router-link :to="{name: 'Review'}">Review</router-link> |
        <router-link :to="{name: 'MovieRecommendation'}">MovieRecommendation</router-link> |
        <router-link :to="{name: 'Profile'}">Profile</router-link> |
        <router-link :to="{name: 'Maindoor'}">Maindoor</router-link> |
        <router-link @click.native="logout" to="#">Logout</router-link>
      </div>
    </span>
    <span v-else>
      <router-link :to="{ name: 'Signup' }">Signup</router-link> |
      <router-link :to="{ name: 'Login' }">Login</router-link> 
    </span>
    <router-view @login="isLogin = true"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      isLogin: false,
    }
  },
  methods: {
    logout: function () {
      this.isLogin = false
      localStorage.removeItem('jwt')
      this.$router.push({ name: 'Login' })
    }
  },
  created: function () {
    const token = localStorage.getItem('jwt')
    if (token) {
      this.isLogin = true
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
