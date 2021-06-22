<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-22 09:53:45
 * @FilePath: /vue_3.0_ts_study/src/views/LayoutComp.vue
-->
<template>
  <div class="wrap_all">
    <div class="left"></div>
    <div class="right">
      <h2>vuex使用（直接使用this.$store.state.count，函数commit）</h2>
      <br />
      <hr />
      <p>{{ num }}</p>
      <br />
      <button @click="add">+</button>
      <br />
      <br />
      <button @click="setvalue(1024)">set value 1024</button>
      <p>map count:{{ count }}</p>
      <p>list:</p>
      <ul>
        <li v-for="(item, index) in listZ" :key="index">{{ item }}</li>
      </ul>
      <br />
      <p>map:{{ reverseMsg }}</p>
      <p>直接:{{ getReverseMsg }}</p>
      <b>mutations 可以调用异步的函数，但是无法调用自己的函数</b>
      <p>
        action异步改变count的值：<button @click="asynchronization">
          异步+
        </button>
      </p>
      <p>action异步改变msg的值：<button @click="asyncSetMsg">异步+</button></p>
      <p>
        action异步改变msg的值：<button
          @click="$store.dispatch('setMsg', 'nimamawoyun2')"
        >
          异步+
        </button>
      </p>
      <p>userStore===</p>
      <p>{{ $store.state.userStore.userInfo }}</p>
      <p>composition api state</p>
      <ul>
        <li v-for="(item, index) in listUser1" :key="index">{{ item }}</li>
        <!-- <p>{{$store.state.msg}}</p> -->
        <!-- <p>{{listUser1}}</p> -->
        <button @click="addCountS">+ composition</button>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "@vue/runtime-core";
import { mapGetters, mapState, useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const data = reactive({});
    let listUser1 = computed(() => {
      return store.state.userStore.list;
    });
    const addCountS =()=>{
        store.commit('incCount');
        // store.dispatch('')
    }
    return { addCountS,listUser1, ...toRefs(data) };
  },
  data() {
    return {};
  },
  computed: {
    num() {
      return this.$store.state.count;
    },
    getReverseMsg() {
      return this.$store.getters.reverseMsg;
    },
    ...mapState(["listZ", "count"]),
    ...mapGetters(["reverseMsg"]),
  },
  methods: {
    add() {
      this.$store.commit("incCount");
    },
    setvalue(value:any) {
      this.$store.commit("setCount", value);
    },
    asynchronization() {
      this.$store.dispatch("asyncIncCount");
    },
    asyncSetMsg() {
      console.log("---111");
      this.$store.dispatch("setMsg", "nimamawoyun");
    },
  },
});
</script>

<style lang="scss" scoped>
.wrap_all {
  display: flex;
  .left {
    width: 300px;
    border-right: 1px solid #eee;
    min-height: 500px;
    padding: 15px;
  }
  .right {
    flex: 1;
    background: lightblue;
    padding: 15px;
  }
}
</style>