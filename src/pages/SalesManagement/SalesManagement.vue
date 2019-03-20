<template>
  <div class="SalesManagement">
    <el-menu :default-active="$route.path" router mode="horizontal">
      <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">{{route.name}}</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
  
  <script>
export default {
  name: "SalesManagement",
  data() {
    return {
      routes: [
        { path: "/SalesManagement/CustomerList", name: "客户列表" },
        { path: "/SalesManagement/SalesSystemQuery", name: "销售系统查询" },
        { path: "/SalesManagement/ControlOverInvoices", name: "发票管理" }
      ]
    };
  }
};
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-item.is-active {
  color: #3a8ee6 !important;
}
.el-menu-item:hover {
  outline: 0 !important;
  background: #efefef !important;
  color: #3a8ee6 !important;
}
.el-menu--horizontal > .el-menu-item {
  height: 35px;
  line-height: 35px;
  border-bottom: 0;
  border-radius: 4px;
}
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
.el-menu--horizontal {
  width: 320px;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
.heads {
  background: #409eff;
}
</style>
  