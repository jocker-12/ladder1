<template>
    <div class='Box_img' >
        <div class="topBtn">
            <span @click='routerToColor'>{{colorName?colorName:'颜色'}}</span><span @click='routerToType'>{{carName?carName:'车型'}}</span>
        </div>
        <div class="cont" ref='cont' style='{"background":"url(data:image/jpeg;base64,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)"}'>
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
      pages: "",
      priceId: "",
      colorName: "",
      carName: ""
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
      this.colorName = window.sessionStorage.getItem("colorName");
      this.carName = window.sessionStorage.getItem("carName");
      let colorId = this.$route.query.colorId;
      let carId = this.$route.query.carId;
      let str = "";
      if (id && !colorId && !carId) {
        str = `https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}`;
      } else if (colorId && id && !carId) {
        str = `https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&ColorID=${colorId}`;
      } else if (!colorId && id && carId) {
        str = `https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&CarID=${carId}`;
      } else if (colorId && id && carId) {
        str = `https://baojia.chelun.com/v2-car-getImageList.html?SerialID=${id}&ColorID=${colorId}&CarID=${carId}`;
      }
      fetch(str).then(res => {
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
    },
    routerToColor() {
      this.$router.push({
        path: "color",
        name: "color",
        query: { id: this.$route.query.id }
      });
    },
    routerToType() {
      this.$router.push({ path: "type", name: "Type" });
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
