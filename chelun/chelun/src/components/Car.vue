<template>
    <div class='carBox'>
        <div class='imgBox'  @click='toImg(datas.SerialID)'>
            <img :data-src='datas.CoverPhoto' alt=""/>
            <span>{{datas.pic_group_count}}张照片</span>
        </div>
        <div class='info'>
             <p v-if='datas.market_attribute'><span>{{datas.market_attribute.dealer_price}}万</span>
               <span>指导价{{datas.market_attribute.official_refer_price}}</span></p>
             <div class="action hover" style='fontSize:14px;' @click='routerToPrice(priceId)'>{{datas.BottomEntranceTitle}}</div>
        </div>
        <div class="carLis">
          <div class='changes'>
            <span v-for='(item,index) in type' :key='index' @click='change(item,index)' :class='index==flag?"on":""'>
              {{item}}
            </span>
          </div>
           <TypeList :typeList='typeList' :routerToPrice='routerToPrice'/>
        </div>
        <div class="footer">
          <p>询问低价</p>
          <p>本地经销商为你报价</p>
        </div>
    </div>
</template>
<script>
import Loading from "./loading";
import { lazyLoad, throttle } from "./utils/utils.js";
import TypeList from "./common/typelist";
export default {
  name: "HelloWorld",
  data() {
    return {
      flag: 0,
      isloading: true,
      datas: {},
      list: [],
      type: [],
      typeList: []
    };
  },
  components: {
    Loading,
    TypeList
  },
  methods: {
    getRouter() {
      let id = this.$route.query.id;
      fetch(
        `https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${id}`
      ).then(res => {
        res.json().then(body => {
          setTimeout(() => {
            lazyLoad.loadImg();
          }, 0);
          this.isloading = false;
          this.datas = body.data;
          console.log(this.datas);
          this.list = body.data.list;
          let arrs = [];
          this.list.forEach((item, index) => {
            if (arrs.indexOf(item.market_attribute.year) == -1) {
              arrs.push(item.market_attribute.year);
            }
          });
          arrs.unshift("全部");
          window.localStorage.setItem("car", JSON.stringify(this.list));

          this.type = arrs;
          this.typeList = body.data.list;
          this.change("全部");
          this.$forceUpdate();
        });
      });
    },
    change(v, i) {
      this.flag = i;
      let list = [];
      this.list.forEach((item, index) => {
        if (item.market_attribute.year == v) {
          if (list.indexOf(item) == -1) {
            list.push(item);
          }
        } else if (v === "全部") {
          list.push(item);
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
      this.typeList = sortCar(arrs);
      console.log("5", this.typeList[0].data[0]["car_id"]);
      this.priceId = this.typeList[0].data[0]["car_id"];
    },
    toImg(id) {
      this.$router.push({
        path: "/img",
        name: "Img",
        query: {
          id: id
        }
      });
    },
    routerToPrice(carId) {
      console.log(carId);
      let id = this.$route.query.id;
      this.$router.push({
        path: "/price",
        name: "Price",
        query: { id: id, carId: carId }
      });
    }
  },
  mounted() {
    this.getRouter();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
@import "../css/car.scss";
.changes {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  justify-content: space-between;
  display: flex;
  align-items: center;

  span {
    font-size: 0.28rem;
    flex: 1;
    text-align: center;
  }
  span.on {
    color: aqua;
  }
}
</style>
