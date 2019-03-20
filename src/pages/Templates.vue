<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
  
  <script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  // 是件集合
  methods: {},
  // dom加载完毕后初始化钩子
  mounted() {},
  // dom未加载结束前初始化钩子
  created: {}
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
</style>
  