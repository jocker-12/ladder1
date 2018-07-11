<template>
    <div class='wrap'>
        <div class="cont">
            <List/>
        </div>
        <div class='footer'>
            全选<input type="checkbox" @change='isSelectAll' :checked='selectAll'>
            <span>总价{{price}}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import List from "./list";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    List
  },
  computed: {
    ...mapState({
      price: state => state.index.price,
      selectAll: state => state.index.SelectAll
    })
  },
  methods: {
    ...mapActions({
      isSelectAll: "isSelectAll"
    })
  }
};
</script>
<style>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}
.wrap .cont {
  flex: 1;
  width: 100%;
  overflow-y: scroll;
}
.wrap .footer {
  width: 100%;
  height: 40px;
}
</style>
