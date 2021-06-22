<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-20 16:44:57
 * @FilePath: /vue_3.0_ts_study/src/components/Parent.vue
-->
<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-20 14:48:48
 * @FilePath: /vue_3.0_ts_study/src/components/child.vue
-->
<template>
  <div class="parentWrap">
    <b>这是父组件</b>
    <button @click="sendParent">触发伏组件的事件</button>
    <hr />
    <child-comp></child-comp>
    <br>
    <child-brother></child-brother>
  </div>
</template>

<script>
import ChildComp from "./ChildComp.vue";
import ChildBrother from '@/components/ChildBrother'
export default {
  data() {
    return {
      msg: "parent 子组件msg",
    };
  },
  emits: {
    send: (msg) => {
      //验证
      console.log("msg==", msg);
      if (msg != "") {
        return true;
      } else {
        console.error("msg 不能为空");
        return false;
      }
    },
  },
  components: { ChildComp,ChildBrother },
  methods: {
    sendParent() {
      this.$emit("send", this.msg);
    },
  },
};
</script>

<style lang="scss" scoped>
.parentWrap {
  width: 400px;
  min-height: 500px;
  border: 1px solid #ccc;
  margin: 0 auto;
}
</style>