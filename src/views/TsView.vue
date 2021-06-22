<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-28 10:23:49
 * @FilePath: /vue_3.0_ts_study/src/views/TsView.vue
-->
<template>
  <h1>{{title}}</h1>
  <button @click="setTitle">change title</button>
  <h2>news</h2>
  <news></news>
  <br>
  <news-2></news-2>
  <hr>
  <h2>动态路由</h2>
  <news-router></news-router>

</template>

<script lang="ts">
import News from "@/components/tscomp/News.vue";
import News2 from "@/components/tscomp/News2.vue";
import NewsRouter from "@/components/tscomp/NewsRouter.vue";
import { defineComponent } from "@vue/runtime-core";
let title: string = "ts模块";
export default defineComponent({
  components: { News, News2, NewsRouter },
  data() {
      return {
          title, 
      }
  },
  methods:{
      setTitle():void{
          this.title="改变标题后ts模块 "
      }
  }
});
</script>

<style lang="scss" scoped>
</style>