import { MsSqlDb } from '../modules/MsSqlDb';
/*
 * @LastEditors:  
 * @LastEditTime: 2021-05-07 10:07:56
 * @FilePath: /vue3_ts_study/src/model/article.ts
 */

//定义数据库的映射

class UserClass{
    username:string|undefined;
    password:string|undefined;

}

var UserModel = new MsSqlDb<UserClass>();

export {UserModel,UserClass}
