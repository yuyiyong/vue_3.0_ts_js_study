import { createApp } from "vue";
import App from "./App.vue";
import { ArticleClass, articleModel } from "./model/articleModel";
import { UserClass, UserModel } from "./model/userModel";
import router from "./router";
import { A, B } from "./studys/namespaces";
import Vue from "vue";
import Axios from "axios";
import featchJsonp from "fetch-jsonp";
import BaseMixin from './components/mixinBase'
import store from './store'

//设置BUS
// const Bus = new Vue();
// Vue.prototype.$bus = Bus;

//...函数,剩余参数
function sum(a: number, b: number, ...params: number[]): number {
  let result = a + b;
  for (let i = 0; i < params.length; i++) {
    result += params[i];
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));

//函数重载
//同个函数提供多个函数类型，实现多种功能
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(name: string, age: number): string;
function getInfo(str: any, age?: any) {
  if (age) {
    return "My Name " + str + ", My Age" + age;
  }
  if (typeof str === "string") {
    return "我 的名字叫" + str;
  } else if (typeof str === "number") {
    return "我的年龄是：" + str;
  }
}
console.log("===>", getInfo(12));
console.log("===>", getInfo("123"));
console.log("===>", getInfo("999", 12));

//箭头函数，this指向上下文

//类
//es5
/* function Person() {
  this.name = "dui3";
  this.age = "22";
}

Person.prototype.sex = "男";
Person.prototype.work = function() {
  console.log(this.name + "I am working...");
};

let p = new Person();

p.work();

console.log(p.name);

//继承一
function Web() {
  Person.call(this);
}

//继承二 原型链继承（既可以继承构造函数方法，也可以继承原型链当中的方法） 但是实例化时无法给父类传参
function Web() {}
Web.prototype = new Person(); //原型链继承

//继承三 构造函数+原型链 的继承模式
function Web(name,age) {
    Person.call(this.name,this.age);
}

Web.prototype = Person.prototype;
 */

class Person {
  //类里的修饰符（不加修饰符，默认公有）
  //public 公有 : 子类、类外面能访问
  //protect 保护 ： 子类和类里面能访问,类外部没法访问
  //private 私有：    类里能访问，子类和类外部没法访问
  //---------------------------------------------
  //静态属性 静态方法
  //不能调用属性除非是静态属性
  //---------------------------------------------
  //抽象类继承多态
  //多态：是继承的一种表现（父类定义方法不实现，子类去实现，每个子类有不同的表现）
  ////抽象类 抽象方法：用来定义标准，只能继承用
  //抽象方法不包含具体的实现，必须在子类中实现（只能放在抽象类中）
  //-----------------------------------------------

  protected name: string = "初始 name"; //省略public
  age: number;
  static cate: string = "人类";
  //构造函数 实例化时触发的方法
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  run(): void {
    console.log(this.name + "运行。。");
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
  //静态方法 (注意，它里面不能调用类中的属性)
  static printStatic() {
    console.log("Static Function 已调用");
    console.log("Static Function 不能调用属性除非是静态属性=" + this.cate); //(注意，它里面不能调用类中的属性)
  }
}

let p = new Person("dui", 22);

p.run();
p.setName("狗蛋");
p.run();
//静态方法调用
Person.printStatic();

class Web extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  work() {
    console.log(this.name + "在工作");
  }
  run() {
    console.log(this.name + "运行。。子类");
  }
}
let w = new Web("莉丝", 111);
w.run();
w.setName("莉丝二");
w.run();
w.work();

//抽象类 抽象方法：用来定义标准，只能继承用
//抽象方法不包含具体的实现，必须在子类中实现（只能放在抽象类中）

abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract eat(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(this.name + "吃屎");
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  eat() {
    console.log(this.name + "吃鱼");
  }
}

let erha = new Dog("二哈");
erha.eat();
let tom = new Cat("汤姆");
tom.eat();
//--------------------------------------------------------------
//接口：接口是一种规范的定义（行为和动作），比抽象类更强大，属性，函数等都行
interface fullName {
  firstName: string;
  secondName?: string;
}
function printName({ firstName, secondName }: fullName): void {
  //只在一个函数用到，不用接口，直接对json约束
  console.log("接口函数：name=" + firstName + secondName);
}

