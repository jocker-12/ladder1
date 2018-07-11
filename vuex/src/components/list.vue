<template>
    <div class='list'>
        <div class='box' v-for='(item,index) in list' :key='index'>
            <aside>
                <img :src='item.img' alt="">
            </aside>
            <div>
                <p>{{item.tit}}</p>
                <p>单价{{item.pic}}</p>
                <p>
                    <span @click='changeNum({ind:index,type:"-"})'>-</span>
                    <span>{{item.count}}</span>
                    <span @click='changeNum({ind:index,type:"+"})'>+</span>
                    <input type="checkbox" @change='changeItem({index:index})' :checked='item.ischecked'>
                </p>
            </div>
        </div>
    </div>      
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "list",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: state => state.index.list,
      price: state => state.index.price
    })
  },
  methods: {
    ...mapActions({
      changeItem: "changeItem",
      changeNum: "changeNum"
    })
  },
  mounted() {
    this.$store.dispatch("setList");
  }
};
</script>
<style>
.list {
  width: 100%;
}
.list .box {
  width: 100%;
  height: auto;
}
.list .box aside {
  width: 100%;
  height: auto;
}
.list .box aside img {
  width: 100%;
}
.list .box div {
  width: 100%;
  height: auto;
}
.list .box div p {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #000;
  overflow: hidden;
  font-size: 12px;
}
.list .box div p:last-child {
  display: flex;
  align-items: center;
}
.list .box div p:last-child span:nth-child(1),
.list .box div p:last-child span:nth-child(3) {
  font-size: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 24px;
  margin: 0 10px;
}
</style>
