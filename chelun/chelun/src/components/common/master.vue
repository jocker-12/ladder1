<template>
    <div class='masterBox' ref='box' :class='masterCls' 
    @touchstart.stop='touchstart'
    @touchend.stop='touchend'
    @touchmove.stop='touchmove'
    >
            <div v-for='(item,index) in masterList' :key='index' >
                <h1>{{item.GroupName}}</h1>
                <ul>
                    <li v-for='(items,ind) in item.GroupList' :key='ind' @click.stop='toCar(items.SerialID)'>
                         <aside>
                           <img :data-src="items.Picture" alt=""/>
                       </aside>
                       <hgroup>
                           <h1>{{items.AliasName}}</h1>
                           <h2>{{items.DealerPrice}}</h2>
                       </hgroup>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
import { lazyLoad, throttle } from "../utils/utils.js";
export default {
  name: "master",
  data() {
    return {
      startTouch: "",
      x: 0
    };
  },
  props: {
    masterList: {
      type: Array
    },
    masterCls: {
      type: String
    },
    removeCls: {
      type: Function
    }
  },
  methods: {
    touchstart(e) {
      let touch = e.touches[0];
      this.startTouch = touch.pageX;
      this.x = 0;
    },
    touchmove(e) {
      let touch = e.touches[0];
      let pageX = touch.pageX;
      this.x = pageX - this.startTouch;
      if (this.x > 0) {
        this.$refs.box.style.transform =
          "translate3d(" + this.x + "px" + ",0,0)";
      }
    },
    touchend(e) {
      console.log(e);
      this.$refs.box.style.transform = "";
      if (this.x > 100) {
        this.removeCls();
      }
    },
    toCar(id) {
      window.localStorage.setItem("id", id);
      this.$router.push({
        path: "/car",
        name: "Car",
        query: {
          id: id
        }
      });
    }
  },
  mounted() {
    setTimeout(() => {
      lazyLoad.loadImg();
    }, 0);
    let Box = this.$refs.box;
    let scroll = throttle(() => {
      lazyLoad.loadImg();
    }, 500);
    Box.onscroll = () => {
      scroll();
    };
  }
};
</script>
<style lang='scss'>
@import "../../css/master.scss";
</style>
