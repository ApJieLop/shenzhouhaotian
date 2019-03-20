<template>
  <div class="indexs">
    <Heads />
     <router-view></router-view>
    <Foot />
  </div>
</template>

<script>
import Heads from "./publicHF/head"
import Foot from "./publicHF/foot"
export default {
  name: "index",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  watch: {},
  components: {
    Heads,
    Foot
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

</style>
