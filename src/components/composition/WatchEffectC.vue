<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-27 10:43:15
 * @FilePath: /vue_3.0_ts_study/src/components/composition/WatchEffectC.vue
-->
<template>
  <div>
    <input type="text" v-model="num" />
    <br />
    <b>num:{{ num }}</b>
    <br />
    <b>count:{{ count }}</b>
    <br />
    <input v-model="keyword" />
    {{ keyword }}
    <h3>注意，setup在beforecreate 之前</h3>

    <h3>获取父组件的title：{{title}}</h3>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { onMounted, onUpdated, watch, watchEffect } from "@vue/runtime-core";
export default {
  props: ["title"],
  setup({title}) {
      console.log("props ====>",title);
    console.log("setup...");
    const data = reactive({
      num: 0,
      count: 0,
    });

    const keyword = ref(title);

    // watchEffect(()=>{
    //     console.log(`num=${data.num}`);
    // })

    watch(data, (new1, old) => {
      console.log("new1:", new1, " old:", old);
      console.log("data.num=>>", data.num);
    });
    watch(keyword, (val, old) => {
      console.log("val-", val, " old-", old);
    });

    // setInterval(() => {
    //   data.num++;
    // }, 1000);
    //生命周期
    onMounted(() => {
      console.log("onMounted...");
    });
    onUpdated(() => {
      console.log("onUpdated...");
    });
    return {
      keyword,
      ...toRefs(data),
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
};
</script>

<style lang="scss" scoped>
</style>