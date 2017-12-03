const Vue = require("vue");
const app = require("./lib/account");
global._app = app;

new Vue({
  el: '#app',
  render: (h) => h(app.vue)
});
