const Vue = require("vue");
const account = require("./lib/account");
global._api = account.api;

new Vue({
  el: '#app',
  render: (h) => h(account.vue)
});
