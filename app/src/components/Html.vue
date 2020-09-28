<template>
   
        <div class="container">
            <!--进度条-->
     <div class="progress my-3">
         <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar"
             style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Description</div>
     </div>
          
     <div class="jumbotron jumbotron-fluid">
           <!--题干-->
         <div class="container" >
          
         	<h1 class="display-5"><span class="badge badge-dark mr-2" >{{examination[progress].id}}</span>{{examination[progress].subject}}</h1>
				
             <hr class="my-2">
               <!--选项-->
             	<div  v-if="this.progress<this.size">
					<div class="form-check my-3"  v-for="(i, index) in examination[progress].item" :key="index">
						<label class="form-check-label">
							<input type="radio" class="form-check-input" name="item" :value="itemTitles[index]" v-model="answe">
							<span class="badge badge-pill badge-danger mr-2" >{{itemTitles[index]}}</span>{{i}}
						</label>
					</div>
				</div>
                	<!-- 多选题 -->
					<div v-else-if="this.progress<this.examination.length">
						<div class="form-check my-3"  v-for="(i, index) in examination[progress].item" :key="index">
							<label class="form-check-label">
								<input type="checkbox" class="form-check-input" name="item" :value="itemTitles[index]" v-model="answe">
								<span class="badge badge-pill badge-danger mr-2">{{itemTitles[index]}}</span>{{i}}
							</label>
						</div>
					</div>
          <div class="row"  > 
			    <div class="col-lg-6 ">
			        <button @click="add()" v-show="progress>0" type="button" name=""  class="btn btn-danger btn-lg btn-block">上一题</button>
			    </div>
				<div  class="col-lg-6 "  >
					 <!--如果为空不能按-->
					 <button v-if="answe!=''" @click="down()" type="button" name="" class="btn btn-primary btn-lg btn-block">下一题</button> 
					 <button v-else @click="down()" type="button" name=""  class="btn btn-outline-primary btn-lg btn-block">下一题</button>
				</div>	
			    <div  class="col-lg-6 ">
			         <button @click="submit"   type="button" name="" class="btn btn-primary btn-lg btn-block">提交</button>
			     </div>	
				
			</div>	
         </div>

         <!--提交显示-->
         <div class="jumbotron">
	    <h1 class="display-4">答案与得分</h1>
	    <hr class="my-2">
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
	            <tr >
	                <td>题号</td>
	                <td><span class="badge badge-danger">你的答案</span></td>
	                <td><span class="badge badge-primary">正确答案</span></td>
	                <td>状态（错对）</td>
	            </tr>
	            <tr>
	                <td class="text-center h3" colspan="3">总成绩</td>
	                <td class="h3 text-danger">分数</td>
	            </tr>
	        </tbody>
	    </table>
		<a >
		<button  type="button" name="" class="btn btn-primary btn-lg btn-block">结束答题</button>
		</a>
	</div>
     </div>
          

         
        </div>
   
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
     return{
     
      //选项
      itemTitles:['A','B','C'],
      //进度
      progress:0,
      //选择的回答
      answe:[],
      //把所有的回答存起来
    answers: new Map(),
      	//提交默认是false
            submit: false,
         size:7,
     }
      
},
 //计算属性
 computed:{
     ...mapState([
       'examination'
     ])
 },
 //方法
 methods:{
     //上一题
    add(){
       if(this.progress>0){
           this.progress--;
      this.much = this.answer.get(this.progress);
      console.log(much)
      
       }
    },
    //下一题
    down(){
       	if (this.progress < this.size) {
				this.progress++;
				//向this.answers.set()方法添加设置值
                this.answers.set(this.progress, this.answe);
                console.log(this.answe);
                console.log(this.answers);
               
				//清空
				this.answe= [];
			} else  if (this.progress < this.examination.length) {
				this.progress++;
                this.answers.set(this.progress, this.answe.sort().join(""));
                  console.log(this.answers);
				this.answe = [];
			}
    }
 }
    }

</script>
<style lang="">
    
</style>
