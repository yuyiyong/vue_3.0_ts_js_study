<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-27 12:01:03
 * @FilePath: /vue_3.0_ts_study/src/components/composition/HomeComp.vue
-->
<template>
  <div>
    Home title: <b>{{title1}}</b>
    <br />
    <button @click="changeTitle">改变title</button>
    <child-comp></child-comp>

    <p>
        父：provide('title',title1)
        子：let title = inject('title')
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import ChildComp from "../ChildComp.vue";
import { provide } from '@vue/runtime-core';
export default {
  components: { ChildComp },
  setup() {
      let title1 = ref('我是home中的title');
      provide('title',title1)
      const changeTitle = () => {
          title1.value = '我是改变后的title'
      }
      return {
          changeTitle,
          title1
      }
  },
};
</script>

ChildComp
<style lang="scss" scoped>
</style>