const obj = { firstName: "Dui", secondName: "Y3", age: "100" }; //放外面可以，如果直接放函数里会报错
printName(obj);

interface Config {
  url: string;
  type: string;
  data?: string;
  dataType: string;
}

function ajax(config: Config) {
  let xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, true);
  xhr.send(config.data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("成功。。。");
      if (config.dataType === "json") {
        JSON.parse(xhr.responseText);
      } else {
        console.log(xhr.responseText);
      }
    }
  };
}

ajax({
  url: "https://www.baidu.com",
  type: "get",
  data: "111",
  dataType: "",
});

//函数类型接口：对方法传入的参数，以及返回值进行约束
//加密的函数类型接口
interface encrypt {
  (key: string, value: string): string;
}

const md5: encrypt = function(key, value) {
  return key + "--md5--" + value;
};

console.log(md5("key88888", "value of ccc"));

const sha1: encrypt = (key, value) => {
  return key + "--sha1--" + value;
};

console.log(sha1("name", "123"));

//可索引接口，数组、对象的约束 （不常用）
var arr: Array<number> = [1, 2, 3, 4, 4];
//等价于的接口 数组的约束
interface UserArr {
  [index: number]: string;
}
var arr1: UserArr = ["1231", "123231"];

//对象的约束
interface ObjUser {
  [index: string]: string;
}

var obj11: ObjUser = {
  aa: "bb",
  bb: "cc",
};

//类类型接口 和抽象 类很像
interface Animals {
  name: string;
  eat(str: string): void;
}

class Dogs implements Animals {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log("狗子" + this.name + "吃屎");
  }
}

const erhas = new Dogs("二哈");
erhas.eat();

//接口的接口的扩展和继承
//上面的animals接口
interface PersonInterface extends Animals {
  work(): void;
}

class Dahei implements PersonInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " eat");
  }
  work() {
    console.log(this.name + " work");
  }
}

interface color {
  color: string;
}
//继承一个类并实现接口
class DaheiTest extends Dahei implements color {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string;
}

const d = new DaheiTest("dahei", "yellow");
d.eat();
d.work();
console.log("color", d.color);

//泛型：c# 和 java中，可以使用泛型来创建可重复使用的组件，一个组件可以支持多种类型的数据。
//泛型就是解决 类 接口 方法的复用性、以及对不特定 数据类型的支持。
//泛型函数
//1.只返回string
function getData1(value: string): string {
  return value;
}
//2.同时返回 string 和 number (如果用any 放弃类型检查)
//需要传入和传出一致,具体调用时才决定用什么类型
function getData2(value: any): any {
  return value;
}

function getData<T>(value: T): T {
  return value;
}

//使用
const ccc = getData<DaheiTest>(new DaheiTest("dh", "red"));
ccc.eat;
ccc.work;
console.log("ccc.color", ccc.color);

getData<number>(123);

//泛型类 //1可以指定任意类型 2可以校验
class MinClass {
  public list: Array<number> = [];

  add(num: number): void {
    this.list.push(num);
  }
  min(): number {
    let minNum: number = 0;
    this.list.forEach((item, key) => {
      if (key == 0 || minNum > item) {
        minNum = item;
      }
    });
    return minNum;
  }
}

let m = new MinClass();
m.add(2);
m.add(9);
m.add(4);
m.add(10);
m.add(1);
console.log("最小值：", m.min());

//需要

class MinClass2<T> {
  public list: Array<T> = [];
  add(value: T): void {
    this.list.push(value);
  }

  min(): T {
    let minNum: T = this.list[0];
    this.list.forEach((item, key) => {
      if (minNum > item) {
        minNum = item;
      }
    });
    return minNum;
  }
}

let mt = new MinClass2<string>();
mt.add("cv");
mt.add("bz");
mt.add("me");
mt.add("gx");
mt.add("ik");
console.log("MinClass2最小值：", mt.min());

//泛型接口
//泛型接口函数
//写法一
interface ConfigFn<T> {
  (value1: T, value2: T): T;
}

function setData<T>(value: T): T {
  return value;
}

let getData11: ConfigFn<string> = setData;

console.log("getData11", getData11("111", "222"));

//写法二
interface ConfigFn2 {
  <T>(value1: T, value2: T): T;
}

