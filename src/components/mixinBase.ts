/*
 * @LastEditors:  
 * @LastEditTime: 2021-05-26 14:46:39
 * @FilePath: /vue_3.0_ts_study/src/components/mixinBase.ts
 */
const BaseMixin:any = {
    data() {
        return {
            homeMsg:'Base Msg',
        }
    },
    methods: {
        baseMixinLog(){
            console.log("baseMixinLog --- minxin 全局");
            
        }
    },
}

export default BaseMixin;