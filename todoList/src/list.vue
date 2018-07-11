<template>
    <div class='main'>
        <div class='btn'>
            <span @click='changeType'>全部</span>
            <span @click='changeType'>未完成</span>
            <span @click='changeType'>已完成</span>
        </div>
        <div class="mainList">
            <div class='list_text' v-for='(item,index) in all' :key='index' :style='{textDecoration:item.isOver?"line-through":""}'  :data-id='item.id-1'>
                <span>{{item.text}}</span>
                <span @click='over(item.id)'>{{item.isOver?'已完成':'未完成'}}</span>
                <span @click='remove(item.id)'>删除</span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "List",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      all: state => state.index.all
    })
  },
  props: {
    init: "",
    fn: {
      type: Function
    }
  },
  methods: {
    over(ind) {
      this.$store.commit("setIsOver", { ind: ind });
      this.$store.commit("filters", { over: this.init });
    },
    remove(ind) {
      this.$store.commit("removeItem", { ind: ind });
      this.$store.commit("filters", { over: this.init });
    },
    changeType(e) {
      this.fn(e.target.innerHTML);
      this.$store.commit("filters", { over: e.target.innerHTML });
    }
  }
};
</script>
<style>
.main {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.main .btn {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.btn span {
  flex: 1;
  text-align: center;
  background: #000;
  height: 100%;
  color: #fff;
}
.main .mainList {
  width: 100%;
  flex: 1;
  overflow-y: scroll;
}
.main .mainList .list_text {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main .mainList .list_text span {
  text-align: center;
  flex: 1;
  height: 100%;
  line-height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 1;
}
.main .mainList .list_text span:nth-child(1) {
  text-align: left;
}
</style>
