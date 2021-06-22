<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-20 18:06:00
 * @FilePath: /vue_3.0_ts_study/src/components/typingInput.vue
-->
<template>
   <input placeholder="请输入内容" :value="foo" @input="$emit('update:foo',$event.target.value)"/>
</template>

<script>
    export default {
        props:['foo'],
        data() {
            return {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>