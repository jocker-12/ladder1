<template>
   <div class='typeBox'>
    <div v-for='(item,index) in typeList' :key='index'>
        <h1>{{item.title}}</h1>
        <ul>
            <li v-for='(v,i) in item.data' :key='i' :id='v.car_id'>
                <p>{{v.car_name}}</p>
                <p>{{v.horse_power}}马力{{v.gear_num}}挡</p>
                <p><span>指导价{{v.market_attribute.official_refer_price}}</span><span>{{v.market_attribute.dealer_price_min}}起</span></p>
                <span class='btn' @click='routerToPrice(v.car_id)'>询问低价
                </span>

            </li>
        </ul>
    </div>
   </div>
</template>
<script>
export default {
  name: "typelist",
  data() {
    return {
      data: []
    };
  },
  props: {
    typeList: {
      type: Array
    },
    routerToPrice: {
      type: Function
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style lang='scss'>
.typeBox {
  width: 100%;
  height: auto;
  div {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    h1 {
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      font-weight: normal;
      text-indent: 1em;
      font-size: 0.24rem;
      color: #999;
      background: #f4f4f4;
    }
    p {
      &:nth-child(1) {
        padding: 0.26rem 0 0.18rem;
        font-size: 0.3rem;
        line-height: 1;
        color: #3d3d3d;
      }
      &:nth-child(2) {
        color: #bdbdbd;
        font-size: 0.26rem;
      }
      &:nth-child(3) {
        text-align: right;
        padding-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #818181;
        span {
          &:nth-child(1) {
            text-align: right;
            padding-bottom: 0.1rem;
            font-size: 0.24rem;
            color: #818181;
          }
          &:nth-child(2) {
            font-size: 0.3rem;
            color: #ff2336;
            margin-left: 0.1rem;
          }
        }
      }
    }
    ul > li {
      padding: 0 0.1rem;
      box-sizing: border-box;
      border-bottom: 8px solid #f4f4f4;
    }
    .btn {
      width: 100%;
      display: block;
      height: 0.8rem;
      font-size: 0.32rem;
      line-height: 0.8rem;
      text-align: center;
      border-top: 1px solid #ccc;
      color: #00afff;
      background: #fff;
      font-weight: 500;
    }
  }
}
</style>
