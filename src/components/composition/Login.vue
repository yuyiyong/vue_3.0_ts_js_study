<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-26 17:57:41
 * @FilePath: /vue_3.0_ts_study/src/components/composition/Login.vue
-->
<template>
  <b>用户信息：computed</b>
  <div>
    <input v-model="userName" />
    <input v-model="password" />
  </div>
  <p>{{ computeInfo }}</p>
  <br />
  <br />
  <b>判断是否及格 computed</b>
  <br />
  <input type="text" v-model="score" />
  <p>{{ computpass }}</p>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  setup() {
    let userInfo = reactive({
      userName: "",
      password: "",
    });
    let score = ref(0);
    let computeInfo = computed(() => {
      return userInfo.userName + "|" + userInfo.password;
    });
    let computpass = computed(() => {
      if (score.value == 0 || !score.value) {
        return "";
      }
      if (score.value >= 60) {
        return "及格了";
      } else {
        return "不及格";
      }
    });
    return {
      score,
      computpass,
      computeInfo,
      ...toRefs(userInfo),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>