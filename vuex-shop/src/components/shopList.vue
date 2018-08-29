<template>
    <div>
        asdasdasda
    </div>
</template>
<script>
export default {
  name: "shopList",
  data() {
    return {
      list: []
    };
  },
  methods: {
    init() {
      fetch(
        "https://www.easy-mock.com/mock/5b303cb59766f8660232721b/ewks/asd"
      ).then(res => {
        res.json().then(body => {
          console.log(body);
        });
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style>
</style>
