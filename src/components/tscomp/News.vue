<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-27 16:03:45
 * @FilePath: /vue_3.0_ts_study/src/components/tscomp/News.vue
-->
<template>
  <div>
    <b>{{ title }}</b>
    <p>{{ description }}</p>
    <p>{{ computCount}}</p>
    <p><button @click="addCount">+</button> {{ content }}</p>
    <textarea v-model="content"></textarea>
    <button @click="setContent">内容</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "@vue/runtime-core";
interface newsIF {
  title: string;
  description: string;
  count: number;
  content?: string;
}
/* let news: newsIF = {
  title: "我是新闻title",
  description: "描述",
  count: 100,
  content: "",
}; */
let news = {
  title: "我是新闻title",
  description: "描述",
  count: 100,
  content: "",
} as newsIF;
export default defineComponent({
  setup() {
    let data = reactive(news);
    const computCount = computed((): string => {
    //   const reD: string = data.description.split("").reverse().join("");
      return data.count + "次" + data.description.split("").reverse().join("");
    });
    const addCount = (): void => {
      data.count++;
    };
    const setContent = (): void => {
      data.content = "news content 。。。";
    };
    return { addCount, setContent, computCount, ...toRefs(data) };
  },
});
</script>

<style lang="scss" scoped>
</style>