const Vue = require("vue");
const evi = require("./lib/evi");
global._evi = evi;

new Vue({
  el: '#evi',
  render: (h) => h(evi.vue)
});
