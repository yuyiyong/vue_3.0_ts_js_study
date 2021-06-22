<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-28 14:44:33
 * @FilePath: /vue_3.0_ts_study/src/App.vue
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/base">Base</router-link> |
    <router-link to="/todolist">Todo List</router-link> |
    <router-link to="/composition">Composition</router-link> |
    <router-link to="/tsView">tsView</router-link> |
    <router-link :to="{name:'layout'}">layout</router-link> |
    <router-link :to="{name:'jsView'}">JsView</router-link> |
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
