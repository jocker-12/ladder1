<template>
    <div class='showimg_box'>
    <swiper :options="swiperOption" ref="mySwiper" class='img_list'>
        <swiper-slide v-for='(item,index) in list' :key='index'>
            <div class='imgWrapBox' @click='change' :data-id='index'>
                <img  src='../../css/2.gif' :data-src='item.Url' class='swiper-lazy'/>
            </div>
        </swiper-slide>
    </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "swiperimg",
  data() {
    return {
      list: [],
      page: 1,
      swiperOption: {
        speed: 500,
        lazy: true
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  props: {
    change: {
      type: Function
    },
    showImgId: "",
    showImgCont: "",
    showImgIndex: "",
    pages: ""
  },
  methods: {
    init() {
      console.log("index", this.showImgIndex, this.pages);
      fetch(
        `https://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=${
          this.showImgCont
        }&ImageID=${this.showImgId}&Page=${this.pages}&PageSize=${this.pages *
          30}`
      ).then(res => {
        res.json().then(body => {
          body.data.List.forEach((item, index) => {
            item.Url = item.Url.replace("{0}", 8);
          });
          this.list = body.data.List;
          this.$refs.mySwiper.swiper.slideTo(this.showImgIndex, 500, false);
        });
      });
    },
    slideChange() {}
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang='scss'>
@import "../../css/swiperimg.scss";
@import "swiper/dist/css/swiper.css";
</style>
