import { MsSqlDb } from "@/modules/MsSqlDb";

/*
 * @LastEditors:  
 * @LastEditTime: 2021-05-07 10:35:02
 * @FilePath: /vue3_ts_study/src/model/articleModel.ts
 */
class ArticleClass {
  id: number;
  title: string;
  desc?: string;
  constructor(id: number, title: string, desc?: string) {
    this.id = id;
    this.title = title;
    this.desc = desc;
  }
}

var articleModel = new MsSqlDb();
export { ArticleClass, articleModel };
