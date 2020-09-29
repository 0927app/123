<template>
  <div class="container">
     <Nav></Nav>
    <!--进度条-->
    <div class="progress my-3">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
        role="progressbar"
        :style="jdt"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {{ (progress + 1) * 10 }}%
      </div>
    </div>

    <div class="jumbotron jumbotron-fluid">
      <!--题干-->
      <div class="container">
        <h1 class="display-5">
          <span class="badge badge-dark mr-2">{{ b4[progress].id }}</span
          >{{ b4[progress].subject }}
        </h1>

        <hr class="my-2" />
        <!--选项-->
        <div v-if="this.progress < this.size">
          <div
            class="form-check my-3"
            v-for="(i, index) in b4[progress].item"
            :key="index"
          >
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="item"
                :value="itemTitles[index]"
                v-model="answe"
              />
              <span class="badge badge-pill badge-danger mr-2">{{
                itemTitles[index]
              }}</span
              >{{ i }}
            </label>
          </div>
        </div>
        <!-- 多选题 -->
        <div v-else-if="this.progress < this.b4.length">
          <div
            class="form-check my-3"
            v-for="(i, index) in b4[progress].item"
            :key="index"
          >
            <label class="form-check-label">
              <input
                type="checkbox"
                class="form-check-input"
                name="item"
                :value="itemTitles[index]"
                v-model="answe"
              />
              <span class="badge badge-pill badge-danger mr-2">{{
                itemTitles[index]
              }}</span
              >{{ i }}
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <button
              @click="add()"
              v-show="progress > 0"
              type="button"
              class="btn btn-outline-danger btn-lg btn-block"
            >
              上一题
            </button>
          </div>
          <div class="col-lg-6">
            <!--如果为空不能按-->
            <button
              v-show="progress<9"
              v-if="answe != ''"
              @click="down()"
              type="button"
              class="btn btn-outline-primary btn-lg btn-block"
            >
              下一题
            </button>
            <button
              v-show="progress<9"
              v-else
              @click="down()"
              type="button"
              class="btn btn-outline-primary btn-lg btn-block"
            >
              下一题
            </button>
          </div>
        </div>
        <div class="col-lg-12 mt-3">
          <button
            @click="submitexam()"
            type="button"
            class="btn btn-success btn-lg btn-block"
          >
            提交
          </button>
        </div>
      </div>

      <!--提交显示-->
      <div class="jumbotron" v-show="submit">
        <h1 class="display-4">答案与得分</h1>
        <hr class="my-2" />
        <table class="table">
          <thead class="text-center">
            <tr>
              <th>序号</th>
              <th>答案</th>
              <th>正确答案</th>
              <th>得分</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="(i, index) in answers" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <span class="badge badge-danger">{{ i }}</span>
              </td>
              <td>
                <span class="badge badge-primary">{{ b4[index].answer }}</span>
              </td>
              <td v-if="i == b4[index].answer">正确</td>
              <td v-else>错误</td>
            </tr>
            <tr>
              <td class="text-center h3" colspan="3">总成绩</td>
              <td class="h3 text-danger">分数:{{ sum }}</td>
            </tr>
          </tbody>
        </table>
        <a>
          <button
            type="button"
            name=""
            class="btn btn-success btn-lg btn-block"
          >
            结束答题
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '../components/Nav.vue'
import { mapState } from "vuex";
export default {
  data() {
    return {
      //选项
      itemTitles: ["A", "B", "C", "D"],
      //进度
      progress: 0,
      //选择的回答
      answe: [],
      //把所有的回答存起来
      answers: [],
      //提交默认是false
      submit: false,
      size: 7,
      // 分数
      sum: 0,
    };
  },
  //计算属性
  computed: {
    ...mapState(["b4"]),
    jdt: function () {
      return `width:${(this.progress + 1) * 10}% `;
    },
  },
  //方法
  methods: {
    //上一题
    add() {
      if (this.progress > 0) {
        this.progress--;
        this.answe = this.answers[this.progress];
        this.answers.splice(this.progress, 1);
      }
    },
    //下一题
    down() {
      if (this.progress < this.size) {
        this.progress++;
        //向this.answers.set()方法添加设置值  ，往答案数组添加元素
        this.answers.push(this.answe);
        //清空
        this.answe = [];
      } else if (this.progress < this.b4.length) {
        this.progress++;
        let s = "";
        for (let i = 0; i < this.answe.length; i++) {
          s += this.answe[i];
        }
        this.answers.push(s);
        s = "";
        this.answe = [];
      }
    },
    // 提交
    submitexam() {
      this.down();
      if ((this.progress = this.b4.length - 1)) {
        this.submit = true;
      }
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i] == this.b4[i].answer) {
          this.sum += 10;
        }
      }
    },
  },
   components:{
    Nav,
  }
};
</script>
<style lang="">
</style>
