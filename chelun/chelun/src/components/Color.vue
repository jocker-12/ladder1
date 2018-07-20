<template>
    <div class='wrapx'>
        <p @click='routerToImg("")'>全部颜色</p>
        <div class='cont'>
          <div class='title'>
              <span v-for='(item,index) in tit' :key='index' @click='changeList(index)'>
                {{item}}
              </span>
          </div>
        <ul>
          <li v-for='(item,index) in list' :key='index' :data-id='item.ColorId' @click='routerToImg(item.ColorId,item.Name)'>
            <b :style='{"background":item.Value}'></b><span>{{item.Name}}</span>
          </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "color",
  data() {
    return {
      data: null,
      tit: [],
      list: []
    };
  },
  methods: {
    init() {
      let id = this.$route.query.id;
      fetch(
        `https://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${id}`
      ).then(res => {
        res.json().then(body => {
          let tit = [];
          tit = Object.keys(body.data);
          this.tit = tit;
          this.data = body.data;
          this.list = this.data[this.tit[0]];
        });
      });
    },
    changeList(ind) {
      let arr = this.tit;
      this.list = this.data[arr[ind]];
    },
    routerToImg(colorId, colorName) {
      console.log(colorId);
      let id = this.$route.query.id;
      if (!colorId) {
        this.$router.push({ qath: "/img", name: "Img", query: { id: id } });
        window.sessionStorage.setItem("colorName", "全部");
      } else {
        window.sessionStorage.setItem("colorId", colorId);
        window.sessionStorage.setItem("colorName", colorName);
        this.$router.push({
          path: "/img",
          name: "Img",
          query: { id: id, colorId: colorId }
        });
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang='scss' scoped>
@import "../css/color.scss";
</style>
