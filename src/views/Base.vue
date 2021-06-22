<!--
 * @LastEditors:  
 * @LastEditTime: 2021-05-26 15:51:53
 * @FilePath: /vue_3.0_ts_study/src/views/Base.vue
-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>一、绑定（数据、html、属性） 循环</h2>
    <div v-html="htmlValue"></div>
    <img :src="gd3" alt="" />
    <br />
    <span v-bind:title="'我是title'">鼠标放上去</span>
    <br />
    <span :[attrName]="attrValue">自定义 attrubuild</span>
    <div class="ulDiv">
      <ul>
        <li :key="key" v-for="(item, key) in imgList(4)">
          <img :src="item.url" alt="" />
        </li>
      </ul>
    </div>
    <br />
    <br />
    <div class="ulDiv">
      <ul>
        <li :key="key" v-for="(item, key) in listForList">
          <div>{{ item.cate }}</div>
          <ol>
            <li :key="key2" v-for="(item2, key2) in item.list">
              {{ item2.title }}
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <br />
    <div :key="index" v-for="(value, key, index) in objFor">
      {{ key }}--{{ value }}
    </div>
    <br />
    <br />
    <hr />
    <h2>二、 方法，事件，模版中类和样式绑定</h2>
    <div :class="MyClass"></div>
    <button @click="changeClass">change class</button>

    <div :class="classObj">可以绑定多个class</div>
    <div :class="['activeMultip1', 'activeMultip2', 'activeMultip3']">
      数组可以绑定多个class
    </div>
    <button @click="changeClassMultip">多重class</button>
    <div :style="{ color: color, fontSize: '50px' }">style 绑定</div>
    <div :style="'color:' + color">style 绑定</div>
    <div :style="objStyle">style 绑定</div>
    <div :style="[objStyle, objStyle2]">style 绑定</div>
    <span
      :key="key"
      v-for="(item, key) in nameList"
      :class="{ red: key === 1, green: key === 2 }"
    >
      {{ item }}
    </span>
    <br />
    <br />
    <button data-aid="123" @click="run($event)">事件对象</button>
    <br />
    <br />
    <button @click="one(), two()">点击按钮执行多个方法</button>
    <br />
    <br />
    <a href="https://www.baidu.com" @click="aFun($event)" target="_blank"
      >a标签阻止默认行为</a
    >
    <br />
    <a
      href="https://www.baidu.com"
      @click.prevent="function () {}"
      target="_blank"
      >a标签阻止默认行为(修饰符)</a
    >
    <br />
    <!--按键修饰符 keyup 键盘按键弹起 -->
    <input
      type="text"
      placeholder="enter 建修饰符"
      @keyup.enter="submit($event)"
    />
    <br />
    <br />
    <br />
    <hr />
    <h2>三、Dom操作，表单双向数据绑定</h2>
    <ul>
      <li>姓名: <input type="text" id="username" /></li>
      <li>年龄: <input type="text" ref="age" /></li>
    </ul>
    <button @click="doSubmit()">获取表单内容</button>
    <br />
    <br />
    <b>双向绑定</b>

    <ul>
      <li>
        姓名: <input type="text" v-model="userInfo.username" />
        <span>{{ userInfo.username }}</span>
      </li>
      <li>年龄: <input type="text" v-model="userInfo.age" /></li>
      <li>
        性别:
        <input
          type="radio"
          name="sex"
          id="sex1"
          value="1"
          v-model="userInfo.sex"
        />
        <label for="sex1">男</label>
        <input
          type="radio"
          name="sex"
          id="sex2"
          value="2"
          v-model="userInfo.sex"
        />
        <label for="sex2">女</label>
      </li>
      <li>
        城市:
        <select name="city" id="city" v-model="userInfo.city">
          <option :value="item" v-for="(item, key) in city" :key="key">
            {{ item }}
          </option>
        </select>
      </li>
      <li>
        爱好:
        <span v-for="(item, index) in userInfo.hobyList" :key="index">
          <input type="checkbox" :id="'check_' + index" v-model="item.check" />
          <label :for="'check_' + index">{{ item.title }} </label>
        </span>
      </li>
      <li>
        备注:
        <textarea
          rows="4"
          cols="30"
          type="textarea"
          v-model="userInfo.remark"
          placeholder=""
        ></textarea>
      </li>
    </ul>
    <br />
    <pre style="textalign: start">
        {{ userInfo }}
    </pre>
    <br />
    <br />
    <br />
    <hr />
    <h2>四、条件判断 计算属性 watch表达式</h2>
    <div>模版+-*/运算符 {{ a + 1 }}</div>
    <div>三木运算符 {{ flag ? "true" : "false" }}</div>
    <div>反转字符串：{{ stringMsg.split("").reverse().join("") }}</div>
    <br />
    <br />
    <hr />
    <div v-if="flag">v-if/v-else|| this is true</div>
    <div v-else>this is false</div>
    <button @click="changeFlag">Change Flag</button>
    <hr />
    <div v-if="flag">v-if</div>
    <div v-show="flag">v-show</div>

    <hr />
    <div>计算属性(compute):{{ reverseMsg }}</div>
    <button @click="stringMsg = 'nimamawoyun'">改变message</button>
    <div>
      查列表中是否有字母：
      <input v-model="searchKey" />
      <ul>
        <li :key="index" v-for="(item, index) in templeList">{{ item }}</li>
      </ul>
    </div>
    <br />
    <br />
    <br />
    <div>watch：---{{ newstringMsg }}</div>
    <button @click="changeMsg">change msg</button>
    <hr />
    <h2>五、父子组件内容、兄弟组件</h2>
    <parent @send="getChild"></parent>
    <br />
    <br />
    <h2>
      六、自定义组件v-mode双向数据绑定、slots、prop的attribute的继承，禁用继承
    </h2>
    <typing-input v-model:foo="bar"></typing-input>
    {{ bar }}

    <br />
    <my-button> hello </my-button>
    <my-layout>
      <template v-slot:header> nimamawoyun </template>
      <template v-slot:main>
        <div>java</div>
        <div>linux</div>
        <div>js</div>
        <div>ts</div>
        <div>flutter</div>
        <div>mysql</div>
      </template>
      <template v-slot:footer> DuiY3 </template>
    </my-layout>
    <br />
    <my-button class="primary">props 的attrubut 继承</my-button>
    <br />
    <br />

    <h2>六、生命周期 activated deactivated ,this.$nextTick</h2>
    <activated-comp></activated-comp>
    <br />
    <br />
    <br />
    <h2>全局绑定属性、使用axios、fetchJson 、函数防抖动</h2>
    <button @click="axiosHandle">axios btn</button>
    <p>app.config.globalProperties.</p>
    <input
      placeholder="模仿百度弹框"
      v-model="baiduInput"
      @keyup="baiduOnchange"
    />
    <button @click="featchJsonpHandle">featchJsonp</button>
    <ul>
      <li v-for="(item, index) in baiduList" :key="index">{{ item }}</li>
    </ul>
    <br />
    <br />
    <br />
    <h2>Mixin</h2>
    <div>全局mixin {{ homeMsg }}</div>
    <br />
    <br />
    <br />
    <h2>teleport 模态对话框 模拟</h2>
    <br />
    <br />
    <button type="primary" @click="teleportModel">模态对话框</button>
    <div>
      <modals :visiable="visiable" @cancel="visiable = false"></modals>
    </div>
  </div>
