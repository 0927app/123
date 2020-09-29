<template>
  <div>
    <div class="container" style="width: 60%">
      <div class="row">
        <div
          class="col-5"
          style="
            border: 0px solid wheat;
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
                name="username"
                placeholder="用户名"
                aria-describedby="helpId"
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
                name="password"
                class="form-control"
                placeholder="密码"
                aria-describedby="helpId"
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
            <a
              href="/"
              style="
                text-decoration: none;
                position: relative;
                left: 120px;
                top: 75px;
                font-size: 15px;
              "
              >登录</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {},
  computed: {
    ...mapState[{ users: "users" }],
  },
};
</script>
