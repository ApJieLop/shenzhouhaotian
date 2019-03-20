<template>
  <div class="SignIn">
    <div>
      <el-form label-width="80px" :model="information">
        <el-form-item label="账号" prop="name">
          <el-input v-model="information.accountNumber" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="information.password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="SignIn">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SignIn',
    data() {
      return {
        information: {
          accountNumber: '', // 账号
          password: '' // 密码
        }
      }
    },
    methods: {
      // 状态提示
      TsInfo:function (message, type) {
        this.$message({
          showClose: true,
          message: message,
          type: type
        });
      },
      // 点击登录
      SignIn() {
        let accountNumber = this.information.accountNumber.replace(/(^\s*)|(\s*$)/g, '');
        let password = this.information.password.replace(/(^\s*)|(\s*$)/g, '');
        if (accountNumber == '' || accountNumber == undefined || accountNumber == null || password == '' || password ==
          undefined || password == null) {
          return  this.TsInfo('账号或密码不能为空', 'error');
        } else {
          // this.$axios({
          //   method: 'post',
          //   url: '',
          //   data: this.information,
          //   // 获取数据之前-如添加请求拦截器可以自请求拦截器出做处理-根据情况而定
          //   transformRequest: () => {

          //   },
          //   // 获取数据之后-如添加响应拦截器可以自请求拦截器出做处理-根据情况而定
          //   transformResponse: () => {

          //   }
          // }).then((res) => {
          //   if (res.type != -1) {
          //     // localStorage.token = res.token;
          //     // console.log(localStorage.token);
          //     $.router.push('/');
          //     console.log(res);
          //   } else {
          //     return TsInfo('账号或密码不能为空', 'error');
          //   }
          // })
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .SignIn {
    background: #409EFF;
    height: 100%;
    position: relative;
  }

  .SignIn>div {
    width: 380px;
    height: 320px;
    background: #fff;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -250px;
    margin-top: -200px;
    padding: 40px 80px 0 40px;
    border-radius: 10px;
  }

  .SignIn>div>button {
    width: 100px;
    margin-left: 40px;
  }

</style>
