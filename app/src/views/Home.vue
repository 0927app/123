<template>
  <div id="app1" class="container">
    <Nav></Nav>
    <div id="bg">
      <div class="jumbotron" style="font-size: 120%; color: #b33bc3">
        <h1 class="display-3">在线考试系统</h1>
      </div>
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

</style>