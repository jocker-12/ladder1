<template>
   <div class="p">
        <header>
            <p>可向多个商家咨询最低价，商家及时回复</p>
        </header>
        <section class="content">
            <div class="q-info">
                <img :src="infoData.details?infoData.details.serial.Picture:''">
                <div>
                    <p>{{infoData.details?infoData.details.serial.AliasName:''}}</p>
                    <p>
                        <span>{{infoData.details?infoData.details.market_attribute.year:''}}款</span>
                        <span>{{infoData.details?infoData.details.car_name:''}}</span>
                    </p>
                </div>
            </div>
            <div class="self-info">
                <p class="tip">个人信息</p>
                <ul>
                    <li>
                        <span>姓名</span>
                        <input type="text" placeholder="输入你的真实中文姓名" maxlength="4">
                    </li>
                    <li>
                        <span>手机</span>
                        <input type="tel" placeholder="输入你的真实手机号码" maxlength="11">
                    </li>
                    <li><span>城市</span><span @click='cityChange'>{{cityName}}</span></li>
                </ul>
                <div class="quotation">
                    <div>询最低价</div>
                </div>
            </div>
            <div class="dealer-info">
                <p class="tip">选择报价经销商</p>
                <ul>
                    <li v-for="(item, index) in infoData.list" :key="index">
                        <p>
                            <span>{{item.dealerShortName}}</span>
                            <span>{{(item.promotePrice).slice(0,5)}}万</span>
                        </p>
                        <p>
                            <span>{{item.address}}</span>
                            <span>售{{item.saleRange}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <footer>
            <button>询最低价</button>
        </footer>
       <CarList :flag='showCity' :Fn='cityChange'/>
    </div>
</template>

<script>
import CarList from "./carList";
export default {
  name: "Price",
  data() {
    return {
      cityId: "",
      cityName: "",
      infoData: {},
      showCity: false
    };
  },
  components: {
    CarList
  },
  methods: {
    init() {
      let id = this.$route.query.id;
      let carId = this.$route.query.carId;
      fetch("https://baojia.chelun.com/location-client.html").then(res => {
        res.json().then(body => {
          console.log(body.data);
          this.cityId = body.data.CityID;
          this.cityName = body.data.CityName;
          fetch(
            `https://baojia.chelun.com/v2-dealer-alllist.html?carId=${carId}&cityId=${
              body.data.CityID
            }`
          ).then(res => {
            res.json().then(body => {
              this.infoData = body.data;
            });
          });
        });
      });
    },
    cityChange(v) {
      this.showCity = !this.showCity;
      if (v) {
        this.cityName = v;
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import "../css/price.scss";
</style>
