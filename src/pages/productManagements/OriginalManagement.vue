<template>
  <div class="OriginalManagement">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="tsbs">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  <script>
export default {
  name: "OriginalManagement",
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 1350px) {
  .OriginalManagement .tsbs {
    width: 96%!important;
  }
}
.OriginalManagement {
  background: #efefef;
  min-height: 800px;
  overflow: hidden;
  padding-top: 20px;
}
.OriginalManagement .tsbs {
  width: 90%;
  margin: auto;
}
.OriginalManagement /deep/ .el-tabs__nav-scroll {
  padding-left: 20px;
  background: #fff;
}
</style>
  