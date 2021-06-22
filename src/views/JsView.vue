<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-22 11:44:28
 * @FilePath: /vue_3.0_ts_study/src/views/JsView.vue
-->
<template>
  <div class="wrap_all">
    <div class="left">
      <ul>
        <li>
          <router-link to="/jsView/variable">Javascript变量</router-link>
        </li>
        <li>
          <router-link to="/jsView/operator">Javascript运算符</router-link>
        </li>

        <li>
          <router-link to="/jsView/Array">Javascript数组</router-link>
        </li>
        <li>
          <router-link to="/jsView/flowState">Javascript流程语句</router-link>
        </li>
        
        <li>
          <router-link to="/jsView/dataType">Javascript数据类型</router-link>
        </li>

        <li>
          <router-link to="/jsView/strFunction">Javascript字符串函数</router-link>
        </li>
        <li>
          <router-link to="/jsView/functionBase">Javascript函数基础</router-link>
        </li>
        <li>
          <router-link to="/jsView/domBaseOpr">Javascript基础DOM操作</router-link>
        </li>
        <li>
          <router-link to="/jsView/regular">Javascript正则表达式</router-link>
        </li>
        <li>
          <router-link to="/jsView/JQueryJs">JQuery</router-link>
        </li>
        <li>
          <router-link to="/jsView/WindowObj">Window对象</router-link>
        </li>


        
      </ul>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul{
  list-style: none;
  text-align: left;
  a {
    text-decoration: none;
  }
  li{
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
  }
}
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
    // background: lightblue;
    padding: 15px;
  }
}
</style>