<template>
       <div class='typeBox'>
         <div class='txp' @click='routerToImg("")'>
            全部车款
         </div>
           <p class='year'>
            <span v-for='(item,index) in type' :key='index' :class='flag==index?"on":""' @click='change(item,index)'>
            {{item}}
            </span>
           </p>     
         
            <div v-for='(item,index) in typeList' :key='index'>
            <h1>{{item.title}}</h1>
            <ul>
                <li v-for='(v,i) in item.data' :key='i' :id='v.car_id' @click='routerToImg(v.car_id,v.car_name)'>
                    <p><span>{{v.car_name}}</span>   <span>{{v.market_attribute.dealer_price_min}}起</span></p>
                    <p><span>{{v.horse_power}}马力{{v.gear_num}}挡 </span>  <span>指导价{{v.market_attribute.official_refer_price}}</span> </p>
                </li>
            </ul>
        </div>
   </div>
</template>
<script>
export default {
  name: "Type",
  data() {
    return {
      flag: 0,
      list: [],
      type: [],
      typeList: []
    };
  },
  methods: {
    init() {
      let car = window.localStorage.getItem("car");
      let all = JSON.parse(car);
      this.list = all;
      let arrs = [];
      this.list.forEach((item, index) => {
        if (arrs.indexOf(item.market_attribute.year) == -1) {
          arrs.push(item.market_attribute.year);
        }
      });
      this.type = arrs;
      this.typeList = all.list;
      this.$forceUpdate();
    },
    change(v, i) {
      this.flag = i;
      let list = [];
      this.list.forEach((item, index) => {
        if (item.market_attribute.year == v) {
          if (list.indexOf(item) == -1) {
            list.push(item);
          }
        }
      });
      let data = list;
      let arr = [];
      let arrs = [];
      data.forEach((item, index) => {
        let str = item.exhaust_str + item.max_power_str + item.inhale_type;
        if (arr.indexOf(str) == -1) {
          arr.push(str);
        }
      });
      arr.forEach((item, index) => {
        arrs.push({
          title: item,
          data: []
        });
      });
      data.forEach((item, index) => {
        let str = item.exhaust_str + item.max_power_str + item.inhale_type;
        arrs.forEach((v, i) => {
          if (v.title === str) {
            v.data.push(item);
          }
        });
      });
      let sortCar = arr => {
        return arr.sort((a, b) => {
          console.log(a);
          if (a.exhaust < b.exhaust) {
            return -1;
          } else if (a.exhaust > b.exhaust) {
            return 1;
          } else {
            if (a.max_power < b.max_power) {
              return -1;
            } else if (a.max_power > b.max_power) {
              return 1;
            } else {
              return b.inhale_type - a.inhale_type;
            }
          }
        });
      };
      console.log(sortCar(arrs));
      this.typeList = sortCar(arrs);
    },
    routerToImg(carId, carName) {
      window.sessionStorage.setItem("carId", carId);
      let car = carId;
      let id = window.localStorage.getItem("id");
      if (!car) {
        this.$router.push({ path: "/img", name: "Img", query: { id: id } });
        window.sessionStorage.setItem("carName", "全部");
      } else {
        window.sessionStorage.setItem("carId", carId);
        window.sessionStorage.setItem("carName", carName);
        this.$router.push({
          path: "/img",
          name: "Img",
          query: { id: id, carId: car }
        });
      }
    }
  },
  mounted() {
    this.init();
    this.change(this.type[0], 0);
  }
};
</script>
<style lang='scss' scoped>
@import "../css/type.scss";
</style>

