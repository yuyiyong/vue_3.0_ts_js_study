<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-27 12:05:37
 * @FilePath: /vue_3.0_ts_study/src/components/composition/LocationComp.vue
-->
<template>
  <div>LocationComp</div>
  <div>location 中调用provide中的title</div>
  <b>{{title}}</b>
  <input type="text" v-model="title">
</template>

<script>
import { inject } from '@vue/runtime-core';
export default {
    setup(){
        let title = inject('title')
        return {
            title,
        }
    }
};
</script>

<style lang="scss" scoped>
</style>