let getData22: ConfigFn2 = function<T>(value1: T, value2: T) {
  return value1;
};
console.log("getData22", getData22<string>("name1", "dui"));

//将类作为参数的约束
/**
 定义一个User的类：映射数据库字段
 定义一个MysqlDb的类：操作数据库
 User类作为参数传入到MysqlDb中
 */

class User {
  username: string | undefined;
  password: string | undefined;
}

class ArticleCate {
  title: string | undefined;
  desc: string | undefined;
  status: number | undefined;
}

class MysqlDb<T> {
  add(data: T): boolean {
    console.log("user", data);
    return true;
  }
  updated(data: T, id: number) {
    console.log("data,id", data, "id", id);

    return true;
  }
}

let u = new User();
u.username = "铁蛋";
u.password = "asdqwe";

let articl = new ArticleCate();
articl.title = "国内";
articl.desc = "国内新闻";
articl.status = 1;

let Db = new MysqlDb<User>();
Db.add(u);
let Db2 = new MysqlDb<ArticleCate>();
Db2.add(articl);
Db2.updated(articl, 12);

/**
 功能：操作数据库 支持Mysql Mssql MongDb
 要求： add update delete get 方法
 注意：约束统一的规范、以及代码重用
 解决方案： 约束规范：定义接口；重用：泛型；

 */

