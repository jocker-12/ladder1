<template>
    <div class='Box_img'>
        <div class="topBtn">
            <span>颜色</span><span>车款</span>
        </div>
        <div class="cont" ref='cont'>
            <ul v-for='(item,index) in data' :key='index' :id='item.Id'>
                <li v-for='(v,i) in item.List' :key='i' :id='i'>
                  <div v-if='i==0' class='logos' @click='showlist(item.Id)'>
                    <p>{{item.Name}}</p>
                    <p>{{item.Count}}张></p>
                  </div>
                  <div v-else :style='{"width":"0px" }'></div>
                  <img :style='{"background":"url("+v.Url+")"}' alt="" @click='showImg(item.Id,i)'>
                </li> 
            </ul>
        </div>
        <ShowImg v-if='showimg' :change='changeImg' :showImgId='showImg_id' :showImgCont='showImg_cont' :pages='pages' :showImgIndex='showImgIndex'/>
        <ImgList v-if='showList_Img' :change='changeImg'  :showImgId='showImg_id' :showImgCont='showImg_cont' :callFn='callFn'/>
    </div>
</template>

<script>
import Loading from "./loading";
import ShowImg from "./common/swiperimg";
import ImgList from "./common/imglist";
import { lazyLoad, throttle } from "./utils/utils.js";
export default {
  name: "Img",
  data() {
    return {
      isLoading: true,
      data: [],
      showimg: false,
      showList_Img: false,
      showImg_id: "",
      showImg_cont: "",
      showImgIndex: "",
      pages: ""
    };
  },
  components: {
    Loading,
    ShowImg,
    ImgList
  },
  methods: {
    getData() {
      let id = this.$route.query.id;
      this.showImg_cont = id;
      fetch(
        `https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}`
      ).then(res => {
        res.json().then(body => {
          setTimeout(() => {
            lazyLoad.loadImg();
          }, 0);
          this.isLoading = false;
          let arr = body.data;
          arr.forEach((item, index) => {
            item.List.forEach((v, i) => {
              let str = v.Url.replace("{0}", "6");
              v.Url = str;
            });
            this.data = arr;
            console.log(this.data);
          });
        });
      });
    },
    showImg(id, index) {
      this.showImg_id = id;
      this.showImgIndex = index;
      this.showimg = true;
    },
    changeImg() {
      this.showimg = !this.showimg;
    },
    callFn(index, options) {
      this.showImgIndex = index;
      let obj = options;
      this.showImg_id = obj.id;
      this.pages = obj.page;
      console.log(this.pages, this.showImg_id);
      this.changeImg();
    },
    showlist(id) {
      console.log(1);
      this.showImg_id = id;
      this.showList_Img = true;
    }
  },
  mounted() {
    this.getData();
    let cont = this.$refs.cont;
    let scroll = throttle(() => {
      lazyLoad.loadImg();
    }, 500);
    cont.onscroll = () => {
      scroll();
    };
  }
};
</script>
<style lang='scss'>
@import "../css/img.scss";
</style>
