/*
 * @LastEditors:  
 * @LastEditTime: 2021-05-07 10:02:20
 * @FilePath: /vue3_ts_study/src/modules/db.d.ts
 */

interface DBI <T> {
  add(info: T): boolean;
  updata(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}


export  {DBI}
