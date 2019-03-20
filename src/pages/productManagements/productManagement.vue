<template>
  <div class="productManagement">
    <el-menu :default-active="$route.path" router mode="horizontal">
      <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">{{route.name}}</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>
  
  <script>
export default {
  name: "productManagement",
  data() {
    return {
      routes: [
        { path: "/productManagement/OriginalManagement", name: "原件管理" },
        { path: "/productManagement/ProductPlanning", name: "产品规划" },
        { path: "/productManagement/ProductMaintenance", name: "产品维护" },
        { path: "/productManagement/PromotionManagement", name: "促销品管理" },
        { path: "/productManagement/InvoiceCommodityCodingCnformation", name: "开票商品编码信息" }
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
  width: 550px;
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}
.heads {
  background: #409eff;
}

</style>
  