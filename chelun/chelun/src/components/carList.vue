<template>
   <div class='carList_box'  :id='flag?"on":""'>
       <main>
           <h1>省市</h1>
           <ul>
               <li v-for='(item,index) in list' :key='index' @click='clickLi(item.CityID)'>
                   <span>{{item.CityName}}</span>
               </li>
           </ul>
       </main>
       <div class='citybox' :class='show?"active":""' @click.stop.prevent='changeShow'>
           <ul>
               <li v-for='(item,index) in data' :key='index' @click='Fn(item.CityName)'>
                   <span>{{item.CityName}}</span>
               </li>
           </ul>
       </div>
   </div>
</template>
<script>
export default {
  name: "carList",
  data() {
    return {
      list: [],
      data: [],
      show: true
    };
  },
  props: {
    flag: "",
    Fn: {
      type: Function
    }
  },
  methods: {
    init() {
      fetch("https://baojia.chelun.com/v1-city-alllist.html").then(res => {
        res.json().then(body => {
          this.list = body.data;
        });
      });
    },
    clickLi(v) {
      fetch(
        `https://baojia.chelun.com/v1-city-alllist.html?provinceid=${v}`
      ).then(res => {
        res.json().then(body => {
          this.data = body.data;
          console.log(this.data);
          this.changeShow();
        });
      });
    },
    changeShow() {
      this.show = !this.show;
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang='scss'>
@import "../css/carlist.scss";
</style>
