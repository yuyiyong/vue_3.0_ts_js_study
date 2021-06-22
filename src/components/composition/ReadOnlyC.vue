<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-26 18:12:31
 * @FilePath: /vue_3.0_ts_study/src/components/composition/ReadOnlyC.vue
-->
<template>
    <div>
        原始对象(非响应式数据)：{{primaryObj.username}} | age:{{primaryObj.age}}
        <br>
        <input type="text" v-model="primaryObj.username">
    </div>
</template>

<script>
import { reactive,readonly } from '@vue/reactivity'
    export default {
       setup(){
           let userinfo = reactive({
               username:'铁蛋',
               age:0
           });
           let primaryObj = reactive({
               username:'大黑',
               age:30,
           })
           primaryObj = readonly(primaryObj)
           return {
               userinfo,
               primaryObj
           }
       } 
    }
</script>

<style lang="scss" scoped>

</style>