const Vue = require("vue");
const Temp = require("./vue/template.vue");

new Vue({
  el: '#app',
  render: (h) => h(Temp)
});
