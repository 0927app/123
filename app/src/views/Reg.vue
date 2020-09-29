<template>
  <div>
    <div id="app3">
    <div class="container" style="width: 60%">
      <div class="row">
        <div
          class="col-5"
          style="
            border: 0px solid wheat;
            background-color: white;
            margin-left: 30%;
            background:rgba(255,0,0,0);
          "
        >
          <div
            style="
              width: 400px;
              height: 530px;
              border-right-color: #60a3bc;
              border-top-color: #60a3bc;
              text-align: center;
              text-transform: uppercase;
              font-size: 18px;
              position: relative;
              background-color: white;
              background:rgba(255,0,0,0);
            "
          >
            <br /><br />
            <h4 style="color: #58b6ecb9; position: relative; left: -165px">
              注册
            </h4>
            <div class="form-group">
              <br />
              <input
                type="text"
                autocomplete="off"
                class="form-control"
                v-model="username"
                placeholder="用户名"
                style="
                  width: 90%;
                  border-radius: 6px;
                  position: relative;
                  left: 12px;
                "
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="password"
                v-model="password"
                class="form-control"
                placeholder="密码"
                style="
                  width: 90%;
                  border-radius: 6px;
                  position: relative;
                  left: 12px;
                "
              />
            </div>

            <button
              type="button"
              @click="reg"
              class="btn btn-primary"
              style="width: 90%; position: relative; left: -7px; top: -000px"
            >
              注册</button
            ><br />
            <span
              style="
                color: rgba(172, 165, 165, 0.623);
                font-size: 15px;
                position: relative;
                top: 75px;
                left: 130px;
              "
              >已有账号？</span
            >
            <router-link to="/" style="
                text-decoration: none;
                position: relative;
                left: 120px;
                top: 75px;
                font-size: 15px;
                color: #000000;
              ">
              登录</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import { mapState ,mapActions} from "vuex";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    ...mapActions([
      'adduser'
    ]),
    reg(){
      let u = {username:this.username,password:this.password}
      console.log(u);
      this.adduser(u);
      alert('注册成功！')
      this.$router.push(`/`);
    }
  },
  computed: {
    ...mapState[{ users: "users" }],
  },
};
</script>
<style lang="css">
   #app3{
     background-image: url(../assets/1.jpg);
     width: 100%;
     height: 800px;
     float: left;
   }
</style>
