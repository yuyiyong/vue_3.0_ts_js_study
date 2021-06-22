/*
 * @LastEditors:  
 * @LastEditTime: 2021-05-31 15:34:35
 * @FilePath: /vue_3.0_ts_study/src/store/index.ts
 */
import userStore from './modules/userStore';

// store.ts
import { InjectionKey,ComponentCustomProperties } from 'vue'
import { createStore, Store } from 'vuex'

declare module '@vue/runtime-core'{
  interface State{
    count: number,
    listZ:string[],
    msg:string,
  }

  interface ComponentCustomProperties {
    $store:Store<State>
  }
}

// define your typings for the store state
// export interface State {
//   count: number
// }

// define injection key
// export const key: InjectionKey<Store<State>> = Symbol()

export default createStore({
  state: {
    count: 9527,
    listZ:['马总','李总','张张','三三','铁蛋'],
    msg:'你好vuex,我要反转了'
  },
  mutations: { //可以异步，但是无法调用自己的函数
    incCount(state:any){
      return state.count++;
    },
    setCount(state:any,value){
      return state.count = value
    },
    setMsg(state:any,value){
      return state.msg=value
    }
  },
  actions: {
    asyncIncCount(context){
      setTimeout(()=>{
        context.commit('incCount') //执行mutation
      },1000)
    },
    setMsg(context,value){
      setTimeout(()=>{
        context.commit('setMsg',value);
      },1000)
    }
  },
  getters:{
    reverseMsg(state){
      return state.msg.split('').reverse().join('');
    }
  },//相当于computed
  modules: {
    userStore:userStore,
  },
});
//asynchronization