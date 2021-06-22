/*
 * @LastEditors:  
 * @LastEditTime: 2021-05-07 11:52:09
 * @FilePath: /vue3_ts_study/src/studys/namespaces.ts
 */

//命名空间：内部模块，避免命名冲突
export namespace A {
    interface Animal {
      name: string | undefined;
      eat(): void;
    }
    export class Dog implements Animal {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
      eat(): void {
        console.log(this.name + "吃便便");
      }
    }
  }
  
export namespace B {
    interface Animal {
      name:string|undefined;
      run():void;
    }
    export class Dog implements Animal{
      name: string;
      constructor(name: string) {
        this.name = name;
      }
      run(): void {
        console.log(this.name+'摇着尾巴跑');
        
      }
      eat(): void {
        console.log(this.name + "吃狗粮");
      }
  
    }
  }

