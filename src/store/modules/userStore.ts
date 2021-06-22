/*
 * @LastEditors:  
 * @LastEditTime: 2021-06-04 16:12:46
 * @FilePath: /vue_3.0_ts_study/src/store/modules/userStore.ts
 */
let userStore = {
    state:{
        list:['新闻一','新闻2','新闻3','新闻4'],
        userInfo:{
            userName:'admin',
            pwd:'qwe123'
        }
    },
    mutations:{
        setUser(state:any,value:any){
            return state.userInfo=value
        }
    },
    action:{
        // setUser({commit},value:any){
        //     return commit('setUser',value)
        // }
    },
}

export default userStore;