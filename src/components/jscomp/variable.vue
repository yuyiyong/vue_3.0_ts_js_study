<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-22 10:48:16
 * @FilePath: /vue_3.0_ts_study/src/components/jscomp/variable.vue
-->
<template>
  <div>
    <h2>variable</h2>
    <section>
      <a @click="imgHandle" href="javascript:;">思维导图</a><br/>
      <img :class="{img_small:imgavisiable}" @click="imgHandle"  :src="imgP" alt="" />
    </section>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import imgP from "../../assets/jsimg/JavascriptVariable.jpeg";
export default {
  setup() {
    var data = reactive({
      imgP,
      imgavisiable: false,
    });
    function imgHandle() {
      data.imgavisiable = !data.imgavisiable;
    }
    return { imgHandle, ...toRefs(data) };
  },
};
</script>

<style lang="scss" scoped>
section{
    text-align: left;
}
.img_small{
    width: 100px;
    height: auto;
}
</style>