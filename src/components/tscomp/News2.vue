<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-27 16:46:44
 * @FilePath: /vue_3.0_ts_study/src/components/tscomp/News2.vue
-->
<template>
  <div>
    <b>{{ title }}</b>
    <div>fun:{{ getTitle() }}</div>
    <button @click="setTitle('new 改 2')">change title</button>
    <br />
    {{ count }}
    <br />
    <div>计算属性{{ computtitle }}</div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  toRefs,
} from "@vue/runtime-core";
interface newsIF {
  title: string;
  description: string;
  getTitle(): string;
  setTitle(title: string): void;
}
export default defineComponent({
  setup() {
    //方法一
    const data = reactive<newsIF>({
      title: "news 2",
      description: "描述",
      getTitle() {
        return this.title;
      },
      setTitle(title: string) {
        this.title = title;
      },
    });
    //方法二
    const data2: newsIF = reactive({
      title: "news 2",
      description: "描述",
      getTitle() {
        return this.title;
      },
      setTitle(title: string) {
        this.title = title;
      },
    });

    const count = ref<string | number>(111);

    const computtitle = computed((): string => {
      return data.title.split("").reverse().join("");
    });

    return {
      computtitle,
      count,
      ...toRefs(data),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>