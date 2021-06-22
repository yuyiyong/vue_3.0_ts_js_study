<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-21 15:05:58
 * @FilePath: /vue_3.0_ts_study/src/components/UlList.vue
-->
<template>
  <div>
    <ul class="btn_wrap">
      <li
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in btnList"
        :key="index"
        @click="currentIndex = index"
      >
        {{ item }}
      </li>
    </ul>
    <div v-html="content[currentIndex]"></div>
    <div id="htm">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    const odiv1 = document.querySelector("#htm");
    console.log("1-", odiv1.innerHTML);
    this.msg = "222";
    const odiv2 = document.querySelector("#htm");
    console.log("2-", odiv2.innerHTML);
    this.$nextTick(() => {
      //仅在渲染整个视图之后运行的代码
      const odiv3 = document.querySelector("#htm");
      console.log("3-", odiv2.innerHTML);
    });
  },
  activated() {
    console.log("keep-alive activated...");
  },
  deactivated() {
    console.log("keep-alive deactivated...");
  },
  updated() {
    console.log("updated..");
  },
  data() {
    return {
      msg: "111",
      currentIndex: 0,
      btnList: ["java", "js", "ts", "flutter"],
      content: [
        "java sssssss",
        "<span>js sssjdkjfljsqweq</span>",
        "<b>ts sssjdkjfljsqweq</b>",
        "<h2>flutter qwe1231</h2>",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.active {
  background: blue;
  color: white;
}
.btn_wrap {
  border: 1px solid #ccc;
  width: 50%;
  margin: 0 auto;
  li {
    display: inline-block;
    margin: 10px;
    width: 40px;
    text-align: center;
    cursor: pointer;
  }
}
</style>