interface DBI<T> {
  add(info: T): boolean;
  updata(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

//定义一个操作mysql数据库的类 注意 要实现泛型接口，这个类必须也是泛型
class MySqlDb<T> implements DBI<T> {
  constructor() {
    console.log("MySql 数据库建立链接");
  }
  add(info: T): boolean {
    console.log("MySqlDb add info", info);
    return true;
    throw new Error("Method not implemented.");
  }
  updata(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}
//定义一个操作MSsql数据库的类

class MsSqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    console.log("add info", info);
    return true;

    throw new Error("Method not implemented.");
  }
  updata(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

//操作用户表  User
let u1 = new User();
u1.username = "张三";
u1.password = "123456";

let mysql = new MySqlDb<User>(); //类作为参数约束数据传入的类型
mysql.add(u1);

//模块：内部：命名空间； 外部模块：模块 。 这以为着在模块里面定义的（变量、函数、类）在外部是不可见的
//概念：1.公共的功能单独抽离成一个文件作为一个模块。2.（变量、函数、类）私有，如果想外部使用必须export暴露出去 3.暴露后用import移入
//import {getDbData} from './modules/db'
//  /modules /model
var user11 = new UserClass();
user11.username = "二花";
user11.password = "1231231";
UserModel.add(user11);
const resData = UserModel.get(11);
console.log("resData", resData);

articleModel.add(new ArticleClass(12, "111"));
console.log("articleModel.get(12)", articleModel.get(12));

//命名空间：内部模块，避免命名冲突 src/studys/namespaces.ts
var dahei = new A.Dog("dahei");
dahei.eat();
var erhua = new B.Dog("erhua");
erhua.run();
erhua.eat();

//装饰器： 一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

//一般的装饰器是个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能。
//类装饰器、属性装饰器、方法装饰器、参数装饰器
//普通装饰器（无法传参）、类装饰器（可传参）es7标准特性

//1.类装饰器：在类声明之前被声明（紧靠类声明）；应用于类构造函数，可用来监视，修改或替换类定义。传入 一个参数

//定义一个普通装饰器
function logClass(params: any) {
  console.log("打印params", params);
  params.prototype.apiUrl = "装饰器扩展属性xxxxxxx123";
  params.prototype.run = function() {
    console.log("装饰器开始跑");
  };
}

@logClass //把HttpClass当参数传入
class HttpClient {
  constructor() {}
  getData() {}
}

var ht: any = new HttpClient();
console.log("ht.apiUrl", ht.apiUrl);
ht.run();

//定义个传参的装饰器
function logParamsClass(params: string) {
  return function(target: any) {
    console.log("params:", params, "  target:", target);
    target.prototype.apiUrl = params;
  };
}

@logParamsClass("装饰器111+www.baidu.com")
class DecoratorCl {
  aa: string = "1111111";
}

let dt: any = new DecoratorCl();
console.log("dt.apiUrl", dt.apiUrl);

//装饰器：重构构造和方法

function reNameCons(target: any) {
  console.log(target);

  return class extends target {
    apiUrl: any = "我是修改后的apiUrl";
    getData() {
      console.log(this.apiUrl);
    }
  };
}

@reNameCons
class HttpRenameCons {
  public apiUrl: string | undefined;
  constructor() {
    this.apiUrl = "我是构造函数中的apiUrl";
  }
  getData() {
    console.log(this.apiUrl);
  }
}

var httpRenameCons = new HttpRenameCons();
httpRenameCons.getData();

//属性装饰器：会在运行时当作函数被调用，传入下列2个参数：
//1.对于静态成员来说是累的构造函数，对于实例成员是类的原型对象
//2.成员的名字

function prototypeDc(params: string) {
  return function(target: any, attr: any) {
    target[attr] = params;
  };
}

class Demo1Class {
  @prototypeDc("http://www.jsdui.com")
  public url: any | undefined;

  getdata() {
    console.log("url", this.url);
  }
}

var demo1 = new Demo1Class();
demo1.getdata();

//方法装饰器：它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义
//方法装饰会在运行时出入下列3个参数：
//1.对于静态成员来说是累的构造函数，对于实例成员是类的原型对象
//2.成员的名字。
//3.成员的属性描述符

function funDc(params: any) {
  return function(target: any, methodName: any, desc: any) {
    console.log("methodName", target[methodName]);
    console.log("desc", desc);
    //改变了一个属性
    target.urlDemo = params;
    // console.log("...", target.urlDemo);
    //添加了一个方法
    target.run = function() {
      console.log("调用装饰气run");
    };
    //修改 装饰器的方法，把传入的所有参数变为string

    //1、保存方法
    var oMethod = desc.value;
    //2
    desc.value = function(...arg: any[]) {
      const res = arg.map((item) => String(item));
      console.log("arg...", res);
      oMethod.apply(this, arg); //函数的运行
    };
  };
}

class DemoFun {
  // @prototypeDc('nimamawoyun')
  urlDemo: string | undefined;

  @funDc("//www.baidu.com")
  getData() {
    console.log("原类getData", this.urlDemo);
  }
}

var demoFun: any = new DemoFun();
demoFun.getData(123, "33333", 987);
demoFun.run();

//方法参数装饰器：
//1、对于静态成员 来说是类的构造函数，对于实例成员是类的原型对象。
//2、方法的名字
//3、参数在函数参数列表中的索引

function logParams(params: any) {
  return function(target: any, methodName: any, paramsIndex: any) {
    console.log(target, methodName, paramsIndex);
  };
}

class ArgClass {
  url: string | undefined;

  getData(@logParams("arg1") arg1: string, @logParams("uuid") arg2: number) {
    console.log(arg1 + "-参数装饰器-" + arg2);
  }
}

const argClass = new ArgClass();
argClass.getData("原arg1", 1234);

//各个装饰器的执行顺序 属性333 参数555 方法444 类222 类111
//属性》方法》方法参数》类 （如果有多个从里到外）
function classOrder1(arg0: string) {
  return function(target: any) {
    console.log("classOrder1 1111");
  };
}

function classOrder2(params: any) {
  return function(target: any) {
    console.log("classOrder2 2222");
  };
}

function prototypeOrder(params: any) {
  return function(target: any, attr: any) {
    console.log("prototypeOrder 333");
  };
}

function funOrder(params: any) {
  return function(target: any, methodName: string, desc: any) {
    console.log("funOrder 444");
  };
}

function paramsOrder(params: any) {
  return function(target: any, methodName: any, paramsIndex: any) {
    console.log("paramsOrder 5555");
  };
}

@classOrder1("1111")
@classOrder2("2222")
class OrderDc {
  @prototypeOrder("3333")
  url: string | undefined;
  @funOrder("4444")
  getData(@paramsOrder("5555") arg: string) {}
}

const orderDc = new OrderDc();
orderDc.getData("22222");

const app = createApp(App);
//全局配置axios 和 jsonp 
app.config.globalProperties.Axios = Axios;
app.config.globalProperties.featchJsonp = featchJsonp;
//配置Mixin
app.mixin(BaseMixin);
//挂载vuex
app.use(store);
app.use(router).mount("#app");
