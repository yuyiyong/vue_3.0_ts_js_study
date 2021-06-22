<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-27 10:55:02
 * @FilePath: /vue_3.0_ts_study/src/views/Composition.vue
-->
<template>
  <div>
    <h2>Composition</h2>
    <div>msg:{{ msg }}</div>
    <b>{{ title }}</b>
    <br />
    <span>userName:{{ obj.username }} --- age:{{ obj.age }}</span>
    <br />
    <br />
    <button @click="handle">click me</button>
    <br />
    <br />
    <button @click="getTitle">获取title ref</button>
    <br />
    <br />
    <button @click="setTitle">修改 ref title</button>
    <br />
    <br />
    <button @click="setobj">修改 reactive</button>
    <br />
    <br />
    <p>双向绑定</p>
    <input v-model="title" />
    <br />
    <br />
    userName:<input v-model="obj.username" />
    <br />
    <br />
    toRefs绑定：descript:{{ descript }} === click:{{
      click
    }}
    toRefData===>：descript:{{ toRefData.descript }} === click:{{
      toRefData.click
    }}
    <br />
    descript:<input v-model="descript" /> click:<input v-model="click" />
    <br />
    toRefData===>descript:<input v-model="toRefData.descript" /> click:<input
      v-model="toRefData.click"
    />

    <br>
    <br>
    <h2>二、login</h2>
    <login></login>
    <br>
    <br>
    <h2>三、readOnly 很少用到（把响应式数据变成非响应式 primaryObj = readonly(primaryObj)）</h2>
    <read-only-c></read-only-c>
    <br>
    <br>
    <h2>
        四、watchEffect(watchEffect:至少执行一次，watch:特定数据)
    </h2>
    <watch-effect-c :title="title"></watch-effect-c>
    
    <br>
    <br>
    <br>
    <h2>父子组件的传值</h2>
    <p>1.props（上面的watch 的title）</p>
    <p>2.Provider Inject(一般用在嵌套很多层)</p>
    <p> - 根组件Home 子组件child 当前组件location</p>
    <home-comp></home-comp>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "@vue/reactivity";
import Login from '@/components/composition/Login.vue';
import ReadOnlyC from '@/components/composition/ReadOnlyC.vue';
import WatchEffectC from '@/components/composition/WatchEffectC.vue';
import HomeComp from '@/components/composition/HomeComp.vue';
export default {
  components: { Login, ReadOnlyC, WatchEffectC, HomeComp, },
  setup() {
    //ref 定义字符串、number等
    //reactive 定义对象
    let title = ref("我 是一个title");
    let obj = reactive({
      username: "zhangsan",
      age: 88,
    });

    let toRefData = reactive({
      descript: "nimamawoyun",
      click: 300,
    });

    let handle = () => {
      console.log("handle===>", obj.age);
    };

    const getTitle = () => {
      alert(title.value);
    };

    const setTitle = () => {
      title.value = "setTitle 我是修改后title";
      alert(title.value);
    };

    const setobj = () => {
      obj.age = 100;
      alert(obj.age);
    };

    return {
      title,
      obj,
      handle,
      getTitle,
      setTitle,
      setobj,
      toRefData,
      //...toRefData //会导致失去响应式
      ...toRefs(toRefData),
    };
  },
  data() {
    return {
      msg: "绑定数据",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>