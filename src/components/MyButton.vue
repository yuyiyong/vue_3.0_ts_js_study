<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-21 10:56:01
 * @FilePath: /vue_3.0_ts_study/src/components/MyButton.vue
-->
<template>
    <button>
        <!-- 步骤2 -->
        <div v-bind="$attrs">
        <slot>default</slot>
        </div>
    </button>
</template>

<script>
    export default {
        inheritAttrs:false  //步骤1
        
    }
</script>

<style lang="scss" scoped>

.primary{
    background: cornflowerblue;
    border: none;
}
.black{
    background: #000;
    
}

</style>