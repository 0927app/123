<template>
  <div class="container">
    <Nav></Nav>
    <table class="table">
      <thead>
        <tr>
          <th>科目</th>
          <th>成绩</th>
          <th>用户</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(t, i) in History" :key="i">
          <td>{{ t.name }}</td>
          <td>{{ t.score }}</td>
          <td>{{ t.user }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Nav from "../components/Nav.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Nav
  },
  computed: {
    ...mapState(["History"]),
  },
};
</script>