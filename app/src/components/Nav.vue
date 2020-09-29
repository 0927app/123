<template>
    <div>
        <nav 
      class="navbar navbar-expand-md navbar-dark"
      style="background-color: #ff00ff"
    > 
      <router-link class="navbar-brand" to="/Home">首页</router-link>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
             <router-link class="nav-link" to="/java">Java</router-link>
          </li>
          <li class="nav-item active">
             <router-link class="nav-link" to="/b4">Bootstrap</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/js">JavaSript</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/html">Html</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/css">css</router-link>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          您好:{{storeusername}}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <router-link class="dropdown-item" to="/History">历史成绩</router-link>
          <li class="dropdown-item" @click="exit()">注销</li>
        </div>
      </div>
    </nav>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  computed:{
    ...mapState(['storeusername'])
  },
  methods:{
    ...mapActions(['exithistory','exitstoreusername']),
    exit(){
       this.exithistory();
       this.exitstoreusername();
       this.$router.push(`/`);
    }
  }
}
</script>