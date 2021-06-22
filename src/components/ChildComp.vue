<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-27 11:27:59
 * @FilePath: /vue_3.0_ts_study/src/components/ChildComp.vue
-->
<template>
    <div >
        <b>这是子组件</b>
        <location-comp></location-comp>
    </div>
</template>

<script>
import LocationComp from './composition/LocationComp.vue'
    export default {
  components: { LocationComp },
        
    }
</script>

<style lang="scss" scoped>


</style>