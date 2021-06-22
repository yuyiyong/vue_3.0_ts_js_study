<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-28 11:41:30
 * @FilePath: /vue_3.0_ts_study/src/components/tscomp/NewsRouter.vue
-->
<template>
  <div>
    <ul>
      <li><router-link to="/tsView/news1">news1</router-link></li>
      <li><router-link to="/tsView/news2">news2</router-link></li>
    </ul>
    <br />
    <br />
    <ul>
      <!-- <li v-for="(item,index)in listNews" :key="index"></li> -->
      <li v-for="(item, index) in listNews" :key="index">
        <router-link :to="`/tsView/newscontaint/${item}?id=${item}`">{{
          `第${item}条新闻`
        }}</router-link>
      </li>
    </ul>
    <div>通过js 跳转路由(this.$router.push({path:`/tsView/newscontaint/${item}`,query:{id:item}}))</div>
    <ul>
      <button v-for="(item, index) in listNews" :key="index" @click="routeHandle(item)">
        {{ `第${item}条新闻` }}
      </button>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@vue/runtime-core";
interface newRouterIF {
  listNews: Array<number>;
}
export default defineComponent({
  setup() {
    const data = reactive<newRouterIF>({
      listNews: [1, 2, 3, 4, 5, 6],
    });
    // const routeHandle = (item:number):void=>{
    //     console.log("item",item);
      
        
    // }
    return {/* routeHandle */ ...toRefs(data) };
  },
  methods:{
      routeHandle(item:number){
          this.$router.push({path:`/tsView/newscontaint/${item}`,query:{id:item}})
      }
  }
});
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  border: 1px solid orange;
}
</style>