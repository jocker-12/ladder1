<template>
  <div id="app">
     <div class='top'>
       <input type="text" :value='inputs' @input='set'><button @click='clickAfter'>添加</button>
     </div>
     <div class='cont'>
       <List :init='init' :fn='fn'/>
     </div>
  </div>
</template>

<script>
import List from "./list";
import { mapState, mapMutations } from "vuex";
export default {
  name: "app",
  data() {
    return {
      ind: 0,
      init: "全部"
    };
  },
  components: {
    List
  },
  computed: {
    ...mapState({
      inputs: state => state.index.input
    })
  },
  methods: {
    ...mapMutations({}),
    set(e) {
      this.$store.commit("setInput", { value: e.target.value });
    },
    fn(v) {
      console.log("v", v);
      this.init = v;
    },
    clickAfter() {
      this.$store.commit("setList", { id: (this.ind += 1) });
      this.$store.commit("filters", { over: this.init });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.top {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top button {
  width: 60px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #000;
  color: #fff;
  border: 0;
  outline: none;
  border-left: 1px solid #fff;
}
.top input {
  flex: 1;
  height: 100%;
  border: 0;
  outline: none;
  color: rgb(255, 255, 255);
  background: #000000;
  padding: 5px;
  box-sizing: border-box;
}
.cont {
  flex: 1;
  width: 100%;
  background: #c7c3c3;
}
</style>
