<template>
       
        <div class='index'>
           <loading v-if='isloading'/>
          <div class='wrap' ref='wrap'> <List :data='data' :getData='getData'/></div>
           <Btn :list='list' :scrollTo='scrollTo'/>
           <Master :masterList='masterList' :masterCls='masterCls' :removeCls='removeCls'/>
        </div>
</template>

<script>
import List from "./common/list";
import Btn from "./common/btn";
import Loading from "./loading";
import Master from "./common/master";
import { lazyLoad, throttle } from "./utils/utils.js";
import { mapActions, mapState } from "vuex";
export default {
  name: "index",
  data() {
    return {
      list: [],
      data: [],
      masterList: [],
      masterCls: "",
      isloading: true
    };
  },
  computed: {
    ...mapState({
      indexData: state => state.index.index_data
    })
  },
  components: {
    Loading,
    List,
    Btn,
    Master
  },
  methods: {
    //初始化获取数据
    init() {
      console.log(this.indexData);
      fetch("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(
        res => {
          res.json().then(body => {
            this.isloading = false;
            let data = body.data;
            let arr = [];
            let list = [];
            data.forEach((item, index) => {
              if (list.indexOf(item.Spelling[0]) == -1) {
                list.push(item.Spelling[0]);
              }
            });
            list.forEach((item, index) => {
              arr.push({
                title: item,
                data: []
              });
            });
            data.forEach((item, index) => {
              arr.forEach((v, i) => {
                if (v.title === item.Spelling[0]) {
                  v.data.push(item);
                }
              });
            });
            this.list = list;
            this.data = arr;
            setTimeout(() => {
              lazyLoad.loadImg();
            }, 0);
            this.$forceUpdate();
          });
        }
      );
    },
    //子组件的请求数据函数
    getData(id) {
      fetch(
        "https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=" +
          id
      ).then(res => {
        res.json().then(body => {
          if (body.code == 1) {
            this.masterList = body.data;
            setTimeout(() => {
              lazyLoad.loadImg();
            }, 0);
            if (this.masterList.length > 0) {
              this.masterCls = "active";
            }
          } else {
            alert(body.msg);
          }
        });
      });
    },
    //移除class类名
    removeCls() {
      this.masterCls = "";
    },
    //点击滚动到指定位置
    scrollTo(ind, v) {
      console.log(ind, v);
      let wrap = this.$refs.wrap;
      let main = this.$refs.wrap.children[0];
      let child = main.children[ind];
      wrap.scrollTop = child.offsetTop;
    }
  },
  mounted() {
    this.init();
    this.getData();
    let wrap = this.$refs.wrap;
    let scroll = throttle(() => {
      lazyLoad.loadImg();
    }, 500);
    wrap.onscroll = () => {
      scroll();
    };
    scroll();
  }
};
</script>

<style lang='scss'>
@import "../css/index.scss";
</style>
