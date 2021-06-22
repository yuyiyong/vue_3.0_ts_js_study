<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-28 14:15:44
 * @FilePath: /vue_3.0_ts_study/src/components/tscomp/NewsContaint.vue
-->
<template>
  <div>
    新闻内容(1.this.$route.params接收动态值，2.this.$route.query接收get传值)
  </div>
  <p>这是第{{id}}条新闻</p>
  <button @click="goTDlist">/todolist</button>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "@vue/runtime-core";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
interface routerIf{
    id:string|string[],
    goTDlist():void,
}
export default defineComponent({
  setup(props) {
    const router = useRouter(); // 第一步
    const route = useRoute();
    const idP = watch(route,(val)=>{
        console.log("val",val.params);
        data.id=val.params.id
    })
    const data = reactive<routerIf>({
        id:'',
      goTDlist: () => {
        router.push({name:'newscontaint',params:{id:12}});
        id:''
        console.log("toto",route.query);
        console.log('params',route.params);
        console.log("....");
      },
    });
    onMounted(() => {
      console.log("this.$route.params", route.query.type);
    });

    return { ...toRefs(data) };
  },
  /* mounted() {
     console.log("this.$route.params",this.$route.params); 
     console.log("this.$route.query",this.$route.query); 
  }, */
});
</script>

<style lang="scss" scoped>
</style>