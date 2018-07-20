<template>
    <div class='showlist_box' ref='scrollBox'>
        <ul class='list_box'>
          <li v-for='(item,index) in list' :key='index' @click='callFn(index,options)'>
            <img :style='{"background":`url(${item.Url}) no-repeat top`}' alt="">
          </li>
          <div class='load' ref='load'>
            加载中...
          </div>
        </ul>
    </div>
</template>

<script>
import { throttle } from "../utils/utils.js";
export default {
  name: "imglist",
  data() {
    return {
      page: 1,
      list: [],
      options: {
        id: "",
        count: "",
        page: ""
      }
    };
  },
  props: {
    showImgId: "",
    showImgCont: "",
    callFn: {
      type: Function
    }
  },
  methods: {
    init() {
      fetch(
        `https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=${
          this.showImgCont
        }&ImageID=${this.showImgId}&Page=${this.page}&PageSize=30`
      ).then(res => {
        res.json().then(body => {
          body.data.List.forEach((item, index) => {
            item.Url = item.Url.replace("{0}", 3);
          });
          let obj = {
            id: body.data.ID,
            page: body.data.Page
          };
          this.options = { ...obj };
          this.list = this.list.concat(body.data.List);
          console.log(this.options);
        });
      });
    }
  },
  mounted() {
    this.init();
    let scrollBox = this.$refs.scrollBox;
    let loadFn = throttle(() => {
      if (
        window.innerHeight + scrollBox.scrollTop >
        this.$refs.scrollBox.children[0].offsetHeight - 30
      ) {
        this.page++;
        this.init();
      }
    }, 500);
    scrollBox.onscroll = () => {
      loadFn();
    };
  }
};
</script>
<style lang='scss'>
@import "../../css/imglist.scss";
</style>
