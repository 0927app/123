<template>
<div id="app3">
  <div id="app1" class="container">
    <Nav class="mt-5" style="background:rgba(255,0,0,0.2);"></Nav>
      <div class="jumbotron" style="font-size: 120%; color: #b33bc3; background:rgba(255,0,0,0); ">
        <h1 class="display-1" style="text-align:center">在线考试系统</h1>
      </div>
      <!-- <img src="../assets/1.jpg" id="app3" > -->
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav,
  },
};
</script>

<style>
   #app3{
     
     background-image: url(../assets/1.jpg);
     width: 100%;
     height: 800px;
     float: left;

   }
</style>