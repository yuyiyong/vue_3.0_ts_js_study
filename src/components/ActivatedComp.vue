<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-21 14:42:37
 * @FilePath: /vue_3.0_ts_study/src/components/ActivatedComp.vue
-->
<template>
  <div>
    <keep-alive>
      <ul-list v-if="flag"></ul-list>
    </keep-alive>
    <br />
    <button @click="flag = !flag">去除/显示组件</button>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import UlList from "./UlList.vue";
export default {
  components: { UlList },
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>