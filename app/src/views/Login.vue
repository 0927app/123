<template>
  <div class="loginreg">
    <div class="container" style="width: 60%">
      <div class="row">
        <div
          class="col-6"
          style="
            border: 0px solid black;
            background-color: white;
            margin-left: 30%;
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
            "
          >
            <br />
            <h4
              style="
                color: #58b6ecb9;
                position: relative;
                left: -165px;
                top: 50px;
              "
            >
              登录
            </h4>
            <br />
            <!--账户的输入框 -->
            <div class="form-group">
              <input
                type="text"
                autocomplete="off"
                class="form-control"
                v-model="username"
                name="username"
                placeholder="用户名"
                aria-describedby="helpId"
                style="
                  width: 90%;
                  border-radius: 6px;
                  position: relative;
                  left: 12px;
                  top: 50px;
                "
              />
            </div>
            <br />
            <!-- 密码输入框-->
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="password"
                name="password"
                placeholder="密码"
                aria-describedby="helpId"
                style="
                  width: 90%;
                  border-radius: 6px;
                  position: relative;
                  left: 12px;
                  top: 50px;
                "
              />
            </div>

            <br />

            <button
              type="button"
              @click="login"
              class="btn btn-primary"
              style="width: 90%; position: relative; left: -7px; top: 40px"
            >
              登陆</button
            ><br />
            <span
              style="
                color: rgba(172, 165, 165, 0.623);
                font-size: 15px;
                position: relative;
                top: 105px;
                left: 130px;
              "
              >没有账号？</span
            >
            <router-link
              to="/Reg"
              style="
                text-decoration: none;
                position: relative;
                left: 120px;
                top: 105px;
                font-size: 15px;
              "
            >
              注册</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState ,mapActions} from "vuex";
// import { MapAction } from "vuex";
// export default {
//   methods: {
//     ...MapAction(["as"]),
//   },
// };
export default {
  data() {
    return {
      username: null,
      password: null,
      falsg: false,
    };
  },
  computed: {
    ...mapState(["users",'storeusername']),
  },
  methods: {
    ...mapActions(['addusername']),
    login: function () {
      //  console.log(this.users);
      for (let i = 0; i < this.users.length; i++) {
        if (
          this.username == this.users[i].username &&
          this.password == this.users[i].password
        ) {
          this.falsg = true;
          break;
        } else {
          this.falsg = false;
        }
      }
      if (this.falsg) {
        alert("登陆成功");
        this.addusername(this.username);
        this.$router.push(`/Home`);
        
      } else {
        alert("登陆失败");
      }
    },
  },
};
</script>
