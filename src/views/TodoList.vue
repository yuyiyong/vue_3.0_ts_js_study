<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-20 10:44:45
 * @FilePath: /vue_3.0_ts_study/src/views/TodoList.vue
-->
<template>
  <div>
    <input type="text" v-model="inputText" @keyup.enter="addItem" />
    <button @click="addItem">确定</button>
    <br />
    正在进行
    <hr />
    <ul>
      <li v-show="!item.check" v-for="(item, index) in todoList" :key="index">
        <input
          type="checkbox"
          v-model="item.check"
          :id="'cc_' + index"
          @change="saveList"
        /><label :for="'cc_' + index">{{ item.text }}</label>
        <button @click="delItem(index)">删除</button>
      </li>
    </ul>
    已完成
    <hr />
    <ul>
      <li v-show="item.check" v-for="(item, index) in todoList" :key="index">
        <input
          type="checkbox"
          v-model="item.check"
          :id="'cc_' + index"
          @change="saveList"
        /><label :for="'cc_' + index">{{ item.text }}</label>
        <button @click="delItem(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
      todoList: [],
    };
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("todoList"))) {
      this.todoList = JSON.parse(localStorage.getItem("todoList"));
    } else {
      this.todoList = [];
    }
  },
  methods: {
    addItem() {
      if (this.inputText) {
        this.todoList.push({
          text: this.inputText,
          check: false,
        });
        this.inputText = "";
        this.saveList();
      }
    },
    delItem(index) {
      this.todoList.splice(index, 1);
      this.saveList();
    },
    saveList() {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>