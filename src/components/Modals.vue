<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-26 16:06:25
 * @FilePath: /vue_3.0_ts_study/src/components/Modals.vue
-->
<template>
  <teleport to="body">
  <!-- <teleport to="#app"> -->
    <div class="modal_bk" v-if="visiable">
      <div class="modal_wrap">
        <div class="close" @click="$emit('cancel')">X</div>
        <slot> 模拟modal 框 </slot>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["visiable"],
  methods: {
    close() {
      console.log("close--");
      this.visiable = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal_wrap {
  background: #fff;
  // background: #fff;
  border-radius: 10px;
  width: 50%;
  min-height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  right: 0;
  cursor: pointer;
}
.modal_bk {
  background: black;
  width: 100%;
  height: 100%;
  opacity: 70%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>