/*
 * @LastEditors:  
 * @LastEditTime: 2021-05-07 10:24:41
 * @FilePath: /vue3_ts_study/src/modules/MsSqlDb.ts
 */

import { DBI } from "./db";

let dbUrl = "xxxxxxxx";

export class MsSqlDb<T> implements DBI<T> {
  constructor() {
    console.log("MySql 数据库建立链接" + dbUrl);
  }
  add(info: T): boolean {
      console.log("add -=",info);
      return true
    // throw new Error("Method not implemented.");
  }
  updata(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    console.log("获取数据库的数据");
    return [
      { title: "123123", data: "nihao " },
      { title: "LastEditTime", data: "2021-05-06 18:02:06 " },
    ];

  }
}
