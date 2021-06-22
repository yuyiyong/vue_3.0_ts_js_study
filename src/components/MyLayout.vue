<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-21 10:17:52
 * @FilePath: /vue_3.0_ts_study/src/components/MyLayout.vue
-->
<template>
    <div>
        <header>
            <slot name="header">header</slot>
        </header>
        <main>
            <slot name="main">main</slot>
        </main>
        <footer>
            <slot name="footer">footer</slot>
        </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
header{
    background:cadetblue;
    
}
mian{
    background: rgb(240, 228, 219);
}
footer{
    background: rgb(237, 236, 236);
}

</style>