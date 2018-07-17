<template>
  <div id="app">
    <div id="nav" class="navbar navbar-default">
      <ul class="nav navbar-nav">
        <router-link to="/login" tag="li" active-class="active"><a href="#" v-if="!isLogin">Login</a></router-link>
        <router-link to="/dashboard" tag="li" active-class="active"><a href="#">Dashboard</a></router-link>
        <li>
          <a href="#" @click="logout">退出</a>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { isLogin } from './auth.js'

export default {
  updated() {
    this.isLogin = isLogin()
  },
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>


<style>
</style>
