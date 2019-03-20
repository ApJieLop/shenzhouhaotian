<template>
  <div class="heads">
    <div>
      <img class="logo" src="../../assets/images/logo展开.png" alt>
      <el-menu :default-active="paths" router mode="horizontal">
        <el-menu-item v-for="route in routes" :key="route.path" :index="route.path" >{{route.name}}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "heads",
  data() {
    return {
      paths:'',
      routes: [
        { path: "/productManagement", name: "产品管理" },
        { path: "/customerManagement", name: "客户管理" },
        { path: "/SalesManagement", name: "销售管理" },
        { path: "/IntegralManagement", name: "积分管理" },
        { path: "/resourceManagement", name: "资源管理" },
        { path: "/Other", name: "其他" }
      ]
    };
  },
  mounted() {
     this.tindex()
  },
  methods: {
    tindex() {      
      this.paths = '/' + this.$route.fullPath.split('/')[1]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.el-menu-item.is-active {
  background: #3a8ee6 !important;
  // font-weight:600;
}
.el-menu-item:hover {
  outline: 0 !important;
  color: #ffffff !important;
  background: #3a8ee6 !important;
}
.heads {
  background: #409eff;
}
.el-menu--horizontal > .el-menu-item {
  height: 42px;
  line-height: 42px;
  color: #fff !important;
  border-bottom: 0;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-menu--horizontal {
  width: 548px;
  margin: auto;
  background: #409eff;
}
@media screen and (max-width: 1350px) {
  .heads > div {
    width: 95% !important;
  }
}
.heads > div {
  width: 90%;
  margin: auto;
  position: relative;
}
.heads > div .logo {
  position: absolute;
  top: 5px;
  left: 0;
}
</style>
