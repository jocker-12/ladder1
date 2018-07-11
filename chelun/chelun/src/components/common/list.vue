<template>
    <div class='main'>
        <div v-for='(item,index) in data' :key='index' :id='item.title'>
            <h1>{{item.title}}</h1>
            <ul>
                <li v-for='(items,ind) in item.data' :key='ind' :id='items.MasterID' @click='getData(items.MasterID)'>
                    <img  alt="" :data-src='items.CoverPhoto' src='../../css/2.png'>
                    <span>{{items.Name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { utils, lazyLoad } from "../utils/utils.js";
export default {
  name: "list",
  data() {
    return {};
  },
  props: {
    data: {
      type: Array
    },
    getData: {
      type: Function,
      default: () => {}
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style>
</style>