</template>

<script>
import Parent from "@/components/Parent.vue";
import TypingInput from "@/components/typingInput.vue";
import MyButton from "@/components/MyButton.vue";
import MyLayout from "@/components/MyLayout";
import ActivatedComp from "@/components/ActivatedComp.vue";
import axios from "axios";
import Modals from "@/components/Modals.vue";

export default {
  components: {
    Parent,
    TypingInput,
    MyButton,
    MyLayout,
    ActivatedComp,
    Modals,
  },
  mounted() {
    console.log("全局mixin ---");
    this.baseMixinLog();
  },

  data() {
    return {
      visiable: false,
      baiduInput: "",
      baiduList: [],
      bar: "1231",
      searchKey: "",
      searchList: [
        "apple",
        "orange",
        "pear",
        "brown",
        "yellow",
        "green",
        "flag",
        "string",
        "gd",
        "return",
      ],
      stringMsg: "三国演绎",
      newstringMsg: "",
      a: 1,
      flag: true,
      MyClass: "class1",
      msg: "Base Page",
      htmlValue: "<h2>我是 一个html 元素 11</h2>",
      gd1:
        "https://img14.360buyimg.com/n0/ds_image/t1/199/19/25/110381/5b868863Ebba3e2f3/388649d5f6ea7643.jpg",
      gd2:
        "https://img14.360buyimg.com/n0/jfs/t24274/96/2616792068/123475/8f786102/5b861d5fN889cd03b.jpg",
      gd3: "https://www.ign.com.cn/sm/ign_cn/screenshot/default/mb001_kc92.jpg",
      gd0:
        "https://img14.360buyimg.com/n0/jfs/t26428/218/138886523/86915/5adbbbe4/5b868879N10085728.jpg",
      attrName: "title",
      attrValue: "我是自定义属性",
      objFor: { gd: this.imgList(2)[0], zg: "zagu --1hao", author: "dui" },
      listForList: [
        {
          cate: "高达",
          list: [
            { title: "自由" },
            { title: "00" },
            { title: "命运" },
            { title: "兰姆达" },
          ],
        },
        { cate: "扎古", list: [{ title: "天狼" }, { title: "普通" }] },
      ],
      classObj: {
        activeMultip1: true,
        activeMultip2: true,
        activeMultip3: true,
      },

      color: "orange",
      objStyle: { color: "orange", fontSize: "50px" },
      objStyle2: {
        background: "blue",
      },
      nameList: ["高达", "扎古", "ma"],
      userInfo: {
        username: "",
        age: "",
        sex: "1",
        city: "",
        hobyList: [
          { title: "吃饭", check: true },
          { title: "睡觉", check: true },
          { title: "游戏", check: true },
        ],
        remark: "",
      },
      city: ["北京", "上海", "深圳"],
    };
  },
  watch: {
    stringMsg: function (value) {
      console.log("value ----", value);
      return (this.newstringMsg = value + "111 ccc");
    },
  },
  computed: {
    reverseMsg() {
      return this.stringMsg.split("").reverse().join("");
    },
    templeList() {
      const resList = [];
      this.searchList.forEach((item, index) => {
        if (item.indexOf(this.searchKey) > -1 && this.searchKey !== "") {
          resList.push(item);
        }
      });
      return resList;
    },
  },
  methods: {
    teleportModel() {
      this.visiable = true;
    },
    baiduOnchange() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (this.baiduInput === "") {
          this.baiduList = [];
          return;
        }
        this.featchJsonpHandle(this.baiduInput);
      }, 200);
    },
    axiosHandle() {
      // const url = "https://www.baidu.com/";
      /* axios('https://www.baidu.com/s?ie=utf-8&mod=1&isbd=1&isid=e4a0a61300204ac1&ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=1&fenlei=256&oq=1&rsv_pq=e4a0a61300204ac1&rsv_t=e767fGEQlUWI1zt9ey5JrR2%2FUYNmj7hsfPHAG4bSVRNav%2B8w4IVmQqjyQJs&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&bs=1&rsv_sid=33984_31254_34004_33855_33607_26350_22157&_ss=1&clist=f895c8cdd7a5094&hsug=&f4s=1&csor=1&_cr1=27961',{
        method: "get",
      crossdomain: true,
      }) */
      this.Axios(
        "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=php",
        {
          method: "get",
          crossdomain: true,
        }
      )
        .then((res) => {
          console.log("res==", res);
        })
        .catch((err) => {
          console.log("err==", err);
        });
      /* this.Axios("https://www.baidu.com").then((res) => {
        console.log(res);
      }); */
      /* axios.get(url)
        .then((response) => {
          if (response.data) {
            console.log(response.data);
          }
        })
        .catch((err) => {
          alert("请求失败");
        }); */
    },

    featchJsonpHandle(value) {
      let that = this;
      var api =
        "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + value;
      this.featchJsonp(api, {
        jsonpCallback: "cb",
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log("parsed json", json);
          this.baiduList = json.s;
        })
        .catch((ex) => {
          console.log("parsing failed", ex);
        });
    },
    changeFlag() {
      flag = !flag;
    },
    changeMsg() {
      stringMsg = "三国义演";
    },
    getChild(msg) {
      alert("我是父组件的方法----" + msg);
    },
    doSubmit() {
      //原生js (dom节点，最好不用)
      let userObj = document.querySelector("#username"); //获取dom节点
      console.log("userObj", userObj.value);
      console.log(this.$refs.age.value); //ref
      //双向数据绑定
      console.log("userInfo:", this.userInfo);
    },
    submit(e) {
      console.log(e);
      console.log(e.keyCode);
    },
    aFun(e) {
      e.preventDefault();
    },
    one() {
      console.log("我是one");
    },

    two() {
      console.log("我是two");
    },

    run(event) {
      console.log("event", event);
      //   event.srcElement.style.background='red';
      console.log("--", event);
      event.stopPropagation();
    },
    changeClass() {
      if (this.MyClass === "class1") {
        this.MyClass = "class2";
      } else {
        this.MyClass = "class1";
      }
    },
    changeClassMultip() {
      if (this.classObj.activeMultip1 === true) {
        this.classObj.activeMultip1 = false;
      } else {
        this.classObj.activeMultip1 = !this.classObj.activeMultip1;
        this.classObj.activeMultip2 = !this.classObj.activeMultip2;
      }
    },
    imgList(num) {
      const imgList = [];
      for (let index = 0; index < num; index++) {
        imgList.push({ url: this[`gd${index}`] });
      }
      return imgList;
    },
  },
};
</script>

<style lang="scss" scoped>
.ulDiv {
  ul {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    li {
      margin-right: 10px;
    }
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
}
.red {
  color: red;
}
.green {
  color: green;
}
.class1 {
  width: 100px;
  height: 100px;
  background: red;
}
.class2 {
  width: 100px;
  height: 100px;
  background: yellowgreen;
}

.activeMultip1 {
  background: lightblue;
}
.activeMultip2 {
  border: 1px solid burlywood;
}
.activeMultip3 {
  width: 150px;
}
</style>