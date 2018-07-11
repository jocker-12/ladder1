<template>
    <div id='logoBox'>
        <span v-for='(item,index) in list' :key='index' @click.stop='scrollTo(index,item)'>
            {{item}}
        </span>
    </div>
</template>
 
<script>
export default {
  name: "btn",
  data() {
    return {};
  },
  methods: {},
  props: {
    list: {
      type: Array
    },
    scrollTo: {
      type: Function
    }
  },
  mounted() {}
};
</script>
 
 <style>
</style>
 