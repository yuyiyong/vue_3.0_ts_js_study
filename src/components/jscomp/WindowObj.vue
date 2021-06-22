<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-22 11:08:19
 * @FilePath: /vue_3.0_ts_study/src/components/jscomp/operator copy.vue
-->
<template>
  <div>
    <h2>WindowObj</h2>
    <section>
      <div>
        <a @click="imgHandle" href="javascript:;">思维导图</a><br />
        <img
          :class="{ img_small: imgavisiable }"
          @click="imgHandle"
          :src="imgP"
          alt=""
        />
      </div>
      <div class="section_right">
          123123123123123121
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import imgP from "../../assets/jsimg/JavascriptWindowObj.jpeg";
export default {
  setup() {
    var data = reactive({
      imgP,
      imgavisiable: true,
    });
    function imgHandle() {
      data.imgavisiable = !data.imgavisiable;
    }
    return { imgHandle, ...toRefs(data) };
  },
};
</script>

<style lang="scss" scoped>
@import "./jsGlobal.scss"
